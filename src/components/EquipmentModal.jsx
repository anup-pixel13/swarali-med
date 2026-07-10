function EquipmentModal({ item, onClose }) {
  if (!item) return null;

  const msg = encodeURIComponent(
    `Hello, I want to know the rental or purchase details for ${item.name}.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card upgraded-modal-card premium-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="equipment-image large real-equipment-image-wrap modal-equipment-image">
          <img
            src={item.image}
            alt={item.name}
            className="real-equipment-image"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `<div class="equipment-fallback">${item.name}</div>`;
            }}
          />
        </div>

        <div className="modal-content-info">
          <span className="equipment-category-chip">{item.category}</span>
          <h2>{item.name}</h2>
          <p className="equipment-desc">{item.description}</p>

          <div className="price-list premium-price-list">
            <p><strong>Rent/day:</strong> {item.rentPrice}</p>
            <p><strong>Rent/month:</strong> {item.monthlyRent}</p>
            <p><strong>Sale:</strong> {item.salePrice}</p>
            <p><strong>Availability:</strong> {item.availability}</p>
          </div>

          <a
            className="btn"
            href={`https://wa.me/918779508016?text=${msg}`}
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default EquipmentModal;