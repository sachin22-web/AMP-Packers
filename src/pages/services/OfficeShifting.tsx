import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Shield, Truck, Building, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import officeShifting from "@/assets/office-shifting.jpg";

const OfficeShifting = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const features = [
    { icon: Building, title: "Corporate Expertise", description: "Specialized in handling office equipment and furniture" },
    { icon: Clock, title: "Minimal Downtime", description: "Quick setup to resume operations faster" },
    { icon: Shield, title: "Data Security", description: "Secure handling of sensitive documents and devices" },
    { icon: Truck, title: "Heavy Equipment", description: "Expert handling of servers, printers, and machinery" },
    { icon: Users, title: "Trained Staff", description: "Professionals experienced in corporate relocations" },
    { icon: CheckCircle, title: "Complete Solutions", description: "End-to-end office relocation services" },
  ];

  return (
    <>
      <Helmet>
        <title>Office Shifting Services | APMoversandPackers - Corporate Relocation</title>
        <meta
          name="description"
          content="APMoversandPackers offers professional Office Shifting Services designed for smooth, safe, and efficient business relocations with minimal downtime."
        />
        <meta name="keywords" content="office shifting, corporate relocation, business movers, office packers, commercial shifting" />
        <link rel="canonical" href="https://ampmoverandpacker.com/services/office-shifting" />
      </Helmet>

      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img src={officeShifting} alt="Office Shifting Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-background">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Office Shifting</h1>
                <p className="text-background/90 text-lg md:text-xl mb-8">
                  APMoversandPackers offers professional Office Shifting Services designed for smooth, safe, and efficient business relocations.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Office Shifting Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                APMoversandPackers offers professional Office Shifting Services designed for smooth, safe, and efficient business relocations. Our trained team handles packing, loading, and transporting office furniture, computers, and documents with utmost care. We ensure minimal downtime, quick setup, and secure delivery, helping businesses resume operations without disruption anywhere in India.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand the importance of time in business operations. Our team works efficiently during off-hours or weekends to minimize disruption to your workflow. From small startups to large corporate offices, we have the expertise and resources to handle relocations of any scale.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our Office Shifting?</h2>
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

export default OfficeShifting;
