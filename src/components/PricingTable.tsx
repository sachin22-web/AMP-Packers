import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const PricingTable = () => {
  const [shiftingType, setShiftingType] = useState("house");

  const housePricing = [
    { type: "1 BHK Home", upto50: "₹7,000 - 11,000", upto500: "₹12,000 - 16,000", upto1000: "₹20,000 - 25,000", upto1500: "₹26,000 - 32,000" },
    { type: "2 BHK Home", upto50: "₹12,000 - 15,000", upto500: "₹20,000 - 23,000", upto1000: "₹25,000 - 30,000", upto1500: "₹32,000 - 40,000" },
    { type: "3 BHK Home", upto50: "₹15,000 - 18,000", upto500: "₹25,000 - 30,000", upto1000: "₹35,000 - 40,000", upto1500: "₹45,000 - 50,000" },
    { type: "4 BHK/Villa", upto50: "₹25,000 - 30,000", upto500: "₹35,000 - 40,000", upto1000: "₹50,000 - 60,000", upto1500: "₹55,000 - 65,000" },
  ];

  const officePricing = [
    { type: "Small Office", upto50: "₹10,000 - 15,000", upto500: "₹18,000 - 25,000", upto1000: "₹30,000 - 40,000", upto1500: "₹45,000 - 55,000" },
    { type: "Medium Office", upto50: "₹20,000 - 30,000", upto500: "₹35,000 - 45,000", upto1000: "₹50,000 - 65,000", upto1500: "₹70,000 - 85,000" },
    { type: "Large Office", upto50: "₹35,000 - 50,000", upto500: "₹55,000 - 75,000", upto1000: "₹80,000 - 1,00,000", upto1500: "₹1,10,000 - 1,40,000" },
  ];

  const vehiclePricing = [
    { type: "Bike/Scooter", upto50: "₹2,000 - 3,000", upto500: "₹4,000 - 6,000", upto1000: "₹7,000 - 9,000", upto1500: "₹10,000 - 12,000" },
    { type: "Hatchback Car", upto50: "₹5,000 - 7,000", upto500: "₹10,000 - 14,000", upto1000: "₹18,000 - 22,000", upto1500: "₹25,000 - 30,000" },
    { type: "Sedan Car", upto50: "₹6,000 - 9,000", upto500: "₹12,000 - 16,000", upto1000: "₹20,000 - 26,000", upto1500: "₹30,000 - 36,000" },
    { type: "SUV/MUV", upto50: "₹8,000 - 12,000", upto500: "₹15,000 - 20,000", upto1000: "₹25,000 - 32,000", upto1500: "₹38,000 - 45,000" },
  ];

  const getPricingData = () => {
    switch (shiftingType) {
      case "office":
        return officePricing;
      case "vehicle":
        return vehiclePricing;
      default:
        return housePricing;
    }
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing Guide</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Shifting Packages & Rates
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transparent pricing based on distance and shifting type. Get an instant estimate for your move.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Select value={shiftingType} onValueChange={setShiftingType}>
              <SelectTrigger className="w-[250px] h-12 bg-background">
                <SelectValue placeholder="Select Shifting Type" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="house">House Shifting</SelectItem>
                <SelectItem value="office">Office Shifting</SelectItem>
                <SelectItem value="vehicle">Vehicle Shifting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-bold py-4">Shifting Type</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-center py-4">Up to 50 KM</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-center py-4">Up to 500 KM</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-center py-4">Up to 1000 KM</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-center py-4">Up to 1500 KM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getPricingData().map((row, index) => (
                  <TableRow key={row.type} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                    <TableCell className="font-semibold text-foreground py-4">{row.type}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{row.upto50}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{row.upto500}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{row.upto1000}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{row.upto1500}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            * Prices are approximate and may vary based on actual goods, packing materials, and additional services required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
