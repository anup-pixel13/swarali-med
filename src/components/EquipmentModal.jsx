import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

function EquipmentModal({ item, onClose }) {
  const prefersReducedMotion = useReducedMotion();
  const [failedImages, setFailedImages] = useState({});
  const imageError = item ? failedImages[item.image] : false;

  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-card premium-modal-card liquid-glass"
            onClick={(event) => event.stopPropagation()}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.28 }}
          >
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close equipment details">
              ×
            </button>

            <div className="modal-layout">
              <div className="equipment-image large real-equipment-image-wrap modal-equipment-image">
                {imageError ? (
                  <div className="equipment-fallback">{item.name}</div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="real-equipment-image"
                    onError={() =>
                      setFailedImages((previous) => ({
                        ...previous,
                        [item.image]: true,
                      }))
                    }
                  />
                )}
              </div>

              <div className="modal-content-info">
                <span className="equipment-category-chip">{item.category}</span>
                <h2>{item.name}</h2>
                <p className="equipment-desc">{item.description}</p>

                <motion.div
                  className="price-list premium-price-list"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.25 }}
                >
                  <p><strong>Rent/day:</strong> {item.rentPrice}</p>
                  <p><strong>Rent/month:</strong> {item.monthlyRent}</p>
                  <p><strong>Sale:</strong> {item.salePrice}</p>
                  <p><strong>Availability:</strong> {item.availability}</p>
                </motion.div>

                <a
                  className="btn"
                  href={`https://wa.me/918779508016?text=${encodeURIComponent(`Hello, I want to know the rental or purchase details for ${item.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default EquipmentModal;
