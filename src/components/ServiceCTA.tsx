import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  onEnquiryClick: () => void;
}

const ServiceCTA = ({ onEnquiryClick }: ServiceCTAProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I want to enquire about your packers and movers services.");
    window.open(`https://wa.me/919050003056?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Move?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Get a free quote today and experience stress-free relocation with APMoversandPackers
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={onEnquiryClick} size="xl" variant="heroOutline">
            Get Free Quote
          </Button>
          <Button onClick={handleWhatsApp} size="xl" variant="whatsapp">
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </Button>
          <a href="tel:+919050003056">
            <Button size="xl" variant="heroOutline">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
