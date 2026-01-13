
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import International from "./pages/International";
import About from "./pages/About/About";
import Minister from "./pages/About/Minister";
import Strategy from "./pages/About/Strategy";
import VisionMissionValues from "./pages/About/VisionMissionValues";
import NationalCommittees from "./pages/About/NationalCommittees";
import Services from "./pages/Services/Services";
import Business from "./pages/Services/Business";
import Consumer from "./pages/Services/Consumer";
import EServices from "./pages/EServices/EServices";
import MediaCenter from "./pages/MediaCenter/MediaCenter";
import News from "./pages/MediaCenter/News";
import NewsArticle from "./pages/MediaCenter/NewsArticle";
import Reports from "./pages/MediaCenter/Reports";
import Gallery from "./pages/MediaCenter/Gallery";
import Resources from "./pages/Resources/Resources";
import ContactUs from "./pages/ContactUs";
import ContactPageForFigma from "./components/ContactPageForFigma";
import Password from "./pages/Password";
import Sitemap from "./pages/Sitemap";
import TradeNamesSearch from "./pages/Services/TradeNamesSearch";
import Branches from "./pages/About/Branches";
import OfficeLocator from "./pages/OfficeLocator/OfficeLocator";
import { AuthProvider } from "./context/AuthContext";
import { AccessibilityProvider } from "./context/AccessibilityContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <AccessibilityProvider>
          <AuthProvider>
            <BrowserRouter>
            <Routes>
              <Route path="/password" element={<Password />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/international"
                element={
                  <ProtectedRoute>
                    <International />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about/minister"
                element={
                  <ProtectedRoute>
                    <Minister />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about/strategy"
                element={
                  <ProtectedRoute>
                    <Strategy />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about/vision"
                element={
                  <ProtectedRoute>
                    <VisionMissionValues />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about/committees"
                element={
                  <ProtectedRoute>
                    <NationalCommittees />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/services"
                element={
                  <ProtectedRoute>
                    <Services />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/services/business"
                element={
                  <ProtectedRoute>
                    <Business />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/services/consumer"
                element={
                  <ProtectedRoute>
                    <Consumer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/e-services"
                element={
                  <ProtectedRoute>
                    <EServices />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/media-centre"
                element={
                  <ProtectedRoute>
                    <MediaCenter />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/media-centre/news"
                element={
                  <ProtectedRoute>
                    <News />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/media-centre/news/:id"
                element={
                  <ProtectedRoute>
                    <NewsArticle />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/media-centre/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/media-centre/gallery"
                element={
                  <ProtectedRoute>
                    <Gallery />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resources"
                element={
                  <ProtectedRoute>
                    <Resources />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contact-us"
                element={
                  <ProtectedRoute>
                    <ContactUs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contact-figma"
                element={
                  <ProtectedRoute>
                    <ContactPageForFigma />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/sitemap"
                element={
                  <ProtectedRoute>
                    <Sitemap />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/trade-names"
                element={
                  <ProtectedRoute>
                    <TradeNamesSearch />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about/branches"
                element={
                  <ProtectedRoute>
                    <Branches />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/locator"
                element={
                  <ProtectedRoute>
                    <OfficeLocator />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
          </Routes>
            </BrowserRouter>
          </AuthProvider>
        </AccessibilityProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
