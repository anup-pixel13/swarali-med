import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Parallax({ badge, title, text, ctaText, ctaLink, image, align = "left", sectionClassName = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const [fixedBackground, setFixedBackground] = useState(false);
  const [isMobileBackground, setIsMobileBackground] = useState(false);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 900px)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const syncBackgroundMode = () => {
      setFixedBackground(!tabletQuery.matches && !prefersReducedMotion);
      setIsMobileBackground(mobileQuery.matches);
    };

    syncBackgroundMode();
    tabletQuery.addEventListener("change", syncBackgroundMode);
    mobileQuery.addEventListener("change", syncBackgroundMode);

    return () => {
      tabletQuery.removeEventListener("change", syncBackgroundMode);
      mobileQuery.removeEventListener("change", syncBackgroundMode);
    };
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
      className={`parallax-section ${align === "right" ? "parallax-right" : ""} ${sectionClassName}`.trim()}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 45, 114, 0.74), rgba(0, 59, 149, 0.58)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: isMobileBackground ? (align === "right" ? "center 26%" : "center 20%") : "center",
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
