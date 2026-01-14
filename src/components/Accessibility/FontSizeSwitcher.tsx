import React from "react";
import { useAccessibility } from "@/context/AccessibilityContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Type } from "lucide-react";

const FontSizeSwitcher: React.FC = () => {
  const { fontSize, setFontSize } = useAccessibility();

  const fontSizeOptions = [
    { value: "small" as const, label: "A−", ariaLabel: "Decrease font size" },
    { value: "normal" as const, label: "A", ariaLabel: "Reset font size to normal" },
    { value: "large" as const, label: "A+", ariaLabel: "Increase font size" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-gray-600 hover:text-qatari"
          aria-label="Font size options"
          title="Adjust font size"
        >
          <Type className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline text-xs">Font Size</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" role="menu" aria-label="Font size options">
        {fontSizeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setFontSize(option.value)}
            role="menuitem"
            aria-label={option.ariaLabel}
            aria-pressed={fontSize === option.value}
            className={fontSize === option.value ? "bg-qatari/10" : ""}
          >
            <span className={fontSize === option.value ? "font-bold text-qatari" : ""}>
              {option.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontSizeSwitcher;

