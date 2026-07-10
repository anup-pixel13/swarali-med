import { motion, useReducedMotion } from "framer-motion";
import { FaAmbulance, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import EnquiryForm from "../components/EnquiryForm";

function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section premium-page-bg section-surface section-surface-cream">
      <div className="container">
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
                <span>+91 8779508016</span>
              </div>
              <div className="contact-line">
                <FaPhoneAlt />
                <span>+91 7977506929</span>
              </div>
              <div className="contact-line">
                <FaWhatsapp />
                <span>WhatsApp Support Available</span>
              </div>
              <div className="contact-line">
                <FaMapMarkerAlt />
                <span>Navi Mumbai, Maharashtra</span>
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

            <motion.div className="card map-card liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.35, delay: 0.05 }}>
              <h3>Our Service Area</h3>
              <p>
                We provide home healthcare and equipment services in Navi Mumbai and nearby locations.
              </p>
              <div className="map-frame">
                <iframe
                  title="Swarali Nursing Services Location"
                  src="https://www.google.com/maps?q=Navi%20Mumbai%2C%20Maharashtra&z=11&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "18px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
