import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Parallax({ badge, title, text, ctaText, ctaLink, image, align = "left" }) {
  const prefersReducedMotion = useReducedMotion();
  const [fixedBackground, setFixedBackground] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const syncBackgroundMode = () => {
      setFixedBackground(!mediaQuery.matches && !prefersReducedMotion);
    };

    syncBackgroundMode();
    mediaQuery.addEventListener("change", syncBackgroundMode);

    return () => mediaQuery.removeEventListener("change", syncBackgroundMode);
  }, [prefersReducedMotion]);

  const content = useMemo(() => {
    if (ctaLink.startsWith("/")) {
      return (
        <Link to={ctaLink} className="btn btn-outline">
          {ctaText}
        </Link>
      );
    }

    return (
      <a href={ctaLink} className="btn btn-outline">
        {ctaText}
      </a>
    );
  }, [ctaLink, ctaText]);

  return (
    <section
      className={`parallax-section ${align === "right" ? "parallax-right" : ""}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 45, 114, 0.74), rgba(0, 59, 149, 0.58)), url(${image})`,
        backgroundAttachment: fixedBackground ? "fixed" : "scroll",
      }}
    >
      <div className="container parallax-inner">
        <motion.div
          className="parallax-card liquid-glass"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="tag tag-light">{badge}</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="hero-actions">{content}</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Parallax;
