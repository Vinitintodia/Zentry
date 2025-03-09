import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Apple, Globe, Github } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";

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
  }
}: BusinessDownloadProps) {
  const { theme } = useTheme();
  const { deviceView } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  return (
    <section id="download" className={cn(
      "relative overflow-hidden bg-background",
      isMobileView ? "py-12" : isTabletView ? "py-16" : "py-20"
    )}>
      {/* Background elements */}
      <div className={cn(
        "absolute top-20 rounded-full filter blur-3xl bg-primary/20",
        isMobileView ? "left-[5%] w-32 h-32" : isTabletView ? "left-[8%] w-48 h-48" : "left-[10%] w-64 h-64"
      )}></div>
      <div className={cn(
        "absolute bottom-20 rounded-full filter blur-3xl bg-primary/10",
        isMobileView ? "right-[5%] w-36 h-36" : isTabletView ? "right-[8%] w-56 h-56" : "right-[10%] w-72 h-72"
      )}></div>
      
      <div className="container mx-auto px-4">
        <div className={cn(
          "mx-auto",
          isMobileView ? "max-w-[90%]" : isTabletView ? "max-w-2xl" : "max-w-4xl"
        )}>
          <GlassCard intensity="medium" className={cn(
            isMobileView ? "p-6" : isTabletView ? "p-8" : "p-12"
          )}>
            <div className={cn(
              "text-center",
              isMobileView ? "mb-6" : isTabletView ? "mb-8" : "mb-10"
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
              {platforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center">
                  <GlassCard 
                    intensity={platform.primary ? "high" : "low"} 
                    className={cn(
                      "w-full text-center hover:shadow-lg transition-all duration-300",
                      platform.primary ? "border-primary/30" : "",
                      isMobileView ? "p-4" : "p-6"
                    )}
                  >
                    <div className={cn(
                      "mb-4 flex justify-center"
                    )}>
                      <div className={cn(
                        "rounded-full flex items-center justify-center",
                        platform.primary 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground",
                        isMobileView ? "w-12 h-12" : "w-16 h-16"
                      )}>
                        {React.cloneElement(platform.icon as React.ReactElement, {
                          className: cn(
                            isMobileView ? "h-4 w-4" : "h-5 w-5"
                          )
                        })}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold mb-2 text-foreground",
                      isMobileView ? "text-lg" : "text-xl"
                    )}>
                      {platform.name}
                    </h3>
                    <p className={cn(
                      "mb-4 text-muted-foreground",
                      isMobileView ? "text-xs" : "text-sm"
                    )}>
                      {version} • {platform.primary ? "Recommended" : "Compatible"}
                    </p>
                    <Button 
                      variant={platform.primary ? "default" : "outline"} 
                      className={cn(
                        "w-full",
                        platform.primary ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                      )}
                      onClick={onDownload}
                    >
                      <Download className={cn(
                        "mr-2",
                        isMobileView ? "h-3 w-3" : "h-4 w-4"
                      )} />
                      Download
                    </Button>
                  </GlassCard>
                </div>
              ))}
            </div>
            
            <div className={cn(
              "text-center mt-8",
              isMobileView ? "text-xs" : "text-sm"
            )}>
              <p className="text-muted-foreground">
                Version {version} released on {releaseDate}
              </p>
              <p className="mt-2 text-muted-foreground">
                By downloading, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}