import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const msg = encodeURIComponent(
    "Hello, I want enquiry regarding Swarali Nursing Services."
  );

  return (
    <a
      className="whatsapp-float pulse-whatsapp"
      href={`https://wa.me/918779508016?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Swarali on WhatsApp"
    >
      <FaWhatsapp />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
