import React, { createContext, useContext, useState, useEffect } from "react";

type FontSize = "small" | "normal" | "large";

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  isHighContrast: boolean;
  setIsHighContrast: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fontSize, setFontSizeState] = useState<FontSize>("normal");
  const [isHighContrast, setIsHighContrastState] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("moci_fontSize") as FontSize | null;
    const savedContrast = localStorage.getItem("moci_highContrast");

    if (savedFontSize && ["small", "normal", "large"].includes(savedFontSize)) {
      setFontSizeState(savedFontSize);
    }

    if (savedContrast === "true") {
      setIsHighContrastState(true);
    }
  }, []);

  // Apply font size to document
  useEffect(() => {
    const root = document.documentElement;
    switch (fontSize) {
      case "small":
        root.style.fontSize = "14px";
        break;
      case "normal":
        root.style.fontSize = "16px";
        break;
      case "large":
        root.style.fontSize = "18px";
        break;
    }
    localStorage.setItem("moci_fontSize", fontSize);
  }, [fontSize]);

  // Apply high contrast mode to document
  useEffect(() => {
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add("high-contrast-mode");
    } else {
      root.classList.remove("high-contrast-mode");
    }
    localStorage.setItem("moci_highContrast", isHighContrast ? "true" : "false");
  }, [isHighContrast]);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
  };

  const setIsHighContrast = (enabled: boolean) => {
    setIsHighContrastState(enabled);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        isHighContrast,
        setIsHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
};

