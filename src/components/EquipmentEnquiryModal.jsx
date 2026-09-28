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
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState(defaultFormData);

  const handleClose = useCallback(() => {
    setSubmitError("");
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

    const popup = window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
    if (popup) {
      handleClose();
    } else {
      setSubmitError("Unable to open WhatsApp. Please allow pop-ups and try again.");
    }
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
              <fieldset className="equipment-enquiry-group">
                <legend>Rent or Buy</legend>
                <div className="equipment-enquiry-options">
                  <label><input type="radio" name="rentOrBuy" value="Rent" checked={formData.rentOrBuy === "Rent"} onChange={handleChange} /> Rent</label>
                  <label><input type="radio" name="rentOrBuy" value="Buy" checked={formData.rentOrBuy === "Buy"} onChange={handleChange} /> Buy</label>
                </div>
              </fieldset>

              <label className="equipment-enquiry-field">
                <span>Name of Patient</span>
                <input type="text" name="patientName" placeholder="Name of Patient" value={formData.patientName} onChange={handleChange} />
              </label>
              <label className="equipment-enquiry-field">
                <span>Patient Age</span>
                <input type="number" name="patientAge" placeholder="Patient Age" value={formData.patientAge} onChange={handleChange} />
              </label>

              <fieldset className="equipment-enquiry-group">
                <legend>Patient Gender</legend>
                <div className="equipment-enquiry-options">
                  <label><input type="radio" name="patientGender" value="Male" checked={formData.patientGender === "Male"} onChange={handleChange} /> Male</label>
                  <label><input type="radio" name="patientGender" value="Female" checked={formData.patientGender === "Female"} onChange={handleChange} /> Female</label>
                  <label><input type="radio" name="patientGender" value="Other" checked={formData.patientGender === "Other"} onChange={handleChange} /> Other</label>
                </div>
              </fieldset>

              <label className="equipment-enquiry-field">
                <span>Medical Condition</span>
                <textarea name="medicalCondition" placeholder="Medical Condition" rows="2" value={formData.medicalCondition} onChange={handleChange} />
              </label>
              <label className="equipment-enquiry-field">
                <span>Doctor Name</span>
                <input type="text" name="doctorName" placeholder="Doctor Name" value={formData.doctorName} onChange={handleChange} />
              </label>
              <label className="equipment-enquiry-field">
                <span>Hospital Name</span>
                <input type="text" name="hospitalName" placeholder="Hospital Name" value={formData.hospitalName} onChange={handleChange} />
              </label>
              <label className="equipment-enquiry-field">
                <span>Location</span>
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
              </label>

              {formData.rentOrBuy === "Rent" ? (
                <>
                  <label className="equipment-enquiry-field">
                    <span>Required From Date</span>
                    <input type="date" name="requiredFromDate" value={formData.requiredFromDate} onChange={handleChange} />
                  </label>
                  <label className="equipment-enquiry-field">
                    <span>Duration (days)</span>
                    <input type="number" name="durationDays" placeholder="Duration (days)" value={formData.durationDays} onChange={handleChange} />
                  </label>
                </>
              ) : null}

              <fieldset className="equipment-enquiry-group">
                <legend>Self Pickup or Home Delivery</legend>
                <div className="equipment-enquiry-options">
                  <label><input type="radio" name="pickupOrDelivery" value="Self Pickup" checked={formData.pickupOrDelivery === "Self Pickup"} onChange={handleChange} /> Self Pickup</label>
                  <label><input type="radio" name="pickupOrDelivery" value="Home Delivery" checked={formData.pickupOrDelivery === "Home Delivery"} onChange={handleChange} /> Home Delivery</label>
                </div>
              </fieldset>

              <div className="card-actions">
                <button type="submit" className="btn">Send on WhatsApp</button>
              </div>

              {submitError ? <p className="error-text" role="status" aria-live="polite">{submitError}</p> : null}
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default EquipmentEnquiryModal;
