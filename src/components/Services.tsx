import { Link } from "react-router-dom";
import houseShifting from "@/assets/house-shifting.jpg";
import officeShifting from "@/assets/office-shifting.jpg";
import vehicleShifting from "@/assets/vehicle-shifting.jpg";
import storageService from "@/assets/storage-service.jpg";
import internationalShifting from "@/assets/international-shifting.jpg";

interface ServicesProps {
  onEnquiryClick: () => void;
}

const Services = ({ onEnquiryClick }: ServicesProps) => {
  const services = [
    {
      title: "International Shifting",
      slug: "international-shifting",
      image: internationalShifting,
    },
    {
      title: "Office Relocation",
      slug: "office-shifting",
      image: officeShifting,
    },
    {
      title: "Industrial Moving",
      slug: "storage-service",
      image: storageService,
    },
    {
      title: "Residential Moving",
      slug: "house-shifting",
      image: houseShifting,
    },
    {
      title: "Commercial Moving",
      slug: "vehicle-shifting",
      image: vehicleShifting,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            APM Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive relocation services tailored to meet your specific needs
          </p>
        </div>

        {/* Mobile-friendly card layout like the reference image */}
        <div className="flex flex-col items-center gap-6 max-w-md mx-auto md:max-w-none md:grid md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/services/${service.slug}`}
              className="w-full group"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-primary font-semibold text-lg">{service.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
