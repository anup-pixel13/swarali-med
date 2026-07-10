import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBaby,
  FaCheckCircle,
  FaClinicMedical,
  FaClock,
  FaFlask,
  FaHandsHelping,
  FaHeadset,
  FaHeartbeat,
  FaProcedures,
  FaRupeeSign,
  FaShieldAlt,
  FaUserMd,
  FaWheelchair,
} from "react-icons/fa";
import Counter from "../components/Counter";
import EquipmentPreview from "../components/EquipmentPreview";
import FAQ from "../components/FAQ";
import Parallax from "../components/Parallax";
import Testimonials from "../components/Testimonials";
import logo from "../assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Replace these placeholder Unsplash URLs with licensed or local healthcare imagery if needed.
const PARALLAX_IMAGES = {
  primary: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
  secondary: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80",
};

function Home() {
  const prefersReducedMotion = useReducedMotion();

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
      desc: "Trusted support tailored for patient comfort, dignity and peace of mind.",
    },
    {
      icon: <FaClock />,
      title: "Timely & Punctual",
      desc: "Responsive service coordination for home visits, care schedules and equipment enquiries.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Affordable Prices",
      desc: "Practical healthcare support and equipment access with transparent communication.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      desc: "Always available for emergency assistance, coordination and family guidance.",
    },
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
      detail: "Home Nursing Support",
      text: "Excellent nursing support and very caring staff. The service was timely and professional.",
    },
    {
      name: "Home Care Client",
      detail: "Equipment Coordination",
      text: "Very helpful coordination and reliable equipment support. Highly recommended for home patient care.",
    },
    {
      name: "Senior Care Family",
      detail: "Attendant Services",
      text: "Compassionate service with good communication and dependable attendants for elderly care.",
    },
    {
      name: "Recovery Care Family",
      detail: "Doctor Visit & Follow-up",
      text: "Quick response, smooth communication and care that made home recovery much more manageable.",
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
    {
      question: "Is installation support available for equipment?",
      answer: "Setup support may be available for selected equipment depending on the product and delivery arrangement.",
    },
  ];

  return (
    <>
      <section className="hero lighter-hero">
        <div className="hero-bg-shape hero-shape-1" />
        <div className="hero-bg-shape hero-shape-2" />
        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            variants={prefersReducedMotion ? undefined : stagger}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="show"
          >
            <motion.div
              variants={fadeUp}
              className="hero-brand-strip"
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="hero-brand-logo-wrap">
                <img src={logo} alt="Swarali Nursing Services" className="hero-brand-logo" />
              </div>
              <div className="hero-brand-stats">
                <span className="counter-inline"><Counter end={500} suffix="+" /> Happy Patients</span>
                <span>24/7 Support</span>
              </div>
            </motion.div>

            <div className="hero-tagline-row">
              <motion.span variants={fadeUp} className="tag premium-tag hero-top-tagline">
                Providing Excellent Care Since 2015
              </motion.span>
            </div>
            <motion.h1 variants={fadeUp}>
              Compassionate Home Healthcare
              <span> & Medical Equipment Support</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              Swarali Nursing Services delivers trusted nursing care, attendants,
              doctor visits, physiotherapy, blood tests and medical equipment rental
              & sales — right at your doorstep.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <Link to="/contact" className="btn">Book Service</Link>
              <Link to="/equipment" className="btn btn-outline">Explore Equipment</Link>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-quick-points">
              <span>Home Nursing</span>
              <span>Doctor Visit</span>
              <span>Equipment Rental</span>
              <span>24/7 Support</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="hero-orb hero-orb-blue" />
            <div className="hero-orb hero-orb-gold" />
            <motion.div
              className="hero-main-panel liquid-glass"
              animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            >
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
            </motion.div>

          </motion.div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          {[
            "Trained & Verified Staff",
            "Professional & Reliable",
            "Hygienic & Safe Care",
            "Affordable Prices",
            "24/7 Support",
          ].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section section-surface section-surface-cream icon-strip-section">
        <div className="container">
          <motion.div className="section-title" initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
            <span className="tag premium-tag">Services Snapshot</span>
            <h2>Healthcare Services We Provide</h2>
          </motion.div>

          <div className="icon-strip-grid">
            {iconStrip.map((item, index) => (
              <motion.div
                className="icon-strip-card liquid-glass"
                key={item}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={prefersReducedMotion ? undefined : { y: -5 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Parallax
        badge="Compassionate Care"
        title="Professional support that reaches your family with comfort and confidence"
        text="From home nursing and bedside support to responsive coordination, we help families arrange trusted care at the right time."
        ctaText="Book Service"
        ctaLink="/contact"
        image={PARALLAX_IMAGES.primary}
      />

      <section className="section section-surface section-surface-light premium-page-bg">
        <div className="container">
          <motion.div className="section-title" initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
            <span className="tag premium-tag">Who We Are</span>
            <h2>Trusted Home Healthcare Solutions</h2>
            <p>
              We provide professional home healthcare solutions including nursing care,
              doctor home visits, attendants, physiotherapy and medical equipment support.
            </p>
          </motion.div>

          <motion.div className="stats-grid premium-stats-grid" variants={prefersReducedMotion ? undefined : stagger} initial={prefersReducedMotion ? false : "hidden"} whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            {[
              { value: <Counter end={10} suffix="+" />, label: "Years Experience" },
              { value: <Counter end={500} suffix="+" />, label: "Happy Patients" },
              { value: "24/7", label: "Support" },
              { value: <Counter end={100} suffix="+" />, label: "Equipment Available" },
            ].map((item) => (
              <motion.div key={item.label} className="card premium-stat-card liquid-glass" variants={fadeUp} whileHover={prefersReducedMotion ? undefined : { y: -8 }}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section-surface section-surface-blue services-premium-section">
        <div className="container">
          <motion.div className="section-title" initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
            <span className="tag premium-tag">Services We Provide</span>
            <h2>Professional Healthcare Services At Home</h2>
          </motion.div>

          <motion.div className="services-grid premium-services-grid" variants={prefersReducedMotion ? undefined : stagger} initial={prefersReducedMotion ? false : "hidden"} whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {services.map((service) => (
              <motion.div key={service.title} className="card premium-service-card liquid-glass" variants={fadeUp} whileHover={prefersReducedMotion ? undefined : { y: -10, rotate: 0.4, scale: 1.01 }}>
                <div className="service-icon premium-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Parallax
        badge="Reliable Equipment & Care"
        title="Responsive equipment access and patient support for home recovery"
        text="Get dependable help with nursing, attendants and medical equipment enquiries designed around your family’s home care needs."
        ctaText="Explore Equipment"
        ctaLink="/equipment"
        image={PARALLAX_IMAGES.secondary}
        align="right"
      />

      <section className="section section-surface section-surface-yellow">
        <div className="container">
          <motion.div className="section-title" initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
            <span className="tag premium-tag">Why Choose Swarali?</span>
            <h2>Care With Trust, Comfort & Timely Support</h2>
          </motion.div>

          <div className="why-grid premium-why-grid">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                className="card premium-why-card liquid-glass"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={prefersReducedMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
              >
                <div className="service-icon premium-service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EquipmentPreview />
      <Testimonials items={testimonials} />
      <FAQ items={faqs} />

      <section className="section emergency-strip premium-emergency-strip">
        <div className="container cta-row">
          <motion.div initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }}>
            <span className="tag tag-light">Emergency Support</span>
            <h2>Need Immediate Medical Assistance?</h2>
            <p>
              Call now for nursing service, patient care support or medical equipment enquiry.
            </p>
          </motion.div>

          <motion.div className="cta-actions" initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }}>
            <a href="tel:+918779508016" className="btn">Call Now</a>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
