import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const msg = encodeURIComponent(
    "Hello, I want enquiry regarding Swarali Nursing Services."
  );

  return (
    <a
      className="whatsapp-float upgraded-whatsapp pulse-whatsapp"
      href={`https://wa.me/918779508016?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Enquiry"
    >
      <FaWhatsapp />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;