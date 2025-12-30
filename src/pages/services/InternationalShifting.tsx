import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Globe, Shield, FileText, Plane, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import internationalShifting from "@/assets/international-shifting.jpg";

const InternationalShifting = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const features = [
    { icon: Globe, title: "Worldwide Service", description: "Relocation to any country across the globe" },
    { icon: FileText, title: "Customs Clearance", description: "Complete documentation and customs handling" },
    { icon: Shield, title: "Fully Insured", description: "International transit insurance coverage" },
    { icon: Plane, title: "Air & Sea Freight", description: "Multiple shipping options available" },
    { icon: Users, title: "Expert Coordinators", description: "Dedicated team for international moves" },
    { icon: CheckCircle, title: "Door-to-Door", description: "Complete relocation from start to finish" },
  ];

  return (
    <>
      <Helmet>
        <title>International Shifting Services | APMoversandPackers - Global Relocation</title>
        <meta
          name="description"
          content="APMoversandPackers offers reliable International Shifting Services with complete door-to-door relocation solutions including customs clearance and documentation."
        />
        <meta name="keywords" content="international shifting, global relocation, overseas moving, international movers, customs clearance" />
        <link rel="canonical" href="https://ampmoverandpacker.com/services/international-shifting" />
      </Helmet>

      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img src={internationalShifting} alt="International Shifting Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-background">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">International Shifting</h1>
                <p className="text-background/90 text-lg md:text-xl mb-8">
                  APMoversandPackers offers reliable International Shifting Services with complete door-to-door relocation solutions.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional International Shifting Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                APMoversandPackers offers reliable International Shifting Services with complete door-to-door relocation solutions. We handle packing, customs clearance, documentation, and secure transportation to any global destination. Our expert team ensures safe handling, timely delivery, and stress-free international moves with world-class service standards and transparent pricing across countries.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Moving internationally involves complex logistics, documentation, and coordination across borders. Our experienced team handles all aspects of your international move, from obtaining necessary permits to coordinating with shipping companies and customs officials. We offer both air and sea freight options to suit your timeline and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our International Shifting?</h2>
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

export default InternationalShifting;
