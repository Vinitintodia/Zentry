import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, BarChart3 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";

interface VoiceCommand {
  command: string;
  result: string;
}

interface BusinessAppDemoProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  voiceCommands?: VoiceCommand[];
}

export function BusinessAppDemo({
  title = "Intuitive Design for Every Calculation Need",
  subtitle = "Switch between different calculator modes and see how the interface adapts to your needs.",
  tagline = "Experience VoiceCalc",
  voiceCommands = [
    { command: "Add twenty plus fifteen", result: "35" },
    { command: "What is 15% of 200?", result: "30" },
    { command: "Calculate square root of 144", result: "12" },
    { command: "Convert 5 dollars to euros", result: "€4.58" }
  ]
}: BusinessAppDemoProps) {
  const [activeCommand, setActiveCommand] = useState(0);
  const { theme } = useTheme();
  const { deviceView } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";

  // Change active command every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % voiceCommands.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [voiceCommands.length]);
  
  return (
    <section id="demo" className={cn(
      "relative overflow-hidden bg-muted/50",
      isMobileView ? "py-8" : isTabletView ? "py-12" : "py-16"
    )}>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "text-center mx-auto",
          isMobileView ? "max-w-[90%] mb-6" : isTabletView ? "max-w-2xl mb-8" : "max-w-3xl mb-12"
        )}>
          <div className="inline-block mb-3">
            <span className={cn(
              "inline-flex items-center rounded-full font-medium border border-primary/20 bg-primary/10 text-primary",
              isMobileView ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm"
            )}>
              {tagline}
            </span>
          </div>
          
          <h2 className={cn(
            "font-bold tracking-tight text-balance mb-3 text-foreground animate-fade-in-up",
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
        
        <Tabs defaultValue="basic" className="w-full">
          <div className={cn(
            "flex justify-center",
            isMobileView ? "mb-4" : isTabletView ? "mb-6" : "mb-8"
          )}>
            <TabsList className={cn(
              "grid w-full grid-cols-3 gap-1",
              isMobileView ? "max-w-[280px]" : isTabletView ? "max-w-md" : "max-w-lg"
            )}>
              <TabsTrigger 
                value="basic" 
                className={cn(
                  "flex items-center gap-1",
                  isMobileView ? "px-2 py-1" : "px-4 py-2"
                )}
              >
                <Calculator className={cn(
                  isMobileView ? "h-3 w-3" : "h-4 w-4"
                )} />
                <span className={cn(
                  isMobileView ? "text-xs" : "text-sm"
                )}>Basic</span>
              </TabsTrigger>
              <TabsTrigger 
                value="scientific"
                className={cn(
                  "flex items-center gap-1",
                  isMobileView ? "px-2 py-1" : "px-4 py-2"
                )}
              >
                <Calculator className={cn(
                  isMobileView ? "h-3 w-3" : "h-4 w-4"
                )} />
                <span className={cn(
                  isMobileView ? "text-xs" : "text-sm"
                )}>Scientific</span>
              </TabsTrigger>
              <TabsTrigger 
                value="financial"
                className={cn(
                  "flex items-center gap-1",
                  isMobileView ? "px-2 py-1" : "px-4 py-2"
                )}
              >
                <BarChart3 className={cn(
                  isMobileView ? "h-3 w-3" : "h-4 w-4"
                )} />
                <span className={cn(
                  isMobileView ? "text-xs" : "text-sm"
                )}>Financial</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="basic">
            <GlassCard intensity="medium" className={cn(
              isMobileView ? "p-2" : isTabletView ? "p-4" : "p-6"
            )}>
              <div className="aspect-video rounded-lg bg-card overflow-hidden">
                <img 
                  src="/a1.webp" 
                  alt="Calculator" 
                  className="w-full h-full object-cover"
                />
              </div>
            </GlassCard>
          </TabsContent>
          
          <TabsContent value="scientific">
            <GlassCard intensity="medium" className={cn(
              isMobileView ? "p-2" : isTabletView ? "p-4" : "p-6"
            )}>
              <div className="aspect-video rounded-lg bg-card overflow-hidden">
                <img 
                  src="/a2.webp" 
                  alt="Calculator" 
                  className="w-full h-full object-cover"
                />
              </div>
            </GlassCard>
          </TabsContent>
          
          <TabsContent value="financial">
            <GlassCard intensity="medium" className={cn(
              isMobileView ? "p-2" : isTabletView ? "p-4" : "p-6"
            )}>
              <div className="aspect-video rounded-lg bg-card overflow-hidden">
                <img 
                  src="/a3.webp" 
                  alt="Calculator" 
                  className="w-full h-full object-cover"
                />
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}