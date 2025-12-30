import { CheckCircle, Users, Truck, Star } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const features = [
    "Safe & Secure Packing",
    "On-Time Delivery",
    "Experienced Team",
    "Affordable Pricing",
    "GPS Tracking",
    "Insurance Coverage",
  ];

  const stats = [
    { icon: Truck, value: "7,639+", label: "Successful Shifts" },
    { icon: Users, value: "7,639+", label: "Happy Customers" },
    { icon: Star, value: "60+", label: "Professional Team" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutTeam}
                alt="APMoversandpackers.in professional team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/50 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Reliable APMoversandpackers.in – Safe, Fast, and Affordable
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              APMoversandpackers.in is a professional relocation service provider known for its reliable, 
              fast, and affordable shifting solutions across India. We specialize in home, office, and 
              vehicle relocation with expert packing, loading, transportation, and unpacking services.
            </p>
            <p className="text-muted-foreground mb-8">
              Our trained team ensures the complete safety of your goods, on-time delivery, and a 
              stress-free shifting experience. Choose APMoversandpackers.in for smooth, secure, 
              and hassle-free moving every time.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
