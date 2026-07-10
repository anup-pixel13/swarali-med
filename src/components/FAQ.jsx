import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function FAQ({ items }) {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-surface section-surface-cream faq-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
        >
          <span className="tag premium-tag">FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers for common service, availability and coordination questions.</p>
        </motion.div>

        <div className="faq-list">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                className="faq-item liquid-glass"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="faq-icon">
                    <FaPlus />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      className="faq-answer"
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
