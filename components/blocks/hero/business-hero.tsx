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
}

export function BusinessHero({
  title = "The Smart Calculator That Listens and Adapts",
  subtitle = "Perform calculations effortlessly with voice commands. The intelligent interface appears when you need it and elegantly fades away when you don't.",
  tagline = "Introducing VoiceCalc for macOS",
  primaryButtonText = "Download Beta",
  secondaryButtonText = "Watch Demo",
  showCalculatorPreview = true,
}: BusinessHeroProps) {
  const { theme } = useTheme();
  const { deviceView } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden pt-16 flex items-center justify-center bg-background">
      {/* Background elements */}
      <div className={cn(
        "absolute top-20 right-[10%] rounded-full filter blur-3xl animate-pulse-subtle bg-primary/20",
        isMobileView ? "w-32 h-32" : isTabletView ? "w-48 h-48" : "w-64 h-64"
      )}></div>
      <div className={cn(
        "absolute bottom-20 left-[10%] rounded-full filter blur-3xl animate-pulse-subtle bg-primary/10",
        isMobileView ? "w-36 h-36" : isTabletView ? "w-56 h-56" : "w-72 h-72"
      )} style={{ animationDelay: '2s' }}></div>
      
      <div className="container px-4 md:px-6">
        <div className="space-y-4 w-full max-w-[800px] mx-auto text-center">
          <div className="inline-block animate-fade-in-up">
            <span className={cn(
              "inline-flex items-center rounded-full font-medium border border-primary/20 bg-primary/10 text-primary",
              isMobileView ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm"
            )}>
              {tagline}
            </span>
          </div>
          
          <h1 className={cn(
            "font-bold tracking-tight text-balance leading-[1.1] text-foreground animate-fade-in-up",
            isMobileView ? "text-3xl" : isTabletView ? "text-4xl" : "text-5xl lg:text-6xl"
          )}>
            {title}
          </h1>
          
          <p className={cn(
            "mx-auto text-balance text-muted-foreground animate-fade-in-up",
            isMobileView ? "text-base max-w-[90%]" : isTabletView ? "text-lg max-w-2xl" : "text-xl max-w-2xl"
          )} style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          
          <div className={cn(
            "flex items-center justify-center gap-3 pt-4 animate-fade-in-up",
            isMobileView ? "flex-col w-full" : "flex-row gap-4"
          )} style={{ animationDelay: '300ms' }}>
            <Button 
              size="lg" 
              className={cn(
                "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
                isMobileView ? "w-full px-6" : "px-8"
              )}
              onClick={(e) => scrollToSection(e, "download")}
            >
              {primaryButtonText}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={cn(
                "rounded-full group border-border",
                isMobileView ? "w-full px-4" : "px-6"
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
          <div className={cn(
            "mx-auto animate-fade-in-up animate-delay-500",
            isMobileView ? "mt-8 max-w-[calc(100vw-2rem)]" : isTabletView ? "mt-12 max-w-2xl" : "mt-16 max-w-3xl"
          )}>
            <GlassCard intensity="high" className={cn(
              "shadow-xl",
              isMobileView ? "p-3" : isTabletView ? "p-6" : "p-8"
            )}>
              <div className="aspect-[16/9] rounded-lg overflow-hidden relative flex items-center justify-center bg-muted">
                <div className={cn(
                  "bg-card rounded-xl shadow-2xl overflow-hidden animate-float",
                  isMobileView ? "w-[240px] h-[340px]" : "w-[280px] h-[400px]"
                )}>
                  <div className={cn(
                    "bg-muted border-b border-border flex items-center justify-between",
                    isMobileView ? "h-10 px-3" : "h-14 px-4"
                  )}>
                    <div className={cn(
                      "font-medium text-foreground",
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
                      "text-right font-light mb-4 font-mono text-foreground",
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
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {key}
                        </div>
                      ))}
                    </div>
                    
                    <div className={cn(
                      "bg-muted rounded-lg",
                      isMobileView ? "mt-4 p-2" : "mt-6 p-3"
                    )}>
                      <div className="flex items-center">
                        <div className={cn(
                          "rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs",
                          isMobileView ? "w-6 h-6" : "w-8 h-8"
                        )}>
                          🎤
                        </div>
                        <div className={cn(
                          "ml-2 text-muted-foreground",
                          isMobileView ? "text-[10px]" : "text-xs ml-3"
                        )}>
                          "Calculate twenty-five percent of five hundred"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={cn(
                  "absolute bottom-4 px-2 py-0.5 rounded-full backdrop-blur-sm bg-background/80 text-muted-foreground",
                  isMobileView ? "text-[10px]" : "text-xs px-3 py-1"
                )}>
                  Elegant interface that follows your cursor
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}