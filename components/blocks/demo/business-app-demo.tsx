import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, BarChart3 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";

interface VoiceCommand {
  command: string;
  result: string;
}

interface BusinessAppDemoProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  voiceCommands?: VoiceCommand[];
  theme?: string;
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
  ],
  theme = "light"
}: BusinessAppDemoProps) {
  const [activeCommand, setActiveCommand] = useState(0);
  const isDark = theme === 'dark';

  // Change active command every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % voiceCommands.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [voiceCommands.length]);
  
  return (
    <section id="demo" className={cn(
      "py-20 relative overflow-hidden",
      isDark ? "bg-gray-800/30" : "bg-brand-gray-light/30"
    )}>
      <div className={cn(
        "absolute top-0 left-0 w-full h-20 bg-gradient-to-b to-transparent",
        isDark ? "from-gray-900" : "from-white"
      )}></div>
      <div className={cn(
        "absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t to-transparent",
        isDark ? "from-gray-900" : "from-white"
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
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="basic" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className={cn(
                "grid w-full max-w-md grid-cols-3",
                isDark ? "bg-gray-800" : ""
              )}>
                <TabsTrigger 
                  value="basic" 
                  className={cn(
                    "flex items-center gap-2",
                    isDark ? "data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white" : ""
                  )}
                >
                  <Calculator className="h-4 w-4" />
                  <span>Basic</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="scientific"
                  className={cn(
                    "flex items-center gap-2",
                    isDark ? "data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white" : ""
                  )}
                >
                  <Calculator className="h-4 w-4" />
                  <span>Scientific</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="financial"
                  className={cn(
                    "flex items-center gap-2",
                    isDark ? "data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white" : ""
                  )}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Financial</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Continue with the TabsContent sections with dark mode support */}
            {/* ... */}
          </Tabs>
        </div>
      </div>
    </section>
  );
}