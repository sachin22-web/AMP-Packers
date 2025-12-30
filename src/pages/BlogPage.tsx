import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryPopup from "@/components/EnquiryPopup";
import { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

import houseImg from "@/assets/house-shifting.jpg";
import officeImg from "@/assets/office-shifting.jpg";
import vehicleImg from "@/assets/vehicle-shifting.jpg";
import storageImg from "@/assets/storage-service.jpg";
import internationalImg from "@/assets/international-shifting.jpg";

const BlogPage = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const haryanaLocations = [
    "Rohtak", "Ambala", "Sirsa", "Hisar", "Bhiwani", "Nuh", "Karnal", 
    "Panipat", "Sonepat", "Jhajjar", "Rewari", "Mahendragarh", "Palwal",
    "Faridabad", "Gurugram", "Yamunanagar", "Kurukshetra", "Kaithal",
    "Jind", "Fatehabad", "Panchkula", "Narnaul", "Bahadurgarh"
  ];

  const getLocationImage = (index: number) => {
    const images = [houseImg, officeImg, vehicleImg, storageImg, internationalImg];
    return images[index % 5];
  };

  const blogs = haryanaLocations.map((location, index) => ({
    id: index + 1,
    title: `Packers and Movers in ${location}`,
    slug: location.toLowerCase().replace(/\s+/g, "-"),
    excerpt: `Looking for reliable packers and movers in ${location}? APMoversandpackers.in provides professional, safe, and affordable relocation services in ${location} and surrounding areas. We offer house shifting, office relocation, vehicle transport, and storage services.`,
    location: location,
    date: "December 2024",
    imageIndex: index
  }));

  return (
    <>
      <Helmet>
        <title>Blog - Packers and Movers in Haryana | APMoversandpackers.in</title>
        <meta
          name="description"
          content="Read our blog for packers and movers services in Haryana including Rohtak, Ambala, Sirsa, Hisar, Bhiwani, Nuh and more locations."
        />
        <meta name="keywords" content="packers and movers haryana, packers movers rohtak, movers ambala, hisar shifting, bhiwani relocation" />
      </Helmet>

      <TopBar />
      <Header onEnquiryClick={() => setIsEnquiryOpen(true)} />
      
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="bg-hero py-16">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-background mb-4">
                Packers and Movers in <span className="text-primary">Haryana</span>
              </h1>
              <p className="text-background/80 text-lg max-w-2xl mx-auto">
                Explore our comprehensive guides and services for all major cities in Haryana. 
                Professional relocation services you can trust.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article 
                  key={blog.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={getLocationImage(blog.imageIndex)} 
                      alt={`Packers and Movers in ${blog.location}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4" />
                      <span>{blog.location}, Haryana</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                      <Link to={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Location Tags */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Our Service Locations in Haryana
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {haryanaLocations.map((location) => (
                <Link
                  key={location}
                  to={`/blog/${location.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                >
                  Packers & Movers {location}
                </Link>
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

export default BlogPage;
