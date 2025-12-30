import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryPopup from "@/components/EnquiryPopup";
import ServiceCTA from "@/components/ServiceCTA";
import { useState } from "react";
import { MapPin, Phone, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  const locationName = slug ? slug.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ") : "Haryana";

  const services = [
    "House Shifting",
    "Office Relocation", 
    "Vehicle Transport",
    "Storage Services",
    "Industrial Moving",
    "International Shifting"
  ];

  const benefits = [
    "Professional & trained team",
    "Safe & secure packing materials",
    "GPS-enabled tracking",
    "Affordable pricing",
    "On-time delivery guarantee",
    "24/7 customer support",
    "Insurance coverage",
    "Door-to-door service"
  ];

  return (
    <>
      <Helmet>
        <title>Packers and Movers in {locationName} | APMoversandpackers.in</title>
        <meta
          name="description"
          content={`Best packers and movers in ${locationName}, Haryana. APMoversandpackers.in offers safe, reliable, and affordable relocation services for homes, offices, and vehicles.`}
        />
        <meta name="keywords" content={`packers movers ${locationName}, ${locationName} shifting, relocation ${locationName}, movers packers haryana`} />
      </Helmet>

      <TopBar />
      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="bg-hero py-16">
          <div className="container-custom">
            <Link to="/blog" className="inline-flex items-center gap-2 text-background/70 hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-background/70">{locationName}, Haryana</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-background mb-4">
              Packers and Movers in <span className="text-primary">{locationName}</span>
            </h1>
            <p className="text-background/80 text-lg max-w-2xl">
              Professional, reliable, and affordable relocation services in {locationName}. 
              Trust APMoversandpackers.in for all your shifting needs.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Best Packers and Movers Services in {locationName}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Are you planning to relocate in {locationName}? APMoversandpackers.in is your trusted partner for all 
                    types of shifting services. With years of experience in the relocation industry, we have established 
                    ourselves as one of the leading packers and movers in {locationName} and across Haryana.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Our team of professionals understands the challenges involved in relocation. That's why we provide 
                    comprehensive moving solutions that ensure your belongings are packed, transported, and delivered 
                    safely to your new destination. Whether you're moving within {locationName} or to another city, 
                    we've got you covered.
                  </p>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Our Services in {locationName}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {services.map((service) => (
                      <div key={service} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                        <span className="text-foreground font-medium">{service}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Why Choose APMoversandpackers.in in {locationName}?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6">
                    We use high-quality packing materials to ensure maximum protection for your goods. Our GPS-enabled 
                    vehicles allow you to track your shipment in real-time, giving you peace of mind throughout the 
                    moving process.
                  </p>

                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Get Free Quote for {locationName} Shifting
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Contact us today for a free, no-obligation quote. Our team will assess your requirements 
                      and provide you with the best pricing.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button onClick={() => setIsEnquiryOpen(true)} variant="default">
                        Get Free Quote
                      </Button>
                      <a href="tel:+919050003056">
                        <Button variant="outline" className="gap-2">
                          <Phone className="w-4 h-4" />
                          +91 90500 03056
                        </Button>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Contact Card */}
                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                    <h3 className="font-bold text-lg text-foreground mb-4">Quick Contact</h3>
                    <div className="space-y-4">
                      <a 
                        href="tel:+919050003056" 
                        className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">+91 90500 03056</span>
                      </a>
                      <Button onClick={() => setIsEnquiryOpen(true)} className="w-full">
                        Book Now
                      </Button>
                    </div>
                  </div>

                  {/* Other Locations */}
                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                    <h3 className="font-bold text-lg text-foreground mb-4">Other Haryana Locations</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Rohtak", "Ambala", "Hisar", "Sirsa", "Bhiwani", "Karnal", "Panipat"].map((loc) => (
                        <Link
                          key={loc}
                          to={`/blog/${loc.toLowerCase()}`}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {loc}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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

export default BlogPost;
