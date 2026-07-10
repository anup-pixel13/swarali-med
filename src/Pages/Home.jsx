import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUserMd,
  FaClinicMedical,
  FaHandsHelping,
  FaProcedures,
  FaFlask,
  FaHeartbeat,
  FaWheelchair,
  FaBaby,
  FaShieldAlt,
  FaClock,
  FaRupeeSign,
  FaHeadset,
} from "react-icons/fa";

function Home() {
  const services = [
    {
      icon: <FaUserMd />,
      title: "Doctor Home Visit",
      desc: "Consultation, diagnosis, treatment and follow-up care at home.",
    },
    {
      icon: <FaClinicMedical />,
      title: "Nursing Services",
      desc: "Professional nursing care for injections, wounds, catheter care and more.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Attendant / Caretaker",
      desc: "Trained attendants for personal care and daily living support.",
    },
    {
      icon: <FaProcedures />,
      title: "Medical Equipment on Rent & Sale",
      desc: "Hospital-grade equipment available on rent and sale at affordable prices.",
    },
    {
      icon: <FaFlask />,
      title: "Blood Test At Home",
      desc: "All types of blood tests with accurate reports at your doorstep.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Physiotherapy At Home",
      desc: "Pain management, rehabilitation and mobility improvement at home.",
    },
    {
      icon: <FaWheelchair />,
      title: "Elderly Care",
      desc: "Compassionate care and assistance for senior citizens at home.",
    },
    {
      icon: <FaBaby />,
      title: "Baby Care",
      desc: "Newborn care, feeding support, massage and mother care assistance.",
    },
  ];

  const whyChoose = [
    {
      icon: <FaShieldAlt />,
      title: "Professional & Reliable",
    },
    {
      icon: <FaClock />,
      title: "Timely & Punctual",
    },
    {
      icon: <FaRupeeSign />,
      title: "Affordable Prices",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
    },
  ];

  return (
    <>
      <section className="hero premium-hero">
        <div className="hero-bg-shape hero-shape-1"></div>
        <div className="hero-bg-shape hero-shape-2"></div>

        <div className="container">
          <div className="hero-brand-center" data-aos="fade-down">
            <img
              src="/logo.png"
              alt="Swarali Nursing Services Logo"
              className="hero-logo-large"
            />
            <div className="hero-tagline-pill">
              Providing Excellent Care Since 2015
            </div>
          </div>

          <div className="hero-grid">
          <div className="hero-content" data-aos="fade-right">
            <h1>
              Compassionate Home Healthcare
              <span> & Medical Equipment Support</span>
            </h1>

            <p>
              Swarali Nursing Services delivers trusted nursing care, attendants,
              doctor visits, physiotherapy, blood tests and medical equipment rental
              & sales — right at your doorstep.
            </p>

            <div className="hero-meta-stats" role="group" aria-label="Swarali care statistics">
              <div className="hero-meta-stat">
                <strong>500+</strong>
                <span>Happy Patients</span>
              </div>

              <div className="hero-meta-stat">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/contact" className="btn">Book Service</Link>
              <Link to="/equipment" className="btn btn-outline">Explore Equipment</Link>
            </div>

            <div className="hero-quick-points">
              <span>Home Nursing</span>
              <span>Doctor Visit</span>
              <span>Equipment Rental</span>
              <span>24/7 Support</span>
            </div>
          </div>

          <div className="hero-visual premium-hero-visual" data-aos="fade-left">
            <div className="hero-orb hero-orb-blue"></div>
            <div className="hero-orb hero-orb-gold"></div>

            <div className="hero-main-panel liquid-glass">
              <div className="hero-panel-badge">Care That Heals, Service That Matters</div>

              <h3>Professional home healthcare support for your family</h3>

              <p>
                Reliable patient care, trusted attendants, nursing support and
                medical equipment availability across Navi Mumbai.
              </p>

              <ul className="hero-feature-list">
                <li>
                  <FaCheckCircle />
                  Trusted support
                </li>
                <li>
                  <FaCheckCircle />
                  Fast response
                </li>
                <li>
                  <FaCheckCircle />
                  Home patient care
                </li>
              </ul>

              <div className="hero-panel-actions">
                <a href="tel:+918779508016" className="btn btn-sm">Call Now</a>
                <a
                  href="https://wa.me/918779508016?text=Hello%2C%20I%20want%20enquiry%20regarding%20Swarali%20Nursing%20Services."
                  className="btn btn-sm btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <div data-aos="fade-up">Trained & Verified Staff</div>
          <div data-aos="fade-up" data-aos-delay="80">Professional & Reliable</div>
          <div data-aos="fade-up" data-aos-delay="160">Hygienic & Safe Care</div>
          <div data-aos="fade-up" data-aos-delay="240">Affordable Prices</div>
          <div data-aos="fade-up" data-aos-delay="320">24/7 Support</div>
        </div>
      </section>

      <section className="section premium-section section-surface-light">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">Who We Are</span>
            <h2>Trusted Home Healthcare Solutions</h2>
            <p>
              We provide professional home healthcare solutions including nursing care,
              doctor home visits, attendants, physiotherapy and medical equipment support.
            </p>
          </div>

          <div className="stats-grid premium-stats-grid">
            <div className="card premium-stat-card" data-aos="zoom-in">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="card premium-stat-card" data-aos="zoom-in" data-aos-delay="100">
              <h3>500+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="card premium-stat-card" data-aos="zoom-in" data-aos-delay="200">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
            <div className="card premium-stat-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>100+</h3>
              <p>Equipment Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-premium-section section-surface-blue">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">Services We Provide</span>
            <h2>Professional Healthcare Services At Home</h2>
          </div>

          <div className="services-grid premium-services-grid">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card premium-service-card"
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="service-icon premium-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-premium-section section-surface-yellow">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">Why Choose Swarali?</span>
            <h2>Care With Trust, Comfort & Timely Support</h2>
          </div>

          <div className="why-grid premium-why-grid">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="card premium-why-card"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="service-icon premium-service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-emergency-strip">
        <div className="container cta-row">
          <div data-aos="fade-right">
            <span className="tag tag-light">Emergency Support</span>
            <h2>Need Immediate Medical Assistance?</h2>
            <p>
              Call now for nursing service, patient care support or medical equipment enquiry.
            </p>
          </div>

          <div className="cta-actions" data-aos="fade-left">
            <a href="tel:+918779508016" className="btn">Call Now</a>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;