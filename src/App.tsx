
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OfficeLocator from "./pages/OfficeLocator/OfficeLocator";
import UnifiedSystem from "./pages/UnifiedSystem/UnifiedSystem";
import { ThemeProvider } from "./context/ThemeContext";
import { AccessibilityProvider } from "./context/AccessibilityContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AccessibilityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Default route - redirect to unified system */}
              <Route path="/" element={<Navigate to="/unified" replace />} />

              {/* Unified System - Main MOCI Portal */}
              <Route path="/unified" element={<UnifiedSystem />} />

              {/* Office Locator */}
              <Route path="/locator" element={<OfficeLocator />} />

              {/* Catch all other routes and redirect to unified */}
              <Route path="*" element={<Navigate to="/unified" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AccessibilityProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
