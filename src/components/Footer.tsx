import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const aboutLinks = [
    { name: "Profile", href: "#about" },
    { name: "Our History", href: "#about" },
    { name: "Our USP", href: "#about" },
    { name: "Achievement", href: "#about" },
    { name: "Our Advantages", href: "#about" },
    { name: "Our Team Commitment", href: "#about" },
  ];

  const helpLinks = [
    { name: "FAQ's", href: "#" },
    { name: "Tracking Status", href: "#" },
    { name: "Career", href: "#" },
    { name: "Do's or Don'ts", href: "#" },
    { name: "Customer Care", href: "#contact" },
    { name: "Site Map", href: "#" },
  ];

  const services = [
    { name: "Domestic Shifting", href: "/services/house-shifting" },
    { name: "Household Shifting", href: "/services/house-shifting" },
    { name: "Office Shifting", href: "/services/office-shifting" },
    { name: "Car Shifting", href: "/services/vehicle-shifting" },
    { name: "Corporate Shifting", href: "/services/office-shifting" },
    { name: "International Shifting", href: "/services/international-shifting" },
    { name: "Local Shifting", href: "/services/house-shifting" },
    { name: "Storage Facility", href: "/services/storage-service" },
    { name: "Bulk Commercial Movements", href: "/services/office-shifting" },
    { name: "Parcel Services", href: "/services" },
    { name: "Warehousing", href: "/services/storage-service" },
    { name: "Over Dimensional Cargo", href: "/services" },
  ];

  const policies = [
    { name: "ISO Policy", href: "#" },
    { name: "Services Policy", href: "#" },
    { name: "Quality Policy", href: "#" },
    { name: "Packing Policy", href: "#" },
    { name: "Training Policy", href: "#" },
  ];

  const contactLinks = [
    { name: "Corporate Office", href: "#contact" },
    { name: "For Shifting", href: "#contact" },
    { name: "International Shifting", href: "/services/international-shifting" },
    { name: "Track", href: "#" },
    { name: "Claims", href: "#" },
    { name: "Feedback", href: "#contact" },
  ];

  return (
    <footer className="bg-hero-overlay text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">About Us</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Need Help?</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* APM Policies */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">APM Policies</h4>
            <ul className="space-y-2">
              {policies.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <h4 className="font-bold text-lg mb-6 text-primary">Our Office Locations</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-background font-semibold text-sm">Rohtak (Head Office)</p>
                <p className="text-background/70 text-xs">Plot no. 71/30, Ground floor, Sanjay Colony, Rohtak, Haryana 124001</p>
                <a href="tel:+919050003056" className="text-primary text-xs hover:underline">+91 9050003056</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-background font-semibold text-sm">Bhiwani Office</p>
                <p className="text-background/70 text-xs">Plot No. 102, Ground Floor, near Hansi Gate, Bhiwani, Haryana 127021</p>
                <a href="tel:+919034585813" className="text-primary text-xs hover:underline">+91 9034585813</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-background font-semibold text-sm">Charkhi Dadri Office</p>
                <p className="text-background/70 text-xs">Plot Number 79, First Floor, Near Rohilla Tent House, Ward No. 16, Charkhi Dadri, Haryana 127306</p>
                <a href="tel:+919034685813" className="text-primary text-xs hover:underline">+91 9034685813</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-background font-semibold text-sm">Jind Office</p>
                <p className="text-background/70 text-xs">Plot Number 72, Ground Floor, Udyan Vihar, Jind, Haryana 126102</p>
                <a href="tel:+917056585813" className="text-primary text-xs hover:underline">+91 7056585813</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-background font-semibold text-sm">Delhi Office</p>
                <p className="text-background/70 text-xs">Plot No. 34, Subhash Vihar, North East Delhi, Delhi – 110071</p>
                <a href="tel:+919034755813" className="text-primary text-xs hover:underline">+91 9034755813</a>
              </div>
            </div>
          </div>
          
          {/* Email */}
          <div className="mt-6 flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <a href="mailto:info@ampmoverandpacker.com" className="text-background/70 hover:text-primary transition-colors text-sm break-all">
              info@ampmoverandpacker.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1">
                <img src={logo} alt="APM Packer and Movers" className="h-8 w-auto" />
              </div>
              <p className="text-background/60 text-sm">
                © {new Date().getFullYear()} APMoversandpackers.in. All rights reserved.
              </p>
            </div>
            <p className="text-background/50 text-xs">
              GST No: 07HKOPS0665G2ZL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
