import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlassCard({ 
  children, 
  className = "", 
  intensity = "medium"
}: GlassCardProps) {
  const getIntensityClass = () => {
    switch (intensity) {
      case "low":
        return "bg-background/50 backdrop-blur-sm";
      case "high":
        return "bg-background/90 backdrop-blur-md";
      case "medium":
      default:
        return "bg-background/70 backdrop-blur";
    }
  };

  return (
    <div className={cn(
      "rounded-xl", 
      "shadow-lg",
      "border border-border/50",
      "transition-colors duration-200",
      getIntensityClass(),
      className
    )}>
      {children}
    </div>
  );
}