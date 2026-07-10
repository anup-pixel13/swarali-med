function EquipmentCard({ item, onView }) {
  const msg = encodeURIComponent(
    `Hello, I wish to know the rental / purchase details of ${item.name}.`
  );

  const badgeClass = item.availability.toLowerCase().replace(/\s/g, "-");

  return (
    <div className="card equipment-card upgraded-equipment-card premium-equipment-card">
      <div className="equipment-image real-equipment-image-wrap">
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
        <button className="btn btn-outline" onClick={() => onView(item)}>
          View Details
        </button>

        <a
          className="btn"
          href={`https://wa.me/918779508016?text=${msg}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Enquiry
        </a>
      </div>
    </div>
  );
}

export default EquipmentCard;