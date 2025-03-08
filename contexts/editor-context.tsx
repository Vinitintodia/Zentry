"use client"

import React, { createContext, useContext, useState } from "react"

type EditorContextType = {
  templateId: string;
  zoom: number;
  setZoom: (zoom: number) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  activeElement: string | null;
  setActiveElement: (element: string | null) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  viewMode: string;
  setViewMode: (mode: string) => void;
  properties: Record<string, any>;
  updateProperty: (property: string, value: any) => void;
  showExportCode: boolean;
  setShowExportCode: (show: boolean) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined)

export function EditorProvider({ children, initialTemplateId }: { children: React.ReactNode; initialTemplateId: string }) {
  const [templateId] = useState(initialTemplateId)
  const [zoom, setZoom] = useState(75)
  const [activeSection, setActiveSection] = useState<string>("1. Hero Section")
  const [activeElement, setActiveElement] = useState<string | null>("businessHeroTitle")
  const [showExportCode, setShowExportCode] = useState(false)
  const [activeTab, setActiveTab] = useState("design")
  const [viewMode, setViewMode] = useState("design")
  
  // Business website properties with all sections
  const [properties, setProperties] = useState({
    // Common properties
    backgroundColor: "#f5f5f5",
    
    // Business specific properties
    businessName: "Acme Inc.",
    businessTagline: "Leading solutions for modern businesses",
    
    // Hero Section
    businessHeroTitle: "Transform Your Business with Our Solutions",
    businessHeroTitleColor: "#1a1a1a",
    businessHeroTitleSize: "3.5rem",
    businessHeroTitleWeight: "700",
    businessHeroTitleAlign: "center",
    
    businessHeroSubtitle: "We help businesses streamline processes, increase efficiency, and drive growth with our innovative products and services.",
    businessHeroSubtitleColor: "#4a4a4a",
    businessHeroSubtitleSize: "1.25rem",
    businessHeroSubtitleAlign: "center",
    
    businessHeroBgColor: "#f5f5f5",
    
    businessCtaText: "Get Started",
    businessCtaBgColor: "#2563eb",
    businessCtaTextColor: "#ffffff",
    businessCtaBorderRadius: "0.375rem",
    
    // About Section
    businessAboutTitle: "About Us",
    businessAboutTitleColor: "#1a1a1a",
    businessAboutTitleSize: "2.5rem",
    businessAboutTitleAlign: "center",
    businessAboutBgColor: "#ffffff",
    
    businessAboutText: "With over 10 years of experience, we've helped hundreds of businesses achieve their goals. Our team of experts brings knowledge and innovation to every project.",
    businessAboutTextColor: "#4a4a4a",
    businessAboutTextSize: "1.125rem",
    
    businessAboutStat1: "10+ Years Experience",
    businessAboutStat2: "100+ Successful Projects",
    businessAboutStat3: "95% Client Satisfaction",
    
    // Services Section
    businessServiceTitle: "Our Services",
    businessServiceTitleColor: "#1a1a1a",
    businessServiceTitleSize: "2.5rem",
    businessServiceBgColor: "#f9fafb",
    businessServiceTitleAlign: "center",
    
    businessService1Title: "Strategy Consulting",
    businessService1Description: "Expert advice to guide your business decisions",
    businessService1Icon: "Globe",
    
    businessService2Title: "Implementation",
    businessService2Description: "Hands-on support to execute your strategy",
    businessService2Icon: "Users",
    
    businessService3Title: "Analytics",
    businessService3Description: "Data-driven insights to optimize performance",
    businessService3Icon: "BarChart4",
    
    businessServiceIconColor: "#2563eb",
    businessServiceTextColor: "#4a4a4a",
    
    // CTA Section
    businessCtaTitle: "Ready to Transform Your Business?",
    businessCtaTitleColor: "#ffffff",
    businessCtaTitleSize: "2.5rem",
    businessCtaTitleAlign: "center",
    businessCtaBgColor: "#2563eb",
    
    businessCtaText: "Get in touch with our team to learn how we can help you achieve your business goals.",
    businessCtaTextColor: "#e2e2e2",
    businessCtaTextSize: "1.25rem",
    
    businessCtaButtonText: "Contact Us Today",
    businessCtaButtonBgColor: "#ffffff",
    businessCtaButtonTextColor: "#2563eb",
    
    // Footer Section
    businessFooterBgColor: "#1a1a1a",
    businessFooterTextColor: "#d1d5db",
    businessFooterHeadingColor: "#ffffff",
    
    businessEmail: "info@acmeinc.com",
    businessPhone: "+1 (555) 123-4567",
    businessAddress: "123 Business St, City, State",
    businessCopyright: "",
    businessServiceExtra: "Custom Solutions"
  })

  // Update a property and its value
  const updateProperty = (property: string, value: any) => {
    setProperties(prev => ({
      ...prev,
      [property]: value
    }))
  }

  return (
    <EditorContext.Provider
      value={{
        templateId,
        zoom,
        setZoom,
        activeSection,
        setActiveSection,
        activeElement,
        setActiveElement,
        activeTab,
        setActiveTab,
        viewMode,
        setViewMode,
        properties,
        updateProperty,
        showExportCode,
        setShowExportCode
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export const useEditor = () => {
  const context = useContext(EditorContext)
  if (context === undefined) {
    throw new Error("useEditor must be used within an EditorProvider")
  }
  return context
} 