import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

function EquipmentCard({ item, onView, onWhatsAppEnquiry }) {
  const prefersReducedMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);
  const badgeClass = item.availability.toLowerCase().replace(/\s/g, "-");

  return (
    <motion.article
      className="card equipment-card premium-equipment-card liquid-glass"
      whileHover={prefersReducedMotion ? undefined : { y: -10, rotate: 0.35, scale: 1.01 }}
      transition={{ duration: 0.24 }}
    >
      <div className="equipment-image real-equipment-image-wrap">
        {imageError ? (
          <div className="equipment-fallback">{item.name}</div>
        ) : (
          <img
            src={item.image}
            alt={item.name}
            className="real-equipment-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="equipment-card-top">
        <span className={`badge ${badgeClass}`}>{item.availability}</span>
        <span className="equipment-category-chip">{item.category}</span>
      </div>

      <h3>{item.name}</h3>
      <p className="equipment-desc">{item.description}</p>

      <div className="price-list premium-price-list">
        <p><strong>Rent/day:</strong> {item.rentPrice}</p>
        <p><strong>Rent/month:</strong> {item.monthlyRent}</p>
        <p><strong>Sale:</strong> {item.salePrice}</p>
      </div>

      <div className="card-actions">
        <button type="button" className="btn btn-outline" onClick={() => onView(item)}>
          View Details
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => onWhatsAppEnquiry(item)}
        >
          WhatsApp Enquiry
        </button>
      </div>
    </motion.article>
  );
}

export default EquipmentCard;
