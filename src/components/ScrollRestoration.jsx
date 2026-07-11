import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORAGE_KEY = "swarali_scroll_positions";

function getPositions() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function savePositions(positions) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // ignore
  }
}

function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const prevKeyRef = useRef(null);

  // Disable the browser's native scroll restoration so we fully control it
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Save the current scroll position before navigating away
  useEffect(() => {
    const currentKey = location.key;

    // Persist on beforeunload (e.g. full-page refresh within the tab)
    const handleBeforeUnload = () => {
      const positions = getPositions();
      positions[currentKey] = { x: window.scrollX, y: window.scrollY };
      savePositions(positions);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Save when navigating away from this location
      window.removeEventListener("beforeunload", handleBeforeUnload);
      const positions = getPositions();
      positions[currentKey] = { x: window.scrollX, y: window.scrollY };
      savePositions(positions);
    };
  }, [location.key]);

  // Restore or reset scroll position on navigation
  useEffect(() => {
    // Skip on the very first render if this is the same key we already processed
    if (prevKeyRef.current === location.key) return;
    prevKeyRef.current = location.key;

    // If there's a hash, prefer scrolling to that element
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }

    if (navigationType === "POP") {
      // Restore the previously saved position for this location key
      const positions = getPositions();
      const saved = positions[location.key];
      requestAnimationFrame(() => {
        window.scrollTo({
          left: saved?.x ?? 0,
          top: saved?.y ?? 0,
          behavior: "instant",
        });
      });
    } else {
      // PUSH or REPLACE — always start at the top
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    }
  }, [location.key, location.hash, navigationType]);

  return null;
}

export default ScrollRestoration;
