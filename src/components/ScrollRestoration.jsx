import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Set manual scroll restoration once at module load so the browser never
// interferes with our own restore logic.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const STORAGE_PREFIX = "scroll-pos:";
const HAS_NAV_KEY = "swarali_has_nav";

// How many consecutive ResizeObserver ticks with identical scrollHeight before
// we consider the page height stable and stop re-applying scroll.
const STABLE_TICKS = 2;

// Pixel tolerance when comparing window.scrollY to the target; 4 px covers
// sub-pixel rounding differences across browsers without hiding real drift.
const SCROLL_TOLERANCE_PX = 4;

// Hard upper bound for the ResizeObserver restore loop (ms). Covers slow
// connections with late-loading images and embedded maps.
const MAX_RESTORE_DURATION_MS = 1200;

export { HAS_NAV_KEY };

// In-memory map for the fastest possible reads (avoids JSON parse on every
// scroll event).
const posMap = new Map();

function storageKey(key) {
  return STORAGE_PREFIX + key;
}

function savePos(key, x, y) {
  posMap.set(key, { x, y });
  try {
    window.sessionStorage.setItem(storageKey(key), JSON.stringify({ x, y }));
  } catch {
    // ignore quota / private-browsing errors
  }
}

function readPos(key) {
  if (posMap.has(key)) return posMap.get(key);
  try {
    const raw = window.sessionStorage.getItem(storageKey(key));
    if (raw) {
      const parsed = JSON.parse(raw);
      posMap.set(key, parsed);
      return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

// Resolve a stable key — 'default' can appear for the initial entry on some
// router versions, so fall back to pathname+search in that case.
function resolveKey(location) {
  return location.key && location.key !== "default"
    ? location.key
    : location.pathname + location.search;
}

function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  // --- Continuous scroll saving -------------------------------------------
  // We keep one ref to the "current save key" so the rAF closure always writes
  // to the correct bucket even after fast navigations.
  const saveKeyRef = useRef(resolveKey(location));

  // Use a layout effect so the listener is attached synchronously before the
  // first paint on each location mount.
  useLayoutEffect(() => {
    const key = resolveKey(location);
    saveKeyRef.current = key;

    // Save on pagehide (mobile Safari / Chrome fire this when navigating away)
    const handlePageHide = () => {
      savePos(saveKeyRef.current, window.scrollX, window.scrollY);
    };

    // Save when the tab goes to background (Android back-gesture pre-fires this)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        savePos(saveKeyRef.current, window.scrollX, window.scrollY);
      }
    };

    // rAF-throttled scroll listener — updates in-memory + sessionStorage
    let rafPending = false;
    const handleScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        savePos(saveKeyRef.current, window.scrollX, window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", handlePageHide);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Also save once on teardown (covers navigation via link click)
      savePos(saveKeyRef.current, window.scrollX, window.scrollY);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", handlePageHide);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location]);

  // --- Scroll restore / reset on navigation --------------------------------
  // Use refs so the cleanup function inside useLayoutEffect always has the
  // latest handles and we avoid StrictMode double-invoke issues.
  const restoreRafRef = useRef(null);
  const restoreRoRef = useRef(null);
  const restoreTimeoutRef = useRef(null);
  const prevNavKeyRef = useRef(null);

  useLayoutEffect(() => {
    const navKey = resolveKey(location);

    // Deduplicate: React StrictMode mounts effects twice with the same key;
    // also skip if the key hasn't changed.
    if (prevNavKeyRef.current === navKey) return;
    prevNavKeyRef.current = navKey;

    // Cancel any in-flight restore from a previous navigation
    if (restoreRafRef.current !== null) {
      cancelAnimationFrame(restoreRafRef.current);
      restoreRafRef.current = null;
    }
    if (restoreRoRef.current !== null) {
      restoreRoRef.current.disconnect();
      restoreRoRef.current = null;
    }
    if (restoreTimeoutRef.current !== null) {
      clearTimeout(restoreTimeoutRef.current);
      restoreTimeoutRef.current = null;
    }

    // --- PUSH / REPLACE: go to top (or hash anchor) -------------------------
    if (navigationType !== "POP") {
      try {
        window.sessionStorage.setItem(HAS_NAV_KEY, "1");
      } catch {
        // ignore
      }

      if (location.hash) {
        // Hash anchor: wait for DOM then scroll into view
        restoreRafRef.current = requestAnimationFrame(() => {
          restoreRafRef.current = requestAnimationFrame(() => {
            restoreRafRef.current = null;
            const el = document.querySelector(location.hash);
            if (el) {
              el.scrollIntoView({ block: "start" });
            }
          });
        });
      } else {
        restoreRafRef.current = requestAnimationFrame(() => {
          restoreRafRef.current = requestAnimationFrame(() => {
            restoreRafRef.current = null;
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          });
        });
      }
      return;
    }

    // --- POP: restore saved position ----------------------------------------
    const saved = readPos(navKey);
    const targetX = saved?.x ?? 0;
    const targetY = saved?.y ?? 0;

    // Helper: apply scroll, clamping only AFTER the RO has fired at least once
    // so we don't snap to a prematurely small footer.
    let roFired = false;
    let prevHeight = 0;
    let stableCount = 0;

    function applyScroll() {
      const maxY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      // Before the first RO tick the page may not be at full height yet —
      // pass the raw targetY and let the browser silently cap it; we'll
      // re-correct once the RO fires.
      const clampedY = roFired ? Math.min(targetY, maxY) : targetY;
      window.scrollTo({ top: clampedY, left: targetX, behavior: "auto" });
    }

    // Initial apply: double rAF + setTimeout to let layout stabilise
    restoreRafRef.current = requestAnimationFrame(() => {
      restoreRafRef.current = requestAnimationFrame(() => {
        restoreRafRef.current = null;
        setTimeout(() => {
          applyScroll();

          // Install ResizeObserver to re-apply as lazy images / iframes grow
          // the page, up to 1200 ms.
          const ro = new ResizeObserver(() => {
            roFired = true;
            const currentHeight = document.documentElement.scrollHeight;

            applyScroll();

            const maxY = Math.max(0, currentHeight - window.innerHeight);
            const clamped = Math.min(targetY, maxY);
            const withinTolerance = Math.abs(window.scrollY - clamped) <= SCROLL_TOLERANCE_PX;

            if (currentHeight === prevHeight) {
              stableCount += 1;
            } else {
              stableCount = 0;
              prevHeight = currentHeight;
            }

            if (stableCount >= STABLE_TICKS && withinTolerance) {
              ro.disconnect();
              restoreRoRef.current = null;
              if (restoreTimeoutRef.current !== null) {
                clearTimeout(restoreTimeoutRef.current);
                restoreTimeoutRef.current = null;
              }
            }
          });

          ro.observe(document.documentElement);
          restoreRoRef.current = ro;

          // Hard stop after MAX_RESTORE_DURATION_MS regardless
          restoreTimeoutRef.current = setTimeout(() => {
            ro.disconnect();
            restoreRoRef.current = null;
            restoreTimeoutRef.current = null;
            // Final clamp-and-apply once the timeout fires
            roFired = true;
            applyScroll();
          }, MAX_RESTORE_DURATION_MS);
        }, 0);
      });
    });

    return () => {
      // Cleanup if location changes again while restore is in-flight
      if (restoreRafRef.current !== null) {
        cancelAnimationFrame(restoreRafRef.current);
        restoreRafRef.current = null;
      }
      if (restoreRoRef.current !== null) {
        restoreRoRef.current.disconnect();
        restoreRoRef.current = null;
      }
      if (restoreTimeoutRef.current !== null) {
        clearTimeout(restoreTimeoutRef.current);
        restoreTimeoutRef.current = null;
      }
    };
  }, [location, navigationType]);

  return null;
}

export default ScrollRestoration;
