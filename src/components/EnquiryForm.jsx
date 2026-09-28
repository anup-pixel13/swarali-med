import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "918779508016";

function buildWhatsAppMessage(formData) {
  const lines = [
    "Hello, I want enquiry regarding Swarali Nursing Services.",
  ];

  const details = [
    ["Full Name", formData.name],
    ["Mobile Number", formData.mobile],
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

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const openWhatsApp = () => {
    const text = buildWhatsAppMessage(formData);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    openWhatsApp();
  };

  return (
    <form className="card enquiry-form liquid-glass" onSubmit={handleSubmit} data-aos="fade-up">
      <h3>Book Service / Send Enquiry</h3>
      <p>Fill in your details and our team will reach out shortly.</p>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="service"
        placeholder="Service Required"
        value={formData.service}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Write your requirement"
        rows="5"
        value={formData.message}
        onChange={handleChange}
      />

      <div className="card-actions">
        <button className="btn" type="submit">
          Submit Enquiry
        </button>

        <button type="button" className="btn btn-outline" onClick={openWhatsApp}>
          <FaWhatsapp />
          WhatsApp Instead
        </button>
      </div>
    </form>
  );
}

export default EnquiryForm;
