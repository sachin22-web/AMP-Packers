import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onEnquiryClick: () => void;
}

const Hero = ({ onEnquiryClick }: HeroProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I want to enquire about your packers and movers services.");
    window.open(`https://wa.me/919050003056?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-40 md:pt-32"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay - reduced opacity to show banner image clearly */}
      <div className="absolute inset-0 bg-hero-overlay/60" />

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight animate-slide-up">
            India's Most Trusted
            <span className="block gradient-text">Packers & Movers</span>
          </h1>

          <p className="text-background/80 text-lg md:text-xl mb-3 font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Safe • Reliable • Professional • Available 24/7
          </p>

          <p className="text-background/70 text-base md:text-lg mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            APMoversandpackers.in offers safe, fast, and affordable packing, loading, 
            transportation, and shifting services for homes, offices, and vehicles with 
            professional handling across India.
          </p>

          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button onClick={onEnquiryClick} variant="hero" size="lg">
              Get Free Quote Now
            </Button>
            <Button onClick={handleWhatsApp} variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>

          {/* Call Box */}
          <div className="inline-flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-background/70 text-sm">Call Us Now For Instant Service</p>
              <a href="tel:+919050003056" className="text-background font-bold text-xl hover:text-primary transition-colors">
                +91 90500 03056
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
