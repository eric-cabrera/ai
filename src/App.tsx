import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowThisSiteWasBuilt from "./pages/HowThisSiteWasBuilt";
import NotFound from "./pages/NotFound";
import TrainingHighlightsPage from "./pages/TrainingHighlights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/ai">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-this-site-was-built" element={<HowThisSiteWasBuilt />} />
          <Route path="/training-highlights" element={<TrainingHighlightsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
