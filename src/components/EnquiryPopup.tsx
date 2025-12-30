import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup = ({ isOpen, onClose }: EnquiryPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "House Shifting",
    "Office Shifting",
    "Vehicle Shifting",
    "Storage Service",
    "Local Shifting",
    "Domestic Shifting",
    "International Shifting",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Create WhatsApp message
    const message = `*New Enquiry from APMoversandPackers Website*
    
*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim() || "Not provided"}
*Phone:* ${formData.phone.trim()}
*Service:* ${formData.service || "Not specified"}
*Message:* ${formData.message.trim() || "No additional message"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919050003056?text=${encodedMessage}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-hero-overlay/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-primary p-6 text-primary-foreground">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold">Get Free Quote</h2>
          <p className="text-primary-foreground/80 mt-1">Fill the form and we'll contact you shortly</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-trust mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your enquiry has been sent to WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  maxLength={15}
                  className="h-12"
                />
              </div>
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={500}
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-5 h-5" />
                Send to WhatsApp
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
