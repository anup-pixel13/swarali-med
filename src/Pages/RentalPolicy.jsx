import { motion, useReducedMotion } from "framer-motion";

function RentalPolicy() {
  const prefersReducedMotion = useReducedMotion();
  const sections = [
    {
      title: "1. Booking",
      body: "Equipment booking is subject to availability. Advance confirmation is recommended for urgent or specialized medical equipment requirements.",
    },
    {
      title: "2. Security Deposit",
      body: "Certain equipment may require a refundable security deposit depending on value, condition, usage period and category of equipment.",
    },
    {
      title: "3. Delivery Charges",
      body: "Delivery charges may apply based on area, distance, urgency and equipment size. Exact charges will be communicated before confirmation.",
    },
    {
      title: "4. Installation",
      body: "Installation or setup support may be available for selected equipment. Users are advised to follow usage guidance provided at the time of delivery.",
    },
    {
      title: "5. Damage Policy",
      body: "Customers are expected to use equipment responsibly. Damage caused by misuse, negligence or unauthorized repair may result in additional charges.",
    },
    {
      title: "6. Maintenance",
      body: "Basic maintenance support may be provided during the rental period depending on the equipment and rental agreement.",
    },
    {
      title: "7. Return Procedure",
      body: "Equipment should be returned in acceptable condition. Pickup or return coordination will be arranged based on prior communication and service area.",
    },
    {
      title: "8. Cancellation Policy",
      body: "Cancellation terms may vary based on booking stage, reserved equipment and delivery status. Please contact us as early as possible for changes or cancellations.",
    },
  ];

  return (
    <section className="section premium-page-bg section-surface section-surface-light">
      <div className="container">
        <motion.div className="premium-page-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
          <span className="tag premium-tag">Rental Policy</span>
          <h1>Medical Equipment Rental Policy</h1>
          <p>
            Please review our general equipment rental terms. Final terms may vary
            depending on equipment type, duration and delivery location.
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

export default RentalPolicy;
