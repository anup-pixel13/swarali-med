import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials({ items }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || items.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [items.length, prefersReducedMotion]);

  const activeItem = items[activeIndex];

  return (
    <section className="section section-surface section-surface-blue">
      <div className="container">
        <motion.div
          className="section-title"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <span className="tag premium-tag">Testimonials</span>
          <h2>What Families Say</h2>
          <p>Trusted support, responsive coordination and compassionate care remain at the center of every service we provide.</p>
        </motion.div>

        <div className="testimonials-shell liquid-glass">
          <div className="testimonial-controls">
            <button type="button" className="icon-button" onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)} aria-label="Previous testimonial">
              <FaArrowLeft />
            </button>
            <button type="button" className="icon-button" onClick={() => setActiveIndex((activeIndex + 1) % items.length)} aria-label="Next testimonial">
              <FaArrowRight />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeItem.name}
              className="testimonial-card"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
              transition={{ duration: 0.35 }}
            >
              <p className="testimonial-rating">★★★★★</p>
              <p>{activeItem.text}</p>
              <footer>
                <strong>{activeItem.name}</strong>
                <span>{activeItem.detail}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="testimonial-dots" aria-label="Testimonial navigation">
            {items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`testimonial-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
