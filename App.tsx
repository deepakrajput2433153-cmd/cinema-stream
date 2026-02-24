import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// Main Pages
import Index from "./pages/Index";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

// Navbar Pages
import MoviesPage from "./pages/MoviesPage";
import TVShowsPage from "./pages/TVShowsPage";
import MyListPage from "./pages/MyListPage";
import SearchPage from "./pages/SearchPage";
import AccountPage from "./pages/AccountPage";

// Footer — Help
import HelpCenterPage from "./pages/HelpCenterPage";
import ContactPage from "./pages/ContactPage";

// Footer — Legal
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

// Footer — Membership
import SubscriptionPlansPage from "./pages/SubscriptionPlansPage";
import GiftCardsPage from "./pages/GiftCardsPage";

// Footer — Company
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Core */}
          <Route path="/" element={<Index />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

          {/* Navbar */}
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/shows" element={<TVShowsPage />} />
          <Route path="/my-list" element={<MyListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />

          {/* Footer — Help */}
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<HelpCenterPage />} />

          {/* Footer — Legal */}
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies" element={<PrivacyPolicyPage />} />

          {/* Footer — Membership */}
          <Route path="/plans" element={<SubscriptionPlansPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />

          {/* Footer — Company */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<AboutPage />} />
          <Route path="/press" element={<AboutPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
