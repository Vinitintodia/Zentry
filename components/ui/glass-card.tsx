import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  theme?: string;
}

export function GlassCard({ 
  children, 
  className = "", 
  intensity = "medium",
  theme = "light"
}: GlassCardProps) {
  const isDark = theme === 'dark';
  
  const getIntensityClass = () => {
    if (isDark) {
      switch (intensity) {
        case "low":
          return "bg-gray-900/50 backdrop-blur-sm";
        case "high":
          return "bg-gray-900/70 backdrop-blur-md";
        case "medium":
        default:
          return "bg-gray-900/60 backdrop-blur";
      }
    } else {
      switch (intensity) {
        case "low":
          return "bg-white/50 backdrop-blur-sm";
        case "high":
          return "bg-white/70 backdrop-blur-md";
        case "medium":
        default:
          return "bg-white/60 backdrop-blur";
      }
    }
  };

  return (
    <div className={cn(
      "rounded-xl shadow", 
      getIntensityClass(), 
      isDark ? "border border-gray-700/50" : "border border-gray-200/50",
      className
    )}>
      {children}
    </div>
  );
}