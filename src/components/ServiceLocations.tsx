const ServiceLocations = () => {
  const locations = [
    "Faridabad", "Agroha", "Ambala", "Asandh", "Bahadurgarh", "Bathinda",
    "Bawani Khera", "Bhadra", "Bhiwadi", "Bhiwani", "Bilaspur", "Chandigarh",
    "Chhachharauli", "Dabwali", "Dadri", "Delhi", "Dera Bassi", "Dharuhera",
    "Fatehabad", "Ferozpur Jhirka", "Ganaur", "Gharaunda", "Ghasera", "Gohana",
    "Yamunanagar", "Taoru", "Tohana", "Gulha", "Guraora", "Gurugram",
    "Hansi", "Hathin", "Hisar", "Jagadhri", "Jhajjar", "Jharmari",
    "Jind", "Kaithal", "Kairana", "Kala Amb", "Kalka", "Kaman",
    "Kapariwas", "Karnal", "Kasauli", "Khair", "Kharar", "Rohtak",
    "Satrod", "Sirsa", "Siwani", "Sonepat", "Kurukshetra", "Mahendragarh",
    "Malout", "Murthal", "Nahan", "Narayangarh", "Narnaul", "Neemrana",
    "New Delhi", "Nuh", "Noida", "Panipat", "Palwal", "Panchkula",
    "Rajpura", "Ramgarh", "Rewari",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Packers & Movers Service Locations
          </h2>
          <p className="text-muted-foreground mt-4">
            We provide reliable moving services across Haryana, Delhi NCR, and surrounding areas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((location) => (
            <span
              key={location}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLocations;
