import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaProcedures,
  FaHandsHelping,
  FaHeartbeat,
  FaWheelchair,
  FaBaby,
  FaFlask,
  FaClinicMedical,
  FaShieldAlt,
  FaClock,
  FaRupeeSign,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";
import Counter from "../components/Counter";

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
    { icon: <FaShieldAlt />, title: "Professional & Reliable" },
    { icon: <FaClock />, title: "Timely & Punctual" },
    { icon: <FaRupeeSign />, title: "Affordable Prices" },
    { icon: <FaHeadset />, title: "24/7 Customer Support" },
  ];

  const iconStrip = [
    "Doctor Home Visit",
    "Nursing Services",
    "Attendant / Caretaker",
    "Equipment Rent & Sale",
    "Blood Test At Home",
    "Physiotherapy",
    "Elderly Care",
    "Baby Care",
  ];

  const testimonials = [
    {
      name: "Patient Family",
      text: "Excellent nursing support and very caring staff. The service was timely and professional.",
    },
    {
      name: "Home Care Client",
      text: "Very helpful coordination and reliable equipment support. Highly recommended for home patient care.",
    },
    {
      name: "Senior Care Family",
      text: "Compassionate service with good communication and dependable attendants for elderly care.",
    },
  ];

  const faqs = [
    {
      question: "Do you provide 24/7 nursing support?",
      answer: "Yes, support availability depends on requirement and scheduling. Please contact us for service coordination.",
    },
    {
      question: "Do you provide medical equipment on rent?",
      answer: "Yes, we provide various medical equipment on rent and sale depending on availability.",
    },
    {
      question: "Is home visit service available in Navi Mumbai?",
      answer: "Yes, we provide services in Navi Mumbai and nearby areas based on requirement and availability.",
    },
    {
      question: "Can I enquire on WhatsApp?",
      answer: "Yes, you can contact us directly on WhatsApp for service or equipment enquiries.",
    },
  ];

  return (
    <>
      <section className="hero premium-hero lighter-hero">
        <div className="hero-bg-shape hero-shape-1"></div>
        <div className="hero-bg-shape hero-shape-2"></div>

        <div className="container hero-grid">
          <div className="hero-content" data-aos="fade-right">
            <span className="tag premium-tag">Providing Excellent Care Since 2015</span>

            <h1>
              Compassionate Home Healthcare
              <span>& Medical Equipment Support</span>
            </h1>

            <p>
              Swarali Nursing Services delivers trusted nursing care, attendants,
              doctor visits, physiotherapy, blood tests and medical equipment rental
              & sales — right at your doorstep.
            </p>

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

          <div className="hero-visual premium-hero-visual aligned-hero-visual" data-aos="fade-left">
            <div className="hero-main-panel improved-hero-panel floating-panel">
              <div className="hero-panel-badge">Care That Heals, Service That Matters</div>
              <h3>Professional home healthcare support for your family</h3>
              <p>
                Reliable patient care, trusted attendants, nursing support and
                medical equipment availability across Navi Mumbai.
              </p>

              <ul className="hero-feature-list">
                <li><FaCheckCircle /> Trusted support</li>
                <li><FaCheckCircle /> Fast response</li>
                <li><FaCheckCircle /> Home patient care</li>
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

            <div className="hero-mini-cards-row">
              <div className="mini-stat-card better-stat-card">
                <strong><Counter end={500} suffix="+" /></strong>
                <span>Happy Patients</span>
              </div>

              <div className="mini-stat-card better-stat-card">
                <strong>24/7</strong>
                <span>Support</span>
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

      <section className="section icon-strip-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">Services Snapshot</span>
            <h2>Healthcare Services We Provide</h2>
          </div>

          <div className="icon-strip-grid">
            {iconStrip.map((item, index) => (
              <div className="icon-strip-card" key={item} data-aos="zoom-in" data-aos-delay={index * 60}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-divider parallax-one">
        <div className="parallax-overlay">
          <h2 data-aos="zoom-in">Compassionate Care At Your Doorstep</h2>
        </div>
      </section>

      <section className="section premium-page-bg">
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
              <h3><Counter end={10} suffix="+" /></h3>
              <p>Years Experience</p>
            </div>
            <div className="card premium-stat-card" data-aos="zoom-in" data-aos-delay="100">
              <h3><Counter end={500} suffix="+" /></h3>
              <p>Happy Patients</p>
            </div>
            <div className="card premium-stat-card" data-aos="zoom-in" data-aos-delay="200">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
            <div className="card premium-stat-card" data-aos="zoom-in" data-aos-delay="300">
              <h3><Counter end={100} suffix="+" /></h3>
              <p>Equipment Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-premium-section">
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

      <section className="parallax-divider parallax-two">
        <div className="parallax-overlay">
          <h2 data-aos="zoom-in">Reliable Nursing, Attendants & Equipment Support</h2>
        </div>
      </section>

      <section className="section premium-page-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">Medical Equipment Showcase</span>
            <h2>Equipment Available On Rent & Sale</h2>
            <p>
              Browse essential home healthcare equipment available for quick enquiry and support.
            </p>
          </div>

          <div className="premium-highlight-grid">
            <div className="card premium-info-card" data-aos="zoom-in">
              <h3>Hospital Bed</h3>
              <p>Adjustable bed suitable for patient care and home recovery support.</p>
            </div>

            <div className="card premium-info-card" data-aos="zoom-in" data-aos-delay="100">
              <h3>Oxygen Concentrator</h3>
              <p>Reliable respiratory support equipment available for home patient care.</p>
            </div>

            <div className="card premium-info-card" data-aos="zoom-in" data-aos-delay="200">
              <h3>Wheelchair & Walker</h3>
              <p>Mobility support equipment to assist movement and daily convenience.</p>
            </div>
          </div>

          <div className="center-action" data-aos="fade-up">
            <Link to="/equipment" className="btn">View All Equipment</Link>
          </div>
        </div>
      </section>

      <section className="section premium-page-bg">
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

      <section className="section premium-page-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">Testimonials</span>
            <h2>What Families Say</h2>
          </div>

          <div className="premium-highlight-grid">
            {testimonials.map((item, index) => (
              <div className="card premium-info-card testimonial-card" key={item.name} data-aos="fade-up" data-aos-delay={index * 80}>
                <h3>{item.name}</h3>
                <p>★★★★★</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-page-bg faq-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span className="tag premium-tag">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item card" key={faq.question} data-aos="fade-up" data-aos-delay={index * 70}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section emergency-strip premium-emergency-strip">
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
            <Link to="/contact" className="btn btn-outline btn-light-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;