import React from 'react';
import { Mic, Calculator, Layers, Zap, Settings, History } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BusinessFeaturesProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  features?: FeatureItem[];
  setActiveElement?: (element: string) => void;
  activeElement?: string;
}

export function BusinessFeatures({
  title = "Smart Functionality Designed for Effortless Use",
  subtitle = "Every feature is thoughtfully designed to help you perform calculations with minimal effort and maximum efficiency.",
  tagline = "Features",
  features = [
    {
      icon: <Mic className="h-6 w-6 text-primary" />,
      title: "Voice Commands",
      description: "Perform calculations by speaking naturally. No need to type or click buttons."
    },
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "Multiple Modes",
      description: "Choose between Basic, Scientific, and Financial calculators to suit your needs."
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Context-Aware UI",
      description: "The interface appears near your cursor and adapts its transparency based on usage."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Smart Number Formatting",
      description: "Results are displayed with appropriate abbreviations (K, M, B, T) for readability."
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Customizable Settings",
      description: "Personalize shortcuts, themes, and default modes to match your preferences."
    },
    {
      icon: <History className="h-6 w-6 text-primary" />,
      title: "Calculation History",
      description: "Access your recent calculations for reference or reuse with a simple gesture."
    }
  ],
  setActiveElement,
  activeElement
}: BusinessFeaturesProps) {
  const { theme } = useTheme();
  const { deviceView, properties } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  // Handle font selection
  const getFontFamily = () => {
    switch (properties.fontFamily) {
      case 'var(--template-font-system)':
        return 'var(--font-system)';
      case 'var(--template-font-syne)':
        return 'var(--font-syne)';
      case 'var(--template-font-roboto)':
        return 'var(--font-roboto)';
      case 'var(--template-font-montserrat)':
        return 'var(--font-montserrat)';
      default:
        return 'var(--font-space-grotesk)';
    }
  };

  const fontStyle = {
    fontFamily: getFontFamily()
  } as React.CSSProperties;
  
  return (
    <section 
      className={cn(
        "template-container relative overflow-hidden",
        isMobileView ? "py-12" : isTabletView ? "py-16" : "py-20"
      )}
      style={fontStyle}
    >
      {/* Background elements */}
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-3xl animate-pulse-subtle bg-[var(--template-primary)]/10",
        isMobileView ? "w-64 h-64" : isTabletView ? "w-96 h-96" : "w-[600px] h-[600px]"
      )}></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <div 
            className={cn(
              "inline-block",
              activeElement === "businessFeaturesTagline" ? "ring-2 ring-[var(--template-primary)] rounded-full" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessFeaturesTagline");
            }}
          >
            <span className={cn(
              "inline-flex items-center rounded-full font-medium border border-[var(--template-primary)]/20 bg-[var(--template-primary)]/10 text-[var(--template-primary)]",
              isMobileView ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm"
            )}>
              {properties.businessFeaturesTagline || tagline}
            </span>
          </div>
          
          <h2 
            className={cn(
              "font-bold tracking-tight text-balance leading-[1.1] text-[var(--template-foreground)]",
              isMobileView ? "text-2xl" : isTabletView ? "text-3xl" : "text-4xl",
              activeElement === "businessFeaturesTitle" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessFeaturesTitle");
            }}
          >
            {properties.businessFeaturesTitle || title}
          </h2>
          
          <p 
            className={cn(
              "mx-auto text-balance text-[var(--template-muted-foreground)]",
              isMobileView ? "text-sm max-w-[90%]" : isTabletView ? "text-base max-w-2xl" : "text-lg max-w-2xl",
              activeElement === "businessFeaturesSubtitle" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessFeaturesSubtitle");
            }}
          >
            {properties.businessFeaturesSubtitle || subtitle}
          </p>
        </div>
        
        <div className={cn(
          "grid gap-6",
          isMobileView ? "grid-cols-1 mt-8" : isTabletView ? "grid-cols-2 mt-12" : "grid-cols-3 mt-16"
        )}>
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.(`businessFeature${index}`);
              }}
            >
              <GlassCard
                intensity="low"
                className={cn(
                  "relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]",
                  isMobileView ? "p-4" : isTabletView ? "p-6" : "p-8",
                  activeElement === `businessFeature${index}` ? "ring-2 ring-[var(--template-primary)]" : ""
                )}
              >
                <div className={cn(
                  "rounded-lg bg-[var(--template-primary)]/10 flex items-center justify-center text-[var(--template-primary)]",
                  isMobileView ? "w-10 h-10 text-lg" : isTabletView ? "w-12 h-12 text-xl" : "w-14 h-14 text-2xl"
                )}>
                  {feature.icon}
                </div>
                
                <h3 className={cn(
                  "font-semibold text-[var(--template-foreground)]",
                  isMobileView ? "text-lg mt-3" : isTabletView ? "text-xl mt-4" : "text-2xl mt-5"
                )}>
                  {properties[`businessFeature${index}Title`] || feature.title}
                </h3>
                
                <p className={cn(
                  "text-[var(--template-muted-foreground)]",
                  isMobileView ? "text-sm mt-1" : isTabletView ? "text-base mt-2" : "text-lg mt-3"
                )}>
                  {properties[`businessFeature${index}Description`] || feature.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}