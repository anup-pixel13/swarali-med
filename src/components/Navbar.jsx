import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaClinicMedical,
  FaEnvelope,
  FaFileContract,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaProcedures,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/", label: "Home", icon: <FaHome />, end: true },
  { to: "/about", label: "About", icon: <FaInfoCircle /> },
  { to: "/services", label: "Services", icon: <FaClinicMedical /> },
  { to: "/equipment", label: "Medical Equipment", icon: <FaProcedures /> },
  { to: "/rental-policy", label: "Rental Policy", icon: <FaFileContract /> },
  { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="Swarali Nursing Services home" onClick={closeMenu}>
          <img src={logo} alt="Swarali Nursing Services Logo" className="brand-logo-img" />
          <div className="brand-copy">
            <h2>Swarali</h2>
            <p>Nursing Services & Surgicals</p>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          {navItems.map(({ to, label, icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={closeMenu}>
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}

          <div className="nav-cta-group">
            <a href="tel:+918779508016" className="btn btn-sm btn-outline" onClick={closeMenu}>
              <FaPhoneAlt />
              Call
            </a>
            <a
              href="https://wa.me/918779508016?text=Hello%2C%20I%20want%20enquiry%20regarding%20Swarali%20Nursing%20Services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm"
              onClick={closeMenu}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
