import { motion, useReducedMotion } from "framer-motion";

function PrivacyPolicy() {
  const prefersReducedMotion = useReducedMotion();
  const sections = [
    {
      title: "1. Information We Collect",
      body: "We may collect personal details such as your name, phone number, email address, service requirement and message when you submit an enquiry.",
    },
    {
      title: "2. How We Use Your Information",
      body: "Your information is used only to respond to your enquiry, provide requested healthcare or equipment support, and improve service communication.",
    },
    {
      title: "3. Form Data Handling",
      body: "Enquiry submissions may be processed through third-party form services. We recommend that users share only necessary information relevant to service requests.",
    },
    {
      title: "4. Contact Communication",
      body: "We may contact you via phone, email or WhatsApp regarding your enquiry, appointment coordination, equipment availability or follow-up support.",
    },
    {
      title: "5. Cookies & Basic Analytics",
      body: "This website may use basic browser storage, cookies or analytics tools to improve user experience and understand general usage patterns.",
    },
    {
      title: "6. Third-Party Services",
      body: "This website may use third-party tools such as FormSubmit, Google Maps, WhatsApp links or hosting providers. Their respective privacy policies may apply.",
    },
    {
      title: "7. Data Security",
      body: "We take reasonable steps to keep enquiry information secure, but no online system can guarantee absolute security in every circumstance.",
    },
    {
      title: "8. User Rights",
      body: "If you wish to update or request removal of information you submitted, you may contact us directly using the phone numbers provided on this website.",
    },
  ];

  return (
    <section className="section premium-page-bg section-surface section-surface-cream">
      <div className="container">
        <motion.div className="premium-page-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
          <span className="tag premium-tag">Privacy Policy</span>
          <h1>Your Privacy Matters</h1>
          <p>
            This Privacy Policy explains how Swarali Nursing Services & Surgicals
            collects, uses and protects information shared through this website.
          </p>
        </motion.div>

        <div className="policy-grid">
          {sections.map((item, index) => (
            <motion.div
              key={item.title}
              className="card liquid-glass"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
