import { Phone, Mail, Shield } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 md:py-2">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6 text-center">
          <a href="tel:+919050003056" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-5 h-5 md:w-4 md:h-4" />
            <span className="font-bold text-lg md:text-sm">+91 90500 03056</span>
          </a>
          <a href="mailto:info@apmoverandpacker.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-5 h-5 md:w-4 md:h-4" />
            <span className="text-base md:text-sm">info@apmoverandpacker.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 md:w-4 md:h-4" />
            <span className="text-base md:text-sm">GSTIN: 07HKOPS0665G2ZL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
