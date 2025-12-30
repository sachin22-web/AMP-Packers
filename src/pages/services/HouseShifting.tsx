import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Shield, Truck, Package, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import houseShifting from "@/assets/house-shifting.jpg";

const HouseShifting = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const features = [
    { icon: Package, title: "Quality Packing", description: "High-quality packing materials for complete safety" },
    { icon: Truck, title: "GPS Tracking", description: "Real-time tracking of your belongings" },
    { icon: Shield, title: "Fully Insured", description: "Complete insurance coverage for peace of mind" },
    { icon: Clock, title: "On-Time Delivery", description: "Guaranteed timely delivery across India" },
    { icon: Users, title: "Expert Team", description: "Trained professionals for careful handling" },
    { icon: CheckCircle, title: "Damage-Free", description: "Zero damage guarantee on all items" },
  ];

  return (
    <>
      <Helmet>
        <title>House Shifting Services | APMoversandPackers - Safe Home Relocation</title>
        <meta
          name="description"
          content="APMoversandPackers offers professional house shifting services designed for safety, speed, and convenience. Expert packing, loading, and transportation across India."
        />
        <meta name="keywords" content="house shifting, home relocation, household movers, residential shifting, packers movers" />
        <link rel="canonical" href="https://ampmoverandpacker.com/services/house-shifting" />
      </Helmet>

      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img src={houseShifting} alt="House Shifting Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-background">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">House Shifting</h1>
                <p className="text-background/90 text-lg md:text-xl mb-8">
                  APMoversandPackers offers professional house shifting services designed for safety, speed, and convenience.
                </p>
                <Button onClick={() => setIsEnquiryOpen(true)} size="xl">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional House Shifting Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                APMoversandPackers offers professional house shifting services designed for safety, speed, and convenience. Our expert team carefully packs, loads, transports, and unloads your household items using high-quality materials and GPS-enabled vehicles. We ensure damage-free delivery, affordable pricing, and a stress-free moving experience across all major cities in India.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're moving within the city or relocating to a different state, our trained professionals handle everything from delicate glassware to heavy furniture with utmost care. We provide end-to-end solutions including packing materials, loading, transportation, unloading, and unpacking services.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our House Shifting?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA onEnquiryClick={() => setIsEnquiryOpen(true)} />
      </main>

      <Footer />
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      <WhatsAppButton />
    </>
  );
};

export default HouseShifting;
