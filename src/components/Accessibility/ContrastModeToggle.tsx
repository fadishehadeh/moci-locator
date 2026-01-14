import React from "react";
import { useAccessibility } from "@/context/AccessibilityContext";
import { Button } from "@/components/ui/button";
import { Contrast } from "lucide-react";

const ContrastModeToggle: React.FC = () => {
  const { isHighContrast, setIsHighContrast } = useAccessibility();

  const handleToggle = () => {
    setIsHighContrast(!isHighContrast);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className={`flex items-center gap-1 ${
        isHighContrast
          ? "bg-black text-yellow-300 hover:bg-gray-900"
          : "text-gray-600 hover:text-qatari"
      }`}
      aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
      aria-pressed={isHighContrast}
      title={isHighContrast ? "High contrast mode enabled" : "Enable high contrast mode"}
    >
      <Contrast className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline text-xs">
        {isHighContrast ? "Contrast: ON" : "Contrast"}
      </span>
    </Button>
  );
};

export default ContrastModeToggle;

