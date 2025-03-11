import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";

interface BusinessHeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showCalculatorPreview?: boolean;
  setActiveElement?: (element: string) => void;
  activeElement?: string;
}

export function BusinessHero({
  title = "The Smart Calculator That Listens and Adapts",
  subtitle = "Perform calculations effortlessly with voice commands. The intelligent interface appears when you need it and elegantly fades away when you don't.",
  tagline = "Introducing VoiceCalc for macOS",
  primaryButtonText = "Download Beta",
  secondaryButtonText = "Watch Demo",
  showCalculatorPreview = true,
  setActiveElement,
  activeElement
}: BusinessHeroProps) {
  const { theme } = useTheme();
  const { deviceView, properties } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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
      className="relative min-h-[100svh] w-full overflow-hidden pt-16 flex items-center justify-center template-container"
      style={fontStyle}
    >
      {/* Background elements */}
      <div className={cn(
        "absolute top-20 right-[10%] rounded-full filter blur-3xl animate-pulse-subtle bg-[var(--template-primary)]/20",
        isMobileView ? "w-32 h-32" : isTabletView ? "w-48 h-48" : "w-64 h-64"
      )}></div>
      <div className={cn(
        "absolute bottom-20 left-[10%] rounded-full filter blur-3xl animate-pulse-subtle bg-[var(--template-primary)]/10",
        isMobileView ? "w-36 h-36" : isTabletView ? "w-56 h-56" : "w-72 h-72"
      )} style={{ animationDelay: '2s' }}></div>
      
      <div className="container px-4 md:px-6">
        <div className="space-y-4 w-full max-w-[800px] mx-auto text-center">
          <div 
            className={cn(
              "inline-block animate-fade-in-up",
              activeElement === "businessHeroTagline" ? "ring-2 ring-[var(--template-primary)] rounded-full" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessHeroTagline");
            }}
          >
            <span className={cn(
              "inline-flex items-center rounded-full font-medium border border-[var(--template-primary)]/20 bg-[var(--template-primary)]/10 text-[var(--template-primary)]",
              isMobileView ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm"
            )}>
              {properties.businessHeroTagline || tagline}
            </span>
          </div>
          
          <h1 
            className={cn(
              "font-bold tracking-tight text-balance leading-[1.1] text-[var(--template-foreground)] animate-fade-in-up",
              isMobileView ? "text-3xl" : isTabletView ? "text-4xl" : "text-5xl lg:text-6xl",
              activeElement === "businessHeroTitle" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessHeroTitle");
            }}
          >
            {properties.businessHeroTitle || title}
          </h1>
          
          <p 
            className={cn(
              "mx-auto text-balance text-[var(--template-muted-foreground)] animate-fade-in-up",
              isMobileView ? "text-base max-w-[90%]" : isTabletView ? "text-lg max-w-2xl" : "text-xl max-w-2xl",
              activeElement === "businessHeroSubtitle" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
            )}
            style={{ animationDelay: '200ms' }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessHeroSubtitle");
            }}
          >
            {properties.businessHeroSubtitle || subtitle}
          </p>
          
          <div className={cn(
            "flex items-center justify-center gap-3 pt-4 animate-fade-in-up",
            isMobileView ? "flex-col w-full" : "flex-row gap-4"
          )} style={{ animationDelay: '300ms' }}>
            <Button 
              size="lg" 
              className={cn(
                "bg-[var(--template-primary)] text-[var(--template-primary-foreground)] hover:bg-[var(--template-primary)]/90 rounded-full",
                activeElement === "businessHeroPrimaryButton" ? "ring-2 ring-[var(--template-primary)]" : ""
              )}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessHeroPrimaryButton");
                scrollToSection(e, "download");
              }}
            >
              {properties.businessHeroPrimaryButtonText || primaryButtonText}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={cn(
                "rounded-full group border-[var(--template-border)]",
                isMobileView ? "w-full px-4" : "px-6",
                activeElement === "businessHeroSecondaryButton" ? "ring-2 ring-[var(--template-primary)]" : ""
              )}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessHeroSecondaryButton");
                scrollToSection(e, "demo");
              }}
            >
              {properties.businessHeroSecondaryButtonText || secondaryButtonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Calculator Preview */}
        {showCalculatorPreview && (
          <div className="mx-auto animate-fade-in-up animate-delay-500">
            <GlassCard intensity="high" className={cn(
              "shadow-xl",
              isMobileView ? "p-3" : isTabletView ? "p-6" : "p-8"
            )}>
              <div className="aspect-[16/9] rounded-lg overflow-hidden relative flex items-center justify-center bg-[var(--template-muted)]">
                <div className={cn(
                  "bg-[var(--template-card)] rounded-xl shadow-2xl overflow-hidden animate-float",
                  isMobileView ? "w-[240px] h-[340px]" : "w-[280px] h-[400px]"
                )}>
                  <div className={cn(
                    "bg-[var(--template-muted)] border-b border-[var(--template-border)] flex items-center justify-between",
                    isMobileView ? "h-10 px-3" : "h-14 px-4"
                  )}>
                    <div className={cn(
                      isMobileView ? "text-xs" : "text-sm"
                    )}>Calculator</div>
                    <div className="flex space-x-1.5 sm:space-x-2">
                      <div className={cn(
                        "rounded-full bg-red-400",
                        isMobileView ? "w-2 h-2" : "w-2.5 h-2.5"
                      )}></div>
                      <div className={cn(
                        "rounded-full bg-yellow-400",
                        isMobileView ? "w-2 h-2" : "w-2.5 h-2.5"
                      )}></div>
                      <div className={cn(
                        "rounded-full bg-green-400",
                        isMobileView ? "w-2 h-2" : "w-2.5 h-2.5"
                      )}></div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className={cn(
                      "text-right font-light mb-4 font-mono text-[var(--template-foreground)]",
                      isMobileView ? "text-2xl" : "text-3xl"
                    )}>
                      1,234.56
                    </div>
                    <div className={cn(
                      "grid grid-cols-4",
                      isMobileView ? "gap-1.5" : "gap-2"
                    )}>
                      {["C", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((key, index) => (
                        <div
                          key={index}
                          className={cn(
                            "rounded-lg flex items-center justify-center",
                            isMobileView ? "h-8 text-base" : "h-12 text-lg",
                            ["C", "±", "%", "÷", "×", "-", "+", "="].includes(key) 
                              ? "bg-[var(--template-primary)] text-[var(--template-primary-foreground)]" 
                              : "bg-[var(--template-muted)] text-[var(--template-muted-foreground)]"
                          )}
                        >
                          {key}
                        </div>
                      ))}
                    </div>
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