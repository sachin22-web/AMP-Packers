import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, Award, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import houseShifting from "@/assets/house-shifting.jpg";
import officeShifting from "@/assets/office-shifting.jpg";
import vehicleShifting from "@/assets/vehicle-shifting.jpg";
import storageService from "@/assets/storage-service.jpg";
import internationalShifting from "@/assets/international-shifting.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const ServicesPage = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const services = [
    {
      title: "House Shifting",
      slug: "house-shifting",
      description: "APMoversandPackers offers professional house shifting services designed for safety, speed, and convenience. Our expert team carefully packs, loads, transports, and unloads your household items using high-quality materials and GPS-enabled vehicles.",
      image: houseShifting,
    },
    {
      title: "Office Shifting",
      slug: "office-shifting",
      description: "APMoversandPackers offers professional Office Shifting Services designed for smooth, safe, and efficient business relocations. Our trained team handles packing, loading, and transporting office furniture, computers, and documents with utmost care.",
      image: officeShifting,
    },
    {
      title: "Vehicle Shifting",
      slug: "vehicle-shifting",
      description: "APMoversandPackers offers professional vehicle shifting services across India, ensuring safe, fast, and damage-free transport of cars and bikes. Our expert team uses advanced carriers, GPS tracking, and secure loading methods.",
      image: vehicleShifting,
    },
    {
      title: "Storage Service",
      slug: "storage-service",
      description: "APMoversandPackers offers secure, clean, and affordable storage services for household, office, and commercial goods. Our modern warehouses are fully insured, temperature-controlled, and monitored 24/7.",
      image: storageService,
    },
    {
      title: "International Shifting",
      slug: "international-shifting",
      description: "APMoversandPackers offers reliable International Shifting Services with complete door-to-door relocation solutions. We handle packing, customs clearance, documentation, and secure transportation to any global destination.",
      image: internationalShifting,
    },
  ];

  const faqs = [
    {
      icon: HelpCircle,
      question: "What services offered?",
      answer: "We offer House Shifting, Office Shifting, Vehicle Shifting, Storage Services, and International Shifting with complete packing, loading, and transportation."
    },
    {
      icon: Award,
      question: "Are you certified?",
      answer: "Yes, we are IBA Approved, ISO 9001:2006 Certified, and hold a 5-Star Google Rating with 100% customer satisfaction guarantee."
    },
    {
      icon: MapPin,
      question: "Service available where?",
      answer: "We provide services across all major cities in India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, and international destinations worldwide."
    },
    {
      icon: Phone,
      question: "How to contact?",
      answer: "Call us at +91 90500 03056, email info@ampmoverandpacker.com, or use our WhatsApp for instant enquiry and free quotes."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | APMoversandPackers - Professional Relocation Services</title>
        <meta
          name="description"
          content="Trusted APMoversandPackers – Safe, Fast, and Reliable Relocation Services. Professional Moving and Packing Solutions for Homes, Offices, and Vehicles Across India."
        />
        <meta name="keywords" content="house shifting, office shifting, vehicle shifting, storage services, international shifting, packers and movers" />
        <link rel="canonical" href="https://ampmoverandpacker.com/services" />
      </Helmet>

      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-hero text-background py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Trusted APMoversandPackers – Safe, Fast, and Reliable Relocation Services
              </h1>
              <p className="text-background/80 text-lg md:text-xl">
                Our Professional Moving and Packing Services – Safe, Fast, Reliable, and Affordable Relocation Solutions by APMoversandPackers Across India for Homes, Offices, and Vehicles
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Quick Links */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => setIsEnquiryOpen(true)}
                >
                  <faq.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Image */}
        <section className="py-12">
          <div className="container-custom">
            <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <img 
                src={aboutTeam} 
                alt="APMoversandPackers Team" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/80 to-transparent flex items-end p-8">
                <div className="text-background">
                  <h2 className="text-2xl font-bold">Professional Team</h2>
                  <p className="text-background/80">Experienced and trained staff for safe relocation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <Link to={`/services/${service.slug}`}>
                      <div className="relative rounded-2xl overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-hero/60 to-transparent" />
                      </div>
                    </Link>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link to={`/services/${service.slug}`}>
                        <Button variant="outline" size="lg">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button onClick={() => setIsEnquiryOpen(true)} size="lg">
                        Get Free Quote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
