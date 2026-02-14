import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "61457052522"; // use country code without +
  const message = "Hi, I have a question about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 group"
    >
      <div className="p-2">
        <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <span className="whitespace-nowrap max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 group-hover:pr-6 transition-all duration-300 text-sm sm:text-base font-medium">
        WhatsApp Us
      </span>
    </a>
  );
};

export default WhatsAppFloatingButton;
