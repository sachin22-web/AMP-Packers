import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import ServiceLocations from "@/components/ServiceLocations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import PricingTable from "@/components/PricingTable";

const Index = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // Show popup on page load after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>APMoversandpackers.in | Best Packers and Movers in Rohtak, India</title>
        <meta
          name="description"
          content="APMoversandpackers.in offers safe, fast, and affordable packing, loading, transportation, and shifting services for homes, offices, and vehicles across India."
        />
        <meta name="keywords" content="packers and movers, Rohtak movers, house shifting, office relocation, vehicle transport, storage services, India, Haryana" />
        <link rel="canonical" href="https://apmoversandpackers.in" />
      </Helmet>

      <TopBar />
      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <main>
        <Hero onEnquiryClick={() => setIsEnquiryOpen(true)} />
        <About />
        <Services onEnquiryClick={() => setIsEnquiryOpen(true)} />
        <PricingTable />
        <WhyChoose />
        <Testimonials />
        <Certifications />
        <ServiceLocations />
        <Contact />
      </main>
      <Footer />
      
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      <WhatsAppButton />
    </>
  );
};

export default Index;
