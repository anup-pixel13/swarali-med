import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid footer-grid-upgraded">
        <div className="footer-brand-block">
          <div className="footer-brand-row">
            <img src={logo} alt="Swarali Nursing Services Logo" className="footer-logo-img" />
            <div>
              <h3>Swarali Nursing Services & Surgicals</h3>
              <p>
                Providing Excellent Care Since 2015 with professional nursing care,
                attendants, doctor visits and medical equipment support.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/equipment">Medical Equipment</Link></li>
            <li><Link to="/rental-policy">Rental Policy</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Info</h4>
          <ul className="footer-list footer-contact-list">
            <li><FaPhoneAlt /> <span>+91 8779508016</span></li>
            <li><FaPhoneAlt /> <span>+91 7977506929</span></li>
            <li><FaWhatsapp /> <span>WhatsApp Support Available</span></li>
            <li><FaMapMarkerAlt /> <span>Navi Mumbai, Maharashtra</span></li>
          </ul>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a
              href="https://wa.me/918779508016?text=Hello%2C%20I%20want%20enquiry%20regarding%20Swarali%20Nursing%20Services."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Swarali Nursing Services & Surgicals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
