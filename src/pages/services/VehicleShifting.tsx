import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Shield, Car, MapPin, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import vehicleShifting from "@/assets/vehicle-shifting.jpg";

const VehicleShifting = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const features = [
    { icon: Car, title: "All Vehicles", description: "Cars, bikes, and all types of vehicles transported" },
    { icon: Shield, title: "Full Insurance", description: "Complete insurance coverage during transit" },
    { icon: MapPin, title: "Door-to-Door", description: "Pickup and delivery at your doorstep" },
    { icon: Clock, title: "Timely Delivery", description: "On-time delivery with tracking updates" },
    { icon: Users, title: "Expert Handlers", description: "Trained professionals for secure loading" },
    { icon: CheckCircle, title: "Damage-Free", description: "Advanced carriers for zero damage transport" },
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Shifting Services | APMoversandPackers - Car & Bike Transport</title>
        <meta
          name="description"
          content="APMoversandPackers offers professional vehicle shifting services across India, ensuring safe, fast, and damage-free transport of cars and bikes."
        />
        <meta name="keywords" content="vehicle shifting, car transport, bike shifting, automobile relocation, vehicle movers" />
        <link rel="canonical" href="https://ampmoverandpacker.com/services/vehicle-shifting" />
      </Helmet>

      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img src={vehicleShifting} alt="Vehicle Shifting Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-background">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Vehicle Shifting</h1>
                <p className="text-background/90 text-lg md:text-xl mb-8">
                  APMoversandPackers offers professional vehicle shifting services across India, ensuring safe, fast, and damage-free transport.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Vehicle Shifting Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                APMoversandPackers offers professional vehicle shifting services across India, ensuring safe, fast, and damage-free transport of cars and bikes. Our expert team uses advanced carriers, GPS tracking, and secure loading methods to deliver your vehicle on time. We guarantee reliable, insured, and hassle-free relocation at affordable prices.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're relocating to a new city or need to transport your vehicle for any reason, our specialized vehicle carriers ensure your prized possession reaches its destination in perfect condition. We handle everything from luxury cars to vintage bikes with equal care and professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our Vehicle Shifting?</h2>
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

export default VehicleShifting;
