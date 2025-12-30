import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

interface HeaderProps {
  onEnquiryClick: () => void;
}

const Header = ({ onEnquiryClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const serviceLinks = [
    { name: "House Shifting", href: "/services/house-shifting" },
    { name: "Office Shifting", href: "/services/office-shifting" },
    { name: "Vehicle Shifting", href: "/services/vehicle-shifting" },
    { name: "Storage Service", href: "/services/storage-service" },
    { name: "International Shifting", href: "/services/international-shifting" },
  ];

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "About Us", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <header className="fixed top-[104px] md:top-10 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-border/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-white rounded-lg p-1">
              <img src={logo} alt="APM Packer and Movers" className="h-10 md:h-14 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.slice(0, 2).map((link) => (
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-background/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-background/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-background/80 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="cursor-pointer font-semibold">
                    All Services
                  </Link>
                </DropdownMenuItem>
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog Link */}
            <Link
              to="/blog"
              className="text-background/80 hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
            
            {navLinks.slice(2).map((link) => (
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-background/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-background/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919050003056"
              className="hidden lg:flex items-center gap-2 text-background hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold">+91 90500 03056</span>
            </a>
            <Button onClick={onEnquiryClick} variant="hero" size="sm" className="hidden sm:flex">
              Get Free Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-background p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}

              <Link
                to="/blog"
                className="text-background/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Services Links */}
              <div className="border-t border-border/10 pt-4">
                <p className="text-background font-semibold mb-2">Services</p>
                <Link
                  to="/services"
                  className="block text-background/80 hover:text-primary transition-colors font-medium py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Services
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-background/80 hover:text-primary transition-colors text-sm py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <a
                href="tel:+919050003056"
                className="flex items-center gap-2 text-background hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold">+91 90500 03056</span>
              </a>
              <Button onClick={onEnquiryClick} variant="hero" className="w-full mt-2">
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
