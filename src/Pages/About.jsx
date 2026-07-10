import { motion, useReducedMotion } from "framer-motion";
import { FaClock, FaHeart, FaHospitalUser, FaNotesMedical, FaShieldAlt, FaUserNurse } from "react-icons/fa";

function About() {
  const prefersReducedMotion = useReducedMotion();

  const highlights = [
    {
      icon: <FaUserNurse />,
      title: "Experienced Care Team",
      desc: "Skilled nursing and support staff focused on safe, compassionate and professional home care.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Service Approach",
      desc: "Dependable service with a patient-first approach for families needing healthcare support at home.",
    },
    {
      icon: <FaClock />,
      title: "Timely Response",
      desc: "Quick coordination and responsive assistance for patient care and equipment needs.",
    },
    {
      icon: <FaHeart />,
      title: "Compassionate Support",
      desc: "Care delivered with empathy, comfort and dignity for patients and loved ones.",
    },
    {
      icon: <FaHospitalUser />,
      title: "Doorstep Healthcare",
      desc: "Medical and care support brought directly to your home for greater comfort and ease.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Practical Patient Care",
      desc: "Support designed to meet real home-care requirements with responsibility and professionalism.",
    },
  ];

  return (
    <section className="section premium-page-bg section-surface section-surface-light">
      <div className="container">
        <motion.div className="premium-page-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
          <span className="tag premium-tag">About Swarali</span>
          <h1>Swarali Nursing Services & Surgicals</h1>
          <p>
            Providing compassionate, dependable and professional home healthcare support
            since 2015 for patients and families in Navi Mumbai and nearby areas.
          </p>
        </motion.div>

        <div className="about-layout premium-about-layout">
          <motion.div className="about-main-card card liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
            <p className="about-lead">Providing Excellent Care Since 2015</p>
            <h2>Healthcare Support That Prioritizes Comfort, Trust and Dignity</h2>
            <p>
              Swarali Nursing Services provides professional home healthcare solutions
              including nursing care, attendants, doctor visits, physiotherapy,
              blood test at home and medical equipment rental & sales.
            </p>
            <p>
              Our mission is to support patients and families with reliable, accessible
              and compassionate healthcare services delivered at home. We focus on safe
              care practices, quick support, professional coordination and practical assistance.
            </p>
            <p>
              Whether you need short-term home care, senior citizen support, medical equipment,
              or regular nursing assistance, we aim to provide trusted service with empathy and care.
            </p>
          </motion.div>

          <motion.div className="card premium-side-panel liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
            <h3>Why Families Choose Swarali</h3>
            <ul className="about-points premium-list">
              <li>Professional home healthcare support</li>
              <li>Medical equipment available on rent and sale</li>
              <li>Timely service coordination and response</li>
              <li>Compassionate care with dignity and trust</li>
              <li>Support tailored for patient comfort at home</li>
              <li>Trusted assistance in Navi Mumbai and nearby areas</li>
            </ul>
          </motion.div>
        </div>

        <div className="premium-highlight-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="card premium-info-card liquid-glass"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="service-icon premium-service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
