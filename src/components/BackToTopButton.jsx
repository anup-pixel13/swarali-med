import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      // Throttle updates via requestAnimationFrame to avoid excessive re-renders
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > 320);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTopButton;
