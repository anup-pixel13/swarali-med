import { motion, useReducedMotion } from "framer-motion";
import {
  FaBaby,
  FaClinicMedical,
  FaFlask,
  FaHandsHelping,
  FaHeartbeat,
  FaProcedures,
  FaUserMd,
  FaWheelchair,
} from "react-icons/fa";

function Services() {
  const prefersReducedMotion = useReducedMotion();
  const items = [
    {
      icon: <FaUserMd />,
      title: "Doctor Home Visit",
      desc: "Consultation, diagnosis, treatment and follow-up care at home for patient convenience.",
    },
    {
      icon: <FaClinicMedical />,
      title: "Nursing Services",
      desc: "Professional support for injections, wound care, catheter care and day-to-day nursing needs.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Attendant / Caretaker",
      desc: "Trained attendants for hygiene support, personal care and routine home assistance.",
    },
    {
      icon: <FaProcedures />,
      title: "Medical Equipment on Rent & Sale",
      desc: "Reliable hospital-grade equipment available for home patient care on rent and sale.",
    },
    {
      icon: <FaFlask />,
      title: "Blood Test At Home",
      desc: "Convenient home collection with accurate reports and dependable service coordination.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Physiotherapy At Home",
      desc: "Recovery support, rehabilitation and mobility improvement for patients at home.",
    },
    {
      icon: <FaWheelchair />,
      title: "Elderly Care",
      desc: "Dedicated and compassionate assistance for senior citizens needing day-to-day care support.",
    },
    {
      icon: <FaBaby />,
      title: "Baby Care",
      desc: "Newborn support, feeding guidance, mother care and gentle assistance with childcare needs.",
    },
  ];

  return (
    <section className="section premium-page-bg section-surface section-surface-blue">
      <div className="container">
        <motion.div className="premium-page-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
          <span className="tag premium-tag">Our Services</span>
          <h1>Complete Home Healthcare Support</h1>
          <p>
            Trusted, timely and patient-focused healthcare services designed to
            support families with comfort, dignity and professional care at home.
          </p>
        </motion.div>

        <div className="premium-services-grid">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="card premium-service-card liquid-glass"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -10, rotate: index % 2 === 0 ? -0.45 : 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="service-icon premium-service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="services-highlight-grid premium-highlight-row">
          {[
            {
              title: "Professional & Verified Staff",
              desc: "We aim to provide dependable support through a service approach focused on professionalism, patient safety and reliable home assistance.",
            },
            {
              title: "Comfort of Home, Quality of Care",
              desc: "Patients receive care in a familiar environment while families benefit from structured support and practical service coordination.",
            },
            {
              title: "Responsive Service Support",
              desc: "From urgent patient requirements to equipment-related enquiries, we focus on timely communication and smooth support delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="card liquid-glass"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
