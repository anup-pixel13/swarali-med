import {
  FaUserMd,
  FaClinicMedical,
  FaHandsHelping,
  FaProcedures,
  FaFlask,
  FaHeartbeat,
  FaWheelchair,
  FaBaby,
} from "react-icons/fa";

function Services() {
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
    <section className="section premium-page-bg">
      <div className="container">
        <div className="premium-page-head" data-aos="fade-up">
          <span className="tag premium-tag">Our Services</span>
          <h1>Complete Home Healthcare Support</h1>
          <p>
            Trusted, timely and patient-focused healthcare services designed to
            support families with comfort, dignity and professional care at home.
          </p>
        </div>

        <div className="premium-services-grid">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="card premium-service-card"
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <div className="service-icon premium-service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-highlight-grid premium-highlight-row">
          <div className="card glass-premium-card" data-aos="fade-up">
            <h3>Professional & Verified Staff</h3>
            <p>
              We aim to provide dependable support through a service approach focused on
              professionalism, patient safety and reliable home assistance.
            </p>
          </div>

          <div className="card glass-premium-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Comfort of Home, Quality of Care</h3>
            <p>
              Patients receive care in a familiar environment while families benefit from
              structured support and practical service coordination.
            </p>
          </div>

          <div className="card glass-premium-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Responsive Service Support</h3>
            <p>
              From urgent patient requirements to equipment-related enquiries, we focus on
              timely communication and smooth support delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;