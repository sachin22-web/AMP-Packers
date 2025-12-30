import { Shield, Clock, Award, Headphones, Truck, HandCoins } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Your belongings are handled with utmost care using high-quality packing materials.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We value your time and ensure punctual delivery of all your goods.",
    },
    {
      icon: Award,
      title: "IBA & ISO Certified",
      description: "Trusted by banks and recognized for maintaining international quality standards.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you.",
    },
    {
      icon: Truck,
      title: "GPS Tracking",
      description: "Real-time tracking of your shipment for complete peace of mind.",
    },
    {
      icon: HandCoins,
      title: "Affordable Pricing",
      description: "Transparent and competitive pricing with no hidden charges.",
    },
  ];

  return (
    <section className="section-padding bg-hero text-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Why Choose <span className="text-primary">APMMOVERSANDPACKERS</span>
          </h2>
          <p className="text-background/70 mt-4 max-w-2xl mx-auto">
            Choose APMoversandpackers.in for reliable, safe, and on-time relocation services. 
            Our expert team ensures careful packing, smooth transportation, and hassle-free delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10 hover:bg-background/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-background/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
