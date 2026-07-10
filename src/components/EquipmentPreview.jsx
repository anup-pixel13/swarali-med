import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import items from "../data/equipment.json";

function EquipmentPreview() {
  const prefersReducedMotion = useReducedMotion();
  const featuredItems = items.slice(0, 4);

  return (
    <section className="section section-surface section-surface-light">
      <div className="container">
        <motion.div
          className="section-title"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
        >
          <span className="tag premium-tag">Equipment Preview</span>
          <h2>Popular Equipment For Home Patient Care</h2>
          <p>Browse a quick preview of commonly requested equipment before exploring the full catalog.</p>
        </motion.div>

        <div className="equipment-preview-grid">
          {featuredItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="equipment-preview-card liquid-glass"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="equipment-preview-image">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className="equipment-preview-meta">
                <span className="equipment-category-chip">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.rentPrice} · {item.salePrice}</p>
                <Link to="/equipment" className="text-link">Explore in catalog</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipmentPreview;
