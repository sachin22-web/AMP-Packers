import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      review: "APMoversandPackers made my home shifting totally stress-free. Their team packed everything safely and delivered on time. Excellent service and very professional staff!",
    },
    {
      name: "Priya Sharma",
      review: "I was worried about my glass items, but APMoversandPackers handled everything carefully. Their packing quality and behavior were top-notch. Highly recommended!",
    },
    {
      name: "Amit Verma",
      review: "Affordable and reliable! They managed my office relocation perfectly without any damage or delay. Great coordination throughout the process.",
    },
    {
      name: "Neha Patel",
      review: "From booking to final delivery, everything was smooth. The staff was polite, hardworking, and honest. I'll definitely use APMoversandPackers again.",
    },
    {
      name: "Sandeep Singh",
      review: "I shifted my car and household goods with APMoversandPackers. Everything arrived safely before the committed time. Truly dependable service!",
    },
    {
      name: "Anjali Mehta",
      review: "APMoversandPackers made my intercity move easy and comfortable. Great communication, professional team, and value for money. Thank you!",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
