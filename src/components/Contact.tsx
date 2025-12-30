import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    name: "Rohtak (Head Office)",
    address: "Plot no. 71/30, Ground floor, Sanjay Colony, Rohtak, Haryana 124001",
    phone: "9050003056"
  },
  {
    name: "Bhiwani Office",
    address: "Plot No. 102, Ground Floor, near Hansi Gate, Bhiwani, Haryana 127021",
    phone: "9034585813"
  },
  {
    name: "Charkhi Dadri Office",
    address: "Plot Number 79, First Floor, Near Rohilla Tent House, Ward No. 16, Charkhi Dadri, Haryana 127306",
    phone: "9034685813"
  },
  {
    name: "Jind Office",
    address: "Plot Number 72, Ground Floor, Udyan Vihar, Jind, Haryana 126102",
    phone: "7056585813"
  },
  {
    name: "Delhi Office",
    address: "Plot No. 34, Subhash Vihar, North East Delhi, Delhi – 110071, India",
    phone: "9034755813"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-hero text-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In Touch
          </h2>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offices.map((office, index) => (
            <div key={index} className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">{office.name}</h3>
                  <p className="text-background/70 text-sm mb-3">{office.address}</p>
                  <a
                    href={`tel:+91${office.phone}`}
                    className="inline-flex items-center gap-2 text-background hover:text-primary transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    +91 {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Main Helpline</h3>
            <a
              href="tel:+919050003056"
              className="text-background/70 hover:text-primary transition-colors text-lg font-semibold"
            >
              +91 90500 03056
            </a>
          </div>

          <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Address</h3>
            <a
              href="mailto:info@ampmoverandpacker.com"
              className="text-background/70 hover:text-primary transition-colors text-sm break-all"
            >
              info@ampmoverandpacker.com
            </a>
          </div>

          <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Working Hours</h3>
            <p className="text-background/70 text-sm">
              Monday - Sunday<br />
              24/7 Available
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            title="APMoversandPackers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55992.34925929652!2d76.54566497832032!3d28.894751099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d838ff7b9aa5d%3A0x25c5c8c180a4b4e1!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
