import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const WHATSAPP_NUMBER = "918779508016";
const defaultFormData = {
  rentOrBuy: "",
  patientName: "",
  patientAge: "",
  patientGender: "",
  medicalCondition: "",
  doctorName: "",
  hospitalName: "",
  location: "",
  requiredFromDate: "",
  durationDays: "",
  pickupOrDelivery: "",
};

function EquipmentEnquiryModal({ item, onClose }) {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState(defaultFormData);

  const handleClose = useCallback(() => {
    setFormData(defaultFormData);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, item]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = ["Hello, I need an equipment enquiry from Swarali Nursing Services."];
    const details = [
      ["Equipment", item?.name],
      ["Rent or Buy", formData.rentOrBuy],
      ["Name of Patient", formData.patientName],
      ["Patient Age", formData.patientAge],
      ["Patient Gender", formData.patientGender],
      ["Medical Condition", formData.medicalCondition],
      ["Doctor Name", formData.doctorName],
      ["Hospital Name", formData.hospitalName],
      ["Location", formData.location],
      ...(formData.rentOrBuy === "Rent"
        ? [
            ["Required From Date", formData.requiredFromDate],
            ["Duration (days)", formData.durationDays],
          ]
        : []),
      ["Self Pickup or Home Delivery", formData.pickupOrDelivery],
    ];

    details.forEach(([label, value]) => {
      const text = String(value ?? "").trim();
      if (text) {
        lines.push(`${label}: ${text}`);
      }
    });

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
    handleClose();
  };

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="modal-backdrop"
          onClick={handleClose}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-card premium-modal-card liquid-glass equipment-enquiry-modal"
            onClick={(event) => event.stopPropagation()}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.28 }}
          >
            <button type="button" className="modal-close equipment-enquiry-close" onClick={handleClose} aria-label="Close WhatsApp enquiry form">
              <FaTimes />
            </button>

            <h3>WhatsApp Enquiry</h3>
            <p className="equipment-enquiry-subtitle">{item.name}</p>

            <form className="equipment-enquiry-form" onSubmit={handleSubmit}>
              <div className="equipment-enquiry-group">
                <label>Rent or Buy</label>
                <div className="equipment-enquiry-options">
                  <label><input type="radio" name="rentOrBuy" value="Rent" checked={formData.rentOrBuy === "Rent"} onChange={handleChange} /> Rent</label>
                  <label><input type="radio" name="rentOrBuy" value="Buy" checked={formData.rentOrBuy === "Buy"} onChange={handleChange} /> Buy</label>
                </div>
              </div>

              <input type="text" name="patientName" placeholder="Name of Patient" value={formData.patientName} onChange={handleChange} />
              <input type="number" name="patientAge" placeholder="Patient Age" value={formData.patientAge} onChange={handleChange} />

              <div className="equipment-enquiry-group">
                <label>Patient Gender</label>
                <div className="equipment-enquiry-options">
                  <label><input type="radio" name="patientGender" value="Male" checked={formData.patientGender === "Male"} onChange={handleChange} /> Male</label>
                  <label><input type="radio" name="patientGender" value="Female" checked={formData.patientGender === "Female"} onChange={handleChange} /> Female</label>
                  <label><input type="radio" name="patientGender" value="Other" checked={formData.patientGender === "Other"} onChange={handleChange} /> Other</label>
                </div>
              </div>

              <textarea name="medicalCondition" placeholder="Medical Condition" rows="2" value={formData.medicalCondition} onChange={handleChange} />
              <input type="text" name="doctorName" placeholder="Doctor Name" value={formData.doctorName} onChange={handleChange} />
              <input type="text" name="hospitalName" placeholder="Hospital Name" value={formData.hospitalName} onChange={handleChange} />
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />

              {formData.rentOrBuy === "Rent" ? (
                <>
                  <input type="date" name="requiredFromDate" value={formData.requiredFromDate} onChange={handleChange} />
                  <input type="number" name="durationDays" placeholder="Duration (days)" value={formData.durationDays} onChange={handleChange} />
                </>
              ) : null}

              <div className="equipment-enquiry-group">
                <label>Self Pickup or Home Delivery</label>
                <div className="equipment-enquiry-options">
                  <label><input type="radio" name="pickupOrDelivery" value="Self Pickup" checked={formData.pickupOrDelivery === "Self Pickup"} onChange={handleChange} /> Self Pickup</label>
                  <label><input type="radio" name="pickupOrDelivery" value="Home Delivery" checked={formData.pickupOrDelivery === "Home Delivery"} onChange={handleChange} /> Home Delivery</label>
                </div>
              </div>

              <div className="card-actions">
                <button type="submit" className="btn">Send on WhatsApp</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default EquipmentEnquiryModal;
