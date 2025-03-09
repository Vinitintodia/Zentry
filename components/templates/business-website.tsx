import React, { useEffect, useState } from 'react';
import { BusinessNavbar } from "@/components/blocks/navbar/business-navbar";
import { BusinessHero } from "@/components/blocks/hero/business-hero";
import { BusinessFeatures } from "@/components/blocks/features/business-features";
import { BusinessAppDemo } from "@/components/blocks/demo/business-app-demo";
import { BusinessDownload } from "@/components/blocks/download/business-download";
import { BusinessFooter } from "@/components/blocks/footer/business-footer";
import { toast } from "@/hooks/use-toast";

interface TemplateProps {
  properties: Record<string, any>;
  setActiveElement: (element: string | null) => void;
}

export function BusinessWebsiteTemplate({ properties, setActiveElement }: TemplateProps) {
  // Extract properties for each component
  const navbarProps = properties.navbar || {};
  const heroProps = properties.hero || {};
  const featuresProps = properties.features || {};
  const demoProps = properties.demo || {};
  const downloadProps = properties.download || {};
  const footerProps = properties.footer || {};
  
  // Handle download toast notification
  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Thank you for downloading VoiceCalc Beta!",
    });
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="sticky top-0 left-0 right-0 z-50">
        <BusinessNavbar {...navbarProps} />
      </div>
      <main>
        <BusinessHero {...heroProps} />
        <BusinessFeatures {...featuresProps} />
        <BusinessAppDemo {...demoProps} />
        <BusinessDownload {...downloadProps} onDownload={handleDownload} />
      </main>
      <BusinessFooter {...footerProps} />
    </div>
  );
}