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
  ]
}: BusinessFeaturesProps) {
  const { theme } = useTheme();
  const { deviceView } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  return (
    <section id="features" className={cn(
      "relative overflow-hidden bg-background",
      isMobileView ? "py-12" : isTabletView ? "py-16" : "py-20"
    )}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "text-center mx-auto",
          isMobileView ? "max-w-[90%] mb-8" : isTabletView ? "max-w-2xl mb-12" : "max-w-3xl mb-16"
        )}>
          <div className="inline-block mb-4">
            <span className={cn(
              "inline-flex items-center rounded-full font-medium border border-primary/20 bg-primary/10 text-primary",
              isMobileView ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm"
            )}>
              {tagline}
            </span>
          </div>
          
          <h2 className={cn(
            "font-bold tracking-tight text-balance mb-4 text-foreground animate-fade-in-up",
            isMobileView ? "text-2xl" : isTabletView ? "text-3xl" : "text-4xl"
          )}>
            {title}
          </h2>
          
          <p className={cn(
            "text-balance text-muted-foreground animate-fade-in-up",
            isMobileView ? "text-base" : "text-lg"
          )} style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        </div>
        
        <div className={cn(
          "grid gap-4",
          isMobileView ? "grid-cols-1" : isTabletView ? "grid-cols-2" : "grid-cols-3"
        )}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlassCard 
                intensity="low" 
                className={cn(
                  "h-full hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]",
                  isMobileView ? "p-4" : "p-6"
                )}
              >
                <div className={cn(
                  "rounded-lg flex items-center justify-center mb-4 bg-primary/10",
                  isMobileView ? "w-10 h-10" : "w-12 h-12"
                )}>
                  <div className={cn(
                    "text-primary",
                    isMobileView ? "w-5 h-5" : "w-6 h-6"
                  )}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={cn(
                  "font-semibold mb-2 text-foreground",
                  isMobileView ? "text-lg" : "text-xl"
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  "text-balance text-muted-foreground",
                  isMobileView ? "text-sm" : "text-base"
                )}>
                  {feature.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}