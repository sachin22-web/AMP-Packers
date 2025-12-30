import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Shield, Warehouse, Lock, Thermometer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import storageService from "@/assets/storage-service.jpg";

const StorageService = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const features = [
    { icon: Warehouse, title: "Modern Warehouses", description: "State-of-the-art storage facilities" },
    { icon: Shield, title: "Fully Insured", description: "Complete insurance for stored items" },
    { icon: Lock, title: "24/7 Security", description: "Round-the-clock surveillance and security" },
    { icon: Thermometer, title: "Climate Control", description: "Temperature-controlled storage units" },
    { icon: Clock, title: "Flexible Duration", description: "Short-term and long-term options" },
    { icon: CheckCircle, title: "Easy Access", description: "Retrieve your items anytime" },
  ];

  return (
    <>
      <Helmet>
        <title>Storage Services | APMoversandPackers - Secure Warehouse Storage</title>
        <meta
          name="description"
          content="APMoversandPackers offers secure, clean, and affordable storage services for household, office, and commercial goods with 24/7 monitoring."
        />
        <meta name="keywords" content="storage services, warehouse storage, goods storage, secure storage, household storage" />
        <link rel="canonical" href="https://ampmoverandpacker.com/services/storage-service" />
      </Helmet>

      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img src={storageService} alt="Storage Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-background">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Storage Service</h1>
                <p className="text-background/90 text-lg md:text-xl mb-8">
                  APMoversandPackers offers secure, clean, and affordable storage services for household, office, and commercial goods.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Storage Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                APMoversandPackers offers secure, clean, and affordable storage services for household, office, and commercial goods. Our modern warehouses are fully insured, temperature-controlled, and monitored 24/7 for maximum safety. Whether short-term or long-term, we provide flexible storage solutions to keep your belongings safe, organized, and easily accessible anytime.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our storage facilities are designed to accommodate items of all sizes - from small personal belongings to large furniture and commercial inventory. With round-the-clock security, pest control measures, and climate-controlled environments, your possessions are in safe hands.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our Storage Services?</h2>
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

export default StorageService;
