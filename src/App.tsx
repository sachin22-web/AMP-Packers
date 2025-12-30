import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import HouseShifting from "./pages/services/HouseShifting";
import OfficeShifting from "./pages/services/OfficeShifting";
import VehicleShifting from "./pages/services/VehicleShifting";
import StorageService from "./pages/services/StorageService";
import InternationalShifting from "./pages/services/InternationalShifting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/services/house-shifting" element={<HouseShifting />} />
            <Route path="/services/office-shifting" element={<OfficeShifting />} />
            <Route path="/services/vehicle-shifting" element={<VehicleShifting />} />
            <Route path="/services/storage-service" element={<StorageService />} />
            <Route path="/services/international-shifting" element={<InternationalShifting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
