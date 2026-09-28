import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "918779508016";

function buildWhatsAppMessage(formData) {
  const lines = [
    "Hello, I want enquiry regarding Swarali Nursing Services.",
  ];
  const normalizedMobile = formData.mobile.replace(/\D/g, "").trim();
  const mobileForMessage = /^\d{10,13}$/.test(normalizedMobile) ? normalizedMobile : "";

  const details = [
    ["Full Name", formData.name],
    ["Mobile Number", mobileForMessage],
    ["Email Address", formData.email],
    ["Service Required", formData.service],
    ["Requirement", formData.message],
  ];

  details.forEach(([label, value]) => {
    const trimmed = value.trim();
    if (trimmed) {
      lines.push(`${label}: ${trimmed}`);
    }
  });

  return lines.join("\n");
}

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusError, setStatusError] = useState("");

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const openWhatsApp = () => {
    const text = buildWhatsAppMessage(formData);

    const popup = window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    return popup !== null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const opened = openWhatsApp();
    if (opened) {
      setStatusMessage("Opening WhatsApp with your enquiry details.");
      setStatusError("");
    } else {
      setStatusMessage("");
      setStatusError("Unable to open WhatsApp. Please allow pop-ups and try again.");
    }
  };

  return (
    <form className="card enquiry-form liquid-glass" onSubmit={handleSubmit} data-aos="fade-up">
      <h3>Book Service / Send Enquiry</h3>
      <p>Fill in your details and our team will reach out shortly.</p>

      <label className="enquiry-form-field">
        <span>Full Name</span>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label className="enquiry-form-field">
        <span>Mobile Number</span>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
      </label>

      <label className="enquiry-form-field">
        <span>Email Address</span>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className="enquiry-form-field">
        <span>Service Required</span>
        <input
          type="text"
          name="service"
          placeholder="Service Required"
          value={formData.service}
          onChange={handleChange}
        />
      </label>

      <label className="enquiry-form-field">
        <span>Write your requirement</span>
        <textarea
          name="message"
          placeholder="Write your requirement"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
      </label>

      <div className="card-actions">
        <button className="btn" type="submit">
          Submit Enquiry
        </button>

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => {
            const opened = openWhatsApp();
            if (opened) {
              setStatusMessage("Opening WhatsApp with your enquiry details.");
              setStatusError("");
            } else {
              setStatusMessage("");
              setStatusError("Unable to open WhatsApp. Please allow pop-ups and try again.");
            }
          }}
        >
          <FaWhatsapp />
          WhatsApp Instead
        </button>
      </div>

      {statusMessage ? <p className="success" role="status" aria-live="polite">{statusMessage}</p> : null}
      {statusError ? <p className="error-text" role="status" aria-live="polite">{statusError}</p> : null}
    </form>
  );
}

export default EnquiryForm;
