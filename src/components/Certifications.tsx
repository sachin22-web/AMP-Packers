import approvedBadge from "@/assets/approved-badge.png";
import isoCertificate from "@/assets/iso-certificate.png";
import trustedBadge from "@/assets/trusted-badge.png";
import ratingBadge from "@/assets/rating-badge.png";
import hclLogo from "@/assets/clients/hcl.jpg";
import hdfcLogo from "@/assets/clients/hdfc.png";
import cocacolaLogo from "@/assets/clients/cocacola.png";
import indusindLogo from "@/assets/clients/indusind.png";

const Certifications = () => {
  const certifications = [
    {
      image: approvedBadge,
      title: "IBA Approved",
      subtitle: "Transporters in Rohtak",
      description: "IBA (Indian Banks' Association) approved services meeting high-quality standards for corporate and personal relocations.",
    },
    {
      image: isoCertificate,
      title: "ISO 9001:2006",
      subtitle: "Certified Company",
      description: "Recognized for maintaining international standards in quality management and customer satisfaction.",
    },
    {
      image: trustedBadge,
      title: "100% Trusted",
      subtitle: "Relocation Company",
      description: "Known for reliability, safety, and customer satisfaction with transparent pricing and excellent service.",
    },
    {
      image: ratingBadge,
      title: "5 Star Rating",
      subtitle: "Google Reviews",
      description: "Our customers' trust and satisfaction reflected in our Google 5-Star Rating and positive feedback.",
    },
  ];

  const clients = [
    { name: "HCL", logo: hclLogo },
    { name: "HDFC BANK", logo: hdfcLogo },
    { name: "Coca-Cola", logo: cocacolaLogo },
    { name: "IndusInd Bank", logo: indusindLogo },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications & Trust Badges
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
              <p className="text-primary font-medium text-sm mb-3">{cert.subtitle}</p>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Clients Section - With Logo Images */}
        <div className="mt-16 bg-primary rounded-2xl py-12 px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Our <span className="text-gold">Clients</span>
            </h3>
            <div className="w-16 h-1 bg-gold mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[100px] shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
