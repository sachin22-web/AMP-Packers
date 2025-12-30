import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hi, I want to enquire about your packers and movers services.");
    window.open(`https://wa.me/919050003056?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
