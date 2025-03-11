import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, BarChart3, Mic, Command, ArrowRight, Keyboard, Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";
import Image from "next/image";

interface VoiceCommand {
  command: string;
  result: string;
}

interface DemoFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BusinessAppDemoProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  voiceCommands?: VoiceCommand[];
  demoTitle?: string;
  demoDescription?: string;
  demoFeatures?: DemoFeature[];
  demoImage?: string;
  setActiveElement?: (element: string) => void;
  activeElement?: string;
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
  demoTitle = "Voice Commands",
  demoDescription = "Natural language processing for effortless calculations",
  demoFeatures = [
    { icon: <Mic className="h-4 w-4" />, title: "Voice Recognition", description: "Speak naturally to perform calculations" },
    { icon: <Command className="h-4 w-4" />, title: "Smart Commands", description: "Context-aware command processing" },
    { icon: <Calculator className="h-4 w-4" />, title: "Multiple Modes", description: "Basic, Scientific, and Financial modes" }
  ],
  demoImage = "/a1.webp",
  setActiveElement,
  activeElement
}: BusinessAppDemoProps) {
  const [activeCommand, setActiveCommand] = useState(0);
  const [activeTab, setActiveTab] = useState("voice");
  const { theme } = useTheme();
  const { deviceView, properties } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";

  // Get demo properties with defaults
  const {
    businessDemoTagline = tagline,
    businessDemoTitle = title,
    businessDemoSubtitle = subtitle,
    businessDemoSectionTitle = demoTitle,
    businessDemoSectionDescription = demoDescription,
    businessDemoFeatures = demoFeatures,
    businessDemoCommands = voiceCommands
  } = properties;

  // Change active command every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % (businessDemoCommands || voiceCommands).length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [(businessDemoCommands || voiceCommands).length]);
  
  return (
    <section className={cn(
      "template-container relative overflow-hidden",
      isMobileView ? "py-12" : isTabletView ? "py-16" : "py-20"
    )}>
      {/* Background elements */}
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-3xl animate-pulse-subtle bg-[var(--template-primary)]/10",
        isMobileView ? "w-64 h-64" : isTabletView ? "w-96 h-96" : "w-[600px] h-[600px]"
      )}></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <div 
            className="inline-block"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessDemoTagline");
            }}
          >
            <span className={cn(
              "inline-flex items-center rounded-full font-medium border border-[var(--template-primary)]/20 bg-[var(--template-primary)]/10 text-[var(--template-primary)]",
              isMobileView ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm",
              activeElement === "businessDemoTagline" && "ring-2 ring-[var(--template-primary)]"
            )}>
              {businessDemoTagline}
            </span>
          </div>
          
          <h2 
            className={cn(
              "font-bold tracking-tight text-balance leading-[1.1] text-[var(--template-foreground)]",
              isMobileView ? "text-2xl" : isTabletView ? "text-3xl" : "text-4xl",
              activeElement === "businessDemoTitle" && "ring-2 ring-[var(--template-primary)]"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessDemoTitle");
            }}
          >
            {businessDemoTitle}
          </h2>
          
          <p 
            className={cn(
              "mx-auto text-balance text-[var(--template-muted-foreground)]",
              isMobileView ? "text-sm max-w-[90%]" : isTabletView ? "text-base max-w-2xl" : "text-lg max-w-2xl",
              activeElement === "businessDemoSubtitle" && "ring-2 ring-[var(--template-primary)]"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessDemoSubtitle");
            }}
          >
            {businessDemoSubtitle}
          </p>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="voice" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="voice" className="text-sm sm:text-base">
                <Mic className="mr-2 h-4 w-4" />
                Voice Input
              </TabsTrigger>
              <TabsTrigger value="keyboard" className="text-sm sm:text-base">
                <Keyboard className="mr-2 h-4 w-4" />
                Keyboard
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-sm sm:text-base">
                <Brain className="mr-2 h-4 w-4" />
                AI Assistant
              </TabsTrigger>
            </TabsList>

            <div className="grid gap-8 items-start lg:grid-cols-5">
              {/* Left Panel - Features */}
              <Card className="p-6 space-y-6 lg:col-span-2">
                <div className="space-y-2">
                  <h3 
                    className={cn(
                      "font-semibold text-[var(--template-foreground)]",
                      isMobileView ? "text-xl" : "text-2xl",
                      activeElement === "businessDemoSectionTitle" && "ring-2 ring-[var(--template-primary)]"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveElement?.("businessDemoSectionTitle");
                    }}
                  >
                    {businessDemoSectionTitle}
                  </h3>
                  <p 
                    className={cn(
                      "text-[var(--template-muted-foreground)]",
                      isMobileView ? "text-sm" : "text-base",
                      activeElement === "businessDemoSectionDescription" && "ring-2 ring-[var(--template-primary)]"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveElement?.("businessDemoSectionDescription");
                    }}
                  >
                    {businessDemoSectionDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  {(businessDemoFeatures || demoFeatures).map((feature: DemoFeature, index: number) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-[var(--template-primary)]/5",
                        activeElement === `businessDemoFeature${index}` && "ring-2 ring-[var(--template-primary)]"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveElement?.(`businessDemoFeature${index}`);
                      }}
                    >
                      <div className={cn(
                        "rounded-lg bg-[var(--template-primary)]/10 flex items-center justify-center text-[var(--template-primary)]",
                        "w-10 h-10"
                      )}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-[var(--template-foreground)]">
                          {properties[`businessDemoFeature${index}Title`] || feature.title}
                        </h4>
                        <p className="text-sm text-[var(--template-muted-foreground)]">
                          {properties[`businessDemoFeature${index}Description`] || feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Right Panel - Interactive Demo */}
              <div className="lg:col-span-3">
                <TabsContent value="voice" className="m-0">
                  <GlassCard intensity="high" className="overflow-hidden">
                    <div className="p-6 bg-[var(--template-card)] border-b border-[var(--template-border)]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="animate-pulse w-2 h-2 rounded-full bg-red-500"></div>
                          <span className="text-sm text-[var(--template-muted-foreground)]">Listening...</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-[var(--template-primary)]"></div>
                          <div className="w-2 h-2 rounded-full bg-[var(--template-primary)] opacity-75"></div>
                          <div className="w-2 h-2 rounded-full bg-[var(--template-primary)] opacity-50"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[var(--template-muted-foreground)]">
                          <Mic className="h-4 w-4" />
                          <span className="text-sm">You said:</span>
                        </div>
                        <AnimatedText
                          text={(businessDemoCommands || voiceCommands)[activeCommand].command}
                          className="text-lg text-[var(--template-foreground)] font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[var(--template-muted-foreground)]">
                          <Calculator className="h-4 w-4" />
                          <span className="text-sm">Result:</span>
                        </div>
                        <AnimatedText
                          text={(businessDemoCommands || voiceCommands)[activeCommand].result}
                          className="text-3xl text-[var(--template-primary)] font-bold"
                        />
                      </div>
                    </div>
                  </GlassCard>
                </TabsContent>

                <TabsContent value="keyboard" className="m-0">
                  <GlassCard intensity="high" className="overflow-hidden">
                    <div className="p-6 bg-[var(--template-card)] border-b border-[var(--template-border)]">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--template-muted-foreground)]">Calculator</span>
                        <div className="flex space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="text-right mb-4">
                        <div className="text-4xl font-light font-mono text-[var(--template-foreground)]">
                          1,234.56
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {["C", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((key, index) => (
                          <div
                            key={index}
                            className={cn(
                              "rounded-lg flex items-center justify-center h-12 text-lg transition-colors",
                              ["C", "±", "%", "÷", "×", "-", "+", "="].includes(key) 
                                ? "bg-[var(--template-primary)] text-[var(--template-primary-foreground)]" 
                                : "bg-[var(--template-muted)] text-[var(--template-muted-foreground)] hover:bg-[var(--template-muted)]/80"
                            )}
                          >
                            {key}
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </TabsContent>

                <TabsContent value="ai" className="m-0">
                  <GlassCard intensity="high" className="overflow-hidden">
                    <div className="p-6 bg-[var(--template-card)] border-b border-[var(--template-border)]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-[var(--template-primary)]" />
                          <span className="text-sm text-[var(--template-muted-foreground)]">AI Assistant</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[var(--template-primary)]/10 flex items-center justify-center">
                          <Brain className="h-4 w-4 text-[var(--template-primary)]" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-[var(--template-muted-foreground)]">How can I help you with calculations today?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[var(--template-muted)] flex items-center justify-center">
                          <Command className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm">I need to calculate the compound interest on $1000 over 5 years at 5% annual rate.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[var(--template-primary)]/10 flex items-center justify-center">
                          <Brain className="h-4 w-4 text-[var(--template-primary)]" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-[var(--template-muted-foreground)]">The compound interest would be $276.28, making the total amount $1,276.28 after 5 years.</p>
                          <div className="text-2xl font-bold text-[var(--template-primary)]">$1,276.28</div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}