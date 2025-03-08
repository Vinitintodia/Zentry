import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Apple, Globe, Github } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface BusinessDownloadProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  version?: string;
  releaseDate?: string;
  platforms?: Array<{
    name: string;
    icon: React.ReactNode;
    primary?: boolean;
  }>;
  onDownload?: () => void;
  theme?: string;
}

export function BusinessDownload({
  title = "Download VoiceCalc Beta",
  subtitle = "Try the future of calculation today. Available for macOS, Windows, and Linux.",
  tagline = "Get Started",
  version = "0.9.2",
  releaseDate = "June 15, 2023",
  platforms = [
    { name: "macOS", icon: <Apple className="h-5 w-5" />, primary: true },
    { name: "Windows", icon: <Globe className="h-5 w-5" /> },
    { name: "Linux", icon: <Github className="h-5 w-5" /> }
  ],
  onDownload = () => {
    toast({
      title: "Download Started",
      description: "Thank you for downloading VoiceCalc Beta!",
    });
  },
  theme = "light"
}: BusinessDownloadProps) {
  const isDark = theme === 'dark';
  
  return (
    <section id="download" className={cn(
      "py-20 relative overflow-hidden",
      isDark ? "bg-gray-900" : "bg-white"
    )}>
      {/* Background elements */}
      <div className={cn(
        "absolute top-20 left-[10%] w-64 h-64 rounded-full filter blur-3xl",
        isDark ? "bg-brand-blue/20" : "bg-brand-blue/10"
      )}></div>
      <div className={cn(
        "absolute bottom-20 right-[10%] w-72 h-72 rounded-full filter blur-3xl",
        isDark ? "bg-brand-purple-dark/20" : "bg-brand-purple-light/10"
      )}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard intensity="medium" className="p-8 md:p-12" theme={theme}>
            <div className="text-center mb-10">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center">
                  <GlassCard 
                    intensity={platform.primary ? "high" : "low"} 
                    className={cn(
                      "w-full p-6 text-center hover:shadow-lg transition-all duration-300",
                      platform.primary ? "border-brand-blue/30" : "",
                      isDark && !platform.primary ? "border-gray-700" : ""
                    )}
                    theme={theme}
                  >
                    <div className="mb-4 flex justify-center">
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center",
                        platform.primary 
                          ? "bg-brand-blue text-white" 
                          : isDark 
                            ? "bg-gray-800 text-gray-300" 
                            : "bg-brand-gray-light/60 text-brand-gray-dark"
                      )}>
                        {platform.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "text-xl font-semibold mb-2",
                      isDark ? "text-white" : ""
                    )}>
                      {platform.name}
                    </h3>
                    <p className={cn(
                      "text-sm mb-4",
                      isDark ? "text-gray-400" : "text-muted-foreground"
                    )}>
                      {version} • {platform.primary ? "Recommended" : "Compatible"}
                    </p>
                    <Button 
                      variant={platform.primary ? "default" : "outline"} 
                      className={cn(
                        "w-full",
                        platform.primary ? "bg-brand-blue hover:bg-brand-blue/90" : "",
                        isDark && !platform.primary ? "border-gray-700 text-gray-300 hover:bg-gray-800" : ""
                      )}
                      onClick={onDownload}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </GlassCard>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center text-sm">
              <p className={isDark ? "text-gray-400" : "text-muted-foreground"}>
                Version {version} released on {releaseDate}
              </p>
              <p className={cn("mt-2", isDark ? "text-gray-400" : "text-muted-foreground")}>
                By downloading, you agree to our{" "}
                <a href="#" className={cn(
                  "hover:underline",
                  isDark ? "text-brand-blue-light" : "text-brand-blue"
                )}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" className={cn(
                  "hover:underline",
                  isDark ? "text-brand-blue-light" : "text-brand-blue"
                )}>Privacy Policy</a>
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}