import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";

interface BusinessHeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showCalculatorPreview?: boolean;
  theme?: string;
}

export function BusinessHero({
  title = "The Smart Calculator That Listens and Adapts",
  subtitle = "Perform calculations effortlessly with voice commands. The intelligent interface appears when you need it and elegantly fades away when you don't.",
  tagline = "Introducing VoiceCalc for macOS",
  primaryButtonText = "Download Beta",
  secondaryButtonText = "Watch Demo",
  showCalculatorPreview = true,
  theme = "light"
}: BusinessHeroProps) {
  const isDark = theme === 'dark';
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className={cn(
      "relative min-h-screen w-full overflow-hidden pt-24 pb-20 flex items-center justify-center",
      isDark ? "bg-gray-950 bg-mesh-gradient-dark" : "bg-mesh-gradient"
    )}>
      {/* Background elements */}
      <div className={cn(
        "absolute top-20 right-[10%] w-64 h-64 rounded-full filter blur-3xl animate-pulse-subtle",
        isDark ? "bg-brand-purple-dark/20" : "bg-brand-purple-light/20"
      )}></div>
      <div className={cn(
        "absolute bottom-20 left-[10%] w-72 h-72 rounded-full filter blur-3xl animate-pulse-subtle",
        isDark ? "bg-brand-blue/20" : "bg-brand-blue/10"
      )} style={{ animationDelay: '2s' }}></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <div className="space-y-4 max-w-[800px]">
          <div className="inline-block animate-fade-in-up">
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
            element="h1"
            animation="fade-in-up"
            delay={100}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight"
            theme={theme}
          />
          
          <AnimatedText
            text={subtitle}
            element="p"
            animation="fade-in-up"
            delay={200}
            className={cn(
              "text-lg md:text-xl max-w-3xl mx-auto text-balance",
              isDark ? "text-gray-400" : "text-muted-foreground"
            )}
            theme={theme}
          />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-cyan hover:bg-cyan/90 text-black rounded-full px-8"
              onClick={(e) => scrollToSection(e, "download")}
            >
              {primaryButtonText}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={cn(
                "rounded-full px-6 group",
                isDark ? "bg-transparent border-gray-700 text-white hover:bg-gray-800" : ""
              )}
              onClick={(e) => scrollToSection(e, "demo")}
            >
              {secondaryButtonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Calculator Preview */}
        {showCalculatorPreview && (
          <div className="mt-16 w-full max-w-3xl mx-auto animate-fade-in-up animate-delay-500">
            <GlassCard intensity="high" className="p-6 sm:p-8 shadow-xl" theme={theme}>
              <div className={cn(
                "aspect-[16/9] rounded-lg overflow-hidden relative flex items-center justify-center",
                isDark ? "bg-black/20" : "bg-black/5"
              )}>
                <div className="w-[280px] h-[400px] bg-white rounded-xl shadow-2xl overflow-hidden animate-float">
                  <div className="h-14 bg-brand-gray-light border-b border-gray-200 flex items-center justify-between px-4">
                    <div className="text-sm font-medium text-brand-gray-dark">Calculator</div>
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-right text-3xl font-light mb-4 font-mono">
                      1,234.56
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {["C", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((key, index) => (
                        <div 
                          key={index}
                          className={`h-12 rounded-lg flex items-center justify-center text-lg ${
                            ["C", "±", "%", "÷", "×", "-", "+", "="].includes(key) 
                              ? "bg-brand-blue text-white" 
                              : "bg-brand-gray-light/60 text-brand-gray-dark"
                          }`}
                        >
                          {key}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-3 bg-brand-gray-light/50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue text-xs">
                          🎤
                        </div>
                        <div className="ml-3 text-xs text-brand-gray-medium">
                          "Calculate twenty-five percent of five hundred"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <div className={cn(
                    "text-xs px-3 py-1 rounded-full backdrop-blur-sm",
                    isDark 
                      ? "bg-gray-800/80 text-gray-300" 
                      : "bg-white/80 text-muted-foreground"
                  )}>
                    Elegant interface that follows your cursor
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}