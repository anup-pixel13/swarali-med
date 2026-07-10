import EnquiryForm from "../components/EnquiryForm";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaAmbulance } from "react-icons/fa";

function Contact() {
  return (
    <section className="section premium-page-bg">
      <div className="container">
        <div className="premium-page-head" data-aos="fade-up">
          <span className="tag premium-tag">Contact Us</span>
          <h1>Book Healthcare Service or Equipment Enquiry</h1>
          <p>
            Reach out for nursing care, doctor visits, attendants, physiotherapy,
            blood tests and medical equipment rental or purchase.
          </p>
        </div>

        <div className="contact-grid premium-contact-grid">
          <div className="contact-info-stack">
            <div className="card contact-info-card glass-premium-card" data-aos="fade-right">
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
            </div>

            <div className="card map-card glass-premium-card" data-aos="fade-up">
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
                ></iframe>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;