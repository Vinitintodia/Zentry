import React from 'react';
import { Mic, Calculator, Layers, Zap, Settings, History } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";

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
  theme?: string;
}

export function BusinessFeatures({
  title = "Smart Functionality Designed for Effortless Use",
  subtitle = "Every feature is thoughtfully designed to help you perform calculations with minimal effort and maximum efficiency.",
  tagline = "Features",
  features = [
    {
      icon: <Mic className="h-6 w-6 text-brand-blue" />,
      title: "Voice Commands",
      description: "Perform calculations by speaking naturally. No need to type or click buttons."
    },
    {
      icon: <Calculator className="h-6 w-6 text-brand-blue" />,
      title: "Multiple Modes",
      description: "Choose between Basic, Scientific, and Financial calculators to suit your needs."
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-blue" />,
      title: "Context-Aware UI",
      description: "The interface appears near your cursor and adapts its transparency based on usage."
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-blue" />,
      title: "Smart Number Formatting",
      description: "Results are displayed with appropriate abbreviations (K, M, B, T) for readability."
    },
    {
      icon: <Settings className="h-6 w-6 text-brand-blue" />,
      title: "Customizable Settings",
      description: "Personalize shortcuts, themes, and default modes to match your preferences."
    },
    {
      icon: <History className="h-6 w-6 text-brand-blue" />,
      title: "Calculation History",
      description: "Access your recent calculations for reference or reuse with a simple gesture."
    }
  ],
  theme = "light"
}: BusinessFeaturesProps) {
  const isDark = theme === 'dark';
  
  return (
    <section id="features" className={cn(
      "py-20 relative overflow-hidden",
      isDark ? "bg-gray-900" : "bg-white"
    )}>
      {/* Subtle gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-50",
        isDark ? "bg-mesh-gradient-dark" : "bg-mesh-gradient"
      )}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
              isDark 
                ? "border border-brand-blue/30 bg-brand-blue/20 text-brand-blue-light" 
                : "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue"
            )}>
              {tagline}
            </span>
          </div>
          
          <AnimatedText
            text={title}
            element="h2"
            animation="fade-in-up"
            className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4"
            theme={theme}
          />
          
          <AnimatedText
            text={subtitle}
            element="p"
            animation="fade-in-up"
            delay={100}
            className={cn(
              "text-lg",
              isDark ? "text-gray-400" : "text-muted-foreground"
            )}
            theme={theme}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlassCard 
                intensity="medium" 
                className="h-full p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
                theme={theme}
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                  isDark ? "bg-brand-blue/20" : "bg-brand-blue/10"
                )}>
                  {feature.icon}
                </div>
                <h3 className={cn(
                  "text-xl font-semibold mb-2",
                  isDark ? "text-white" : ""
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  "text-balance",
                  isDark ? "text-gray-400" : "text-muted-foreground"
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