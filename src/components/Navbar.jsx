import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="Swarali Nursing Services home">
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/equipment">Medical Equipment</NavLink>
          <NavLink to="/rental-policy">Rental Policy</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="nav-cta-group">
            <a href="tel:+918779508016" className="btn btn-sm btn-outline">
              <FaPhoneAlt />
              Call
            </a>
            <a
              href="https://wa.me/918779508016?text=Hello%2C%20I%20want%20enquiry%20regarding%20Swarali%20Nursing%20Services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm"
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
