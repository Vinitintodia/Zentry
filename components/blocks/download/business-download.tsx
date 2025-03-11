import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Apple, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditor } from "@/contexts/editor-context";

interface BusinessDownloadProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  platformText?: string;
  platformDescription?: string;
  macButtonText?: string;
  windowsButtonText?: string;
  termsText?: string;
  setActiveElement?: (element: string) => void;
  activeElement?: string;
}

export function BusinessDownload({
  title = "Download VoiceCalc",
  subtitle = "Available for macOS and Windows. Download now and transform how you work with numbers.",
  tagline = "Download Now",
  platformText = "Get Started with VoiceCalc",
  platformDescription = "Download for your preferred platform",
  macButtonText = "Download for Mac",
  windowsButtonText = "Download for Windows",
  termsText = "By downloading, you agree to our Terms of Service",
  setActiveElement,
  activeElement
}: BusinessDownloadProps) {
  const { deviceView, properties } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  return (
    <section className={cn(
      "template-container relative overflow-hidden bg-[var(--template-muted)]",
      isMobileView ? "py-12" : isTabletView ? "py-16" : "py-20"
    )}>
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div 
            className={cn(
              "inline-block",
              activeElement === "businessDownloadTagline" ? "ring-2 ring-[var(--template-primary)] rounded-full" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessDownloadTagline");
            }}
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[var(--template-primary)]/10 text-[var(--template-primary)]">
              {properties.businessDownloadTagline || tagline}
            </span>
          </div>
          
          <h2 
            className={cn(
              "font-bold tracking-tight text-balance leading-[1.1] text-[var(--template-foreground)]",
              isMobileView ? "text-2xl" : isTabletView ? "text-3xl" : "text-4xl",
              activeElement === "businessDownloadTitle" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessDownloadTitle");
            }}
          >
            {properties.businessDownloadTitle || title}
          </h2>
          
          <p 
            className={cn(
              "mx-auto text-balance text-[var(--template-muted-foreground)]",
              isMobileView ? "text-sm" : "text-lg",
              activeElement === "businessDownloadSubtitle" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessDownloadSubtitle");
            }}
          >
            {properties.businessDownloadSubtitle || subtitle}
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg bg-background">
            <div className="text-center md:text-left space-y-2 flex-1">
              <h3 
                className={cn(
                  "text-xl font-semibold text-[var(--template-foreground)]",
                  activeElement === "businessDownloadPlatformText" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.("businessDownloadPlatformText");
                }}
              >
                {properties.businessDownloadPlatformText || platformText}
              </h3>
              <p 
                className={cn(
                  "text-sm text-[var(--template-muted-foreground)]",
                  activeElement === "businessDownloadPlatformDescription" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.("businessDownloadPlatformDescription");
                }}
              >
                {properties.businessDownloadPlatformDescription || platformDescription}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className={cn(
                  "rounded-full min-w-[160px]",
                  activeElement === "businessDownloadMacButton" ? "ring-2 ring-[var(--template-primary)]" : ""
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.("businessDownloadMacButton");
                }}
              >
                <Apple className="mr-2 h-4 w-4" />
                {properties.businessDownloadMacButton || macButtonText}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className={cn(
                  "rounded-full min-w-[160px]",
                  activeElement === "businessDownloadWindowsButton" ? "ring-2 ring-[var(--template-primary)]" : ""
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.("businessDownloadWindowsButton");
                }}
              >
                <Monitor className="mr-2 h-4 w-4" />
                {properties.businessDownloadWindowsButton || windowsButtonText}
              </Button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p 
              className={cn(
                "text-sm text-[var(--template-muted-foreground)]",
                activeElement === "businessDownloadTerms" ? "ring-2 ring-[var(--template-primary)] rounded-lg p-2" : ""
              )}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessDownloadTerms");
              }}
            >
              {properties.businessDownloadTerms || termsText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
