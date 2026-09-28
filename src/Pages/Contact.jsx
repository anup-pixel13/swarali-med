import { motion, useReducedMotion } from "framer-motion";
import { FaAmbulance, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import EnquiryForm from "../components/EnquiryForm";
import BackButton from "../components/BackButton";
import "./Contact.css";

function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const mapQuery = encodeURIComponent("Mumbai, Maharashtra");

  return (
    <section className="section premium-page-bg section-surface contact-page-section">
      <div className="container">
        <BackButton />
        <motion.div className="premium-page-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
          <span className="tag premium-tag">Contact Us</span>
          <h1>Book Healthcare Service or Equipment Enquiry</h1>
          <p>
            Reach out for nursing care, doctor visits, attendants, physiotherapy,
            blood tests and medical equipment rental or purchase.
          </p>
        </motion.div>

        <div className="contact-grid premium-contact-grid">
          <div className="contact-info-stack">
            <motion.div className="card contact-info-card liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.35 }}>
              <h3>Swarali Nursing Services & Surgicals</h3>

              <div className="contact-line">
                <FaPhoneAlt />
                <a href="tel:+918779508016">+91 8779508016</a>
              </div>
              <div className="contact-line">
                <FaPhoneAlt />
                <a href="tel:+917977506929">+91 7977506929</a>
              </div>
              <div className="contact-line">
                <FaWhatsapp />
                <a
                  href="https://wa.me/918779508016?text=Hello%2C%20I%20want%20enquiry%20regarding%20Swarali%20Nursing%20Services."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Support Available
                </a>
              </div>
              <div className="contact-line">
                <FaMapMarkerAlt />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mumbai, Maharashtra
                </a>
              </div>
              <div className="contact-line">
                <FaClock />
                <span>24/7 Customer Support</span>
              </div>
              <div className="contact-line">
                <FaAmbulance />
                <span>Quick assistance for patient care and medical equipment enquiry</span>
              </div>

              <div className="contact-action-row">
                <a href="tel:+918779508016" className="btn btn-sm">Call Now</a>
                <a
                  href="https://wa.me/918779508016?text=Hello%2C%20I%20want%20enquiry%20regarding%20Swarali%20Nursing%20Services."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

			<motion.div className="card map-card liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.35 }}>
			  <h2>Our Location & Service Area</h2>
			  <p>
			    We provide home healthcare and equipment services in Mumbai and nearby locations.
			  </p>
			  <div className="map-frame">
			    <iframe
			      title="Swarali Nursing Services Location"
			      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.116174326577!2d73.09365457593466!3d19.01460178217744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9f82a417791%3A0xd17a82dc631e8f24!2sSwarali%20Nursing%20Services!5e0!3m2!1sen!2sin!4v1790600603898!5m2!1sen!2sin"
			      width="100%"
			      height="380"
			      style={{ border: 0, borderRadius: "18px" }}
			      allowFullScreen=""
			      loading="lazy"
			      referrerPolicy="strict-origin-when-cross-origin"
			    />
			  </div>
			</motion.div>
          </div>

          <motion.div initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.35 }}>
            <EnquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
