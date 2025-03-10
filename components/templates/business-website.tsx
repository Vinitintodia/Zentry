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
      <BusinessNavbar 
        {...navbarProps} 
        setActiveElement={setActiveElement}
        logoText={properties.logoText}
        logoInitials={properties.logoInitials}
        navItems={properties.navItems}
      />
      <main>
        <BusinessHero {...heroProps} setActiveElement={setActiveElement} />
        <BusinessFeatures {...featuresProps} setActiveElement={setActiveElement} />
        <BusinessAppDemo {...demoProps} setActiveElement={setActiveElement} />
        <BusinessDownload {...downloadProps} onDownload={handleDownload} setActiveElement={setActiveElement} />
      </main>
      <BusinessFooter {...footerProps} setActiveElement={setActiveElement} />
    </div>
  );
}