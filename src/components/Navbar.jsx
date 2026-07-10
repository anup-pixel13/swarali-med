import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand brand-large" onClick={closeMenu}>
          <img src={logo} alt="Swarali Nursing Services Logo" className="brand-logo-img large-logo" />
          <div className="brand-copy">
            <h2>Swarali</h2>
            <p>Nursing Services & Surgicals</p>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/equipment" onClick={closeMenu}>Medical Equipment</NavLink>
          <NavLink to="/rental-policy" onClick={closeMenu}>Rental Policy</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

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