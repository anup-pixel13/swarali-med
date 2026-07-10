import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function EnquiryForm() {
  const formStartTime = useRef(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleWhatsApp = () => {
    const text = `Hello, I want enquiry regarding Swarali Nursing Services.\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;

    window.open(
      `https://wa.me/918779508016?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const isSpamLike = () => {
    const timeTaken = (Date.now() - formStartTime.current) / 1000;
    return formData.website.trim() !== "" || timeTaken < 4;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    if (isSpamLike()) {
      setStatus({
        loading: false,
        success: "",
        error: "Submission blocked. Please try again or use WhatsApp.",
      });
      return;
    }

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("mobile", formData.mobile);
      payload.append("email", formData.email);
      payload.append("service", formData.service);
      payload.append("message", formData.message);
      payload.append("_subject", "New Enquiry - Swarali Nursing Services");
      payload.append("_captcha", "true");
      payload.append("_template", "table");
      payload.append(
        "_autoresponse",
        "Thank you for contacting Swarali Nursing Services. We have received your enquiry and will contact you shortly."
      );
      payload.append("_next", `${window.location.origin}/contact`);

      const response = await fetch("https://formsubmit.co/your-email@example.com", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus({
        loading: false,
        success: "Thank you, we will contact you shortly.",
        error: "",
      });
      setFormData({
        name: "",
        mobile: "",
        email: "",
        service: "",
        message: "",
        website: "",
      });
      formStartTime.current = Date.now();
    } catch {
      setStatus({
        loading: false,
        success: "",
        error: "Unable to submit form. Please use WhatsApp instead.",
      });
    }
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
        required
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        pattern="[6-9][0-9]{9}"
        value={formData.mobile}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="service"
        placeholder="Service Required"
        value={formData.service}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="website"
        className="hidden-honeypot"
        tabIndex="-1"
        autoComplete="off"
        placeholder="Leave this field empty"
        value={formData.website}
        onChange={handleChange}
        aria-hidden="true"
      />

      <textarea
        name="message"
        placeholder="Write your requirement"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <div className="card-actions">
        <button className="btn" type="submit" disabled={status.loading}>
          {status.loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        <button type="button" className="btn btn-outline" onClick={handleWhatsApp}>
          <FaWhatsapp />
          WhatsApp Instead
        </button>
      </div>

      {status.success ? <p className="success">{status.success}</p> : null}
      {status.error ? <p className="error-text">{status.error}</p> : null}
    </form>
  );
}

export default EnquiryForm;
