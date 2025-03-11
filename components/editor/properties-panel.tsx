"use client"

import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEditor } from "@/contexts/editor-context"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"

// Add this near the top of the file, after imports
interface NavItem {
  label: string;
  href: string;
}

export function PropertiesPanel() {
  const { activeElement, activeTab, setActiveTab, properties, updateProperty } = useEditor()
  const { updateTheme } = useTheme()
  
  // Font options based on the image
  const fontOptions = [
    { 
      name: "System Default", 
      value: "var(--template-font-system)",
      previewClass: "template-font-system" 
    },
    { 
      name: "Syne & Inter", 
      value: "var(--template-font-syne)",
      previewClass: "template-font-syne"
    },
    { 
      name: "Roboto", 
      value: "var(--template-font-roboto)",
      previewClass: "template-font-roboto"
    },
    { 
      name: "Montserrat", 
      value: "var(--template-font-montserrat)",
      previewClass: "template-font-montserrat"
    }
  ]

  // Theme color palettes based on the image
  const themeOptions = [
    {
      name: "Hot Indigo",
      colors: [
        ["#4ADE80", "#22C55E", "#16A34A"],
        ["#818CF8", "#6366F1", "#4F46E5"],
        ["#FB7185", "#E11D48", "#BE123C"]
      ]
    },
    {
      name: "Cool Gray",
      colors: [
        ["#F87171", "#DC2626", "#991B1B"],
        ["#60A5FA", "#2563EB", "#1D4ED8"],
        ["#D1D5DB", "#9CA3AF", "#6B7280"]
      ]
    },
    {
      name: "Warm Earth",
      colors: [
        ["#FCD34D", "#F59E0B", "#D97706"],
        ["#F472B6", "#EC4899", "#DB2777"],
        ["#A8A29E", "#78716C", "#57534E"]
      ]
    }
  ]

  const handleFontChange = (font: string) => {
    // Update the CSS variable for templates only
    document.documentElement.style.setProperty('--template-font-primary', font);
    
    // Update the theme context and properties
    updateTheme(font, properties.colors || []);
    updateProperty("fontFamily", font);
  }

  const handleColorChange = (colors: string[]) => {
    // Update theme context and properties
    updateTheme(properties.fontFamily || "var(--template-font-system)", colors);
    updateProperty("colors", colors);
  }
  
  // Render color picker control
  const renderColorPicker = (property: string, label: string, value: string) => (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="flex items-center gap-3">
        <div className="relative h-8 w-8 overflow-hidden rounded-md border border-input">
          <div 
            className="absolute inset-0" 
            style={{backgroundColor: value}}
          />
          <input 
            type="color" 
            value={value}
            onChange={(e) => updateProperty(property, e.target.value)}
            className="absolute inset-0 opacity-0"
          />
        </div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  )
  
  // Render size input
  const renderSizeInput = (property: string, label: string, value: string, unit: string = "rem") => {
    const numValue = parseFloat(value.replace(unit, ""))
    
    return (
      <div>
        <label className="mb-2 block text-sm font-medium">{label}</label>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={numValue}
            onChange={(e) => updateProperty(property, `${e.target.value}${unit}`)}
            className="w-20"
          />
          <span>{unit}</span>
        </div>
      </div>
    )
  }
  
  // Render text input
  const renderTextInput = (property: string, label: string, value: string) => (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <Input 
        value={value} 
        onChange={(e) => updateProperty(property, e.target.value)}
      />
    </div>
  )
  
  // Render text area
  const renderTextArea = (property: string, label: string, value: string, rows: number = 3) => (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <textarea 
        value={value} 
        onChange={(e) => updateProperty(property, e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        rows={rows}
      />
    </div>
  )
  
  // Render alignment buttons
  const renderAlignmentButtons = (property: string, value: string) => (
    <div>
      <label className="mb-2 block text-sm font-medium">Text Alignment</label>
      <div className="flex gap-2">
        <Button 
          variant={value === "left" ? "default" : "outline"} 
          size="sm"
          onClick={() => updateProperty(property, "left")}
          className="flex-1 h-8"
        >
          Left
        </Button>
        <Button 
          variant={value === "center" ? "default" : "outline"} 
          size="sm"
          onClick={() => updateProperty(property, "center")}
          className="flex-1 h-8"
        >
          Center
        </Button>
        <Button 
          variant={value === "right" ? "default" : "outline"} 
          size="sm"
          onClick={() => updateProperty(property, "right")}
          className="flex-1 h-8"
        >
          Right
        </Button>
      </div>
    </div>
  )
  
  // ----------------------- DESIGN TAB -----------------------
  // Design properties should include layout and structural settings
  const renderDesignProperties = () => {
    switch (activeElement) {
      case "businessHeroTitle":
        return (
          <div className="space-y-4">
            {renderSizeInput("businessHeroTitleSize", "Font Size", properties.businessHeroTitleSize)}
            {renderColorPicker("businessHeroBgColor", "Section Background", properties.businessHeroBgColor)}
          </div>
        );
        
      case "businessHeroSubtitle":
        return (
          <div className="space-y-4">
            {renderSizeInput("businessHeroSubtitleSize", "Font Size", properties.businessHeroSubtitleSize)}
            {renderColorPicker("businessHeroBgColor", "Section Background", properties.businessHeroBgColor)}
          </div>
        );
        
      case "businessCtaButton":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessCtaBgColor", "Button Background", properties.businessCtaBgColor)}
            {renderSizeInput("businessCtaBorderRadius", "Border Radius", properties.businessCtaBorderRadius, "rem")}
          </div>
        );
        
      case "businessAboutTitle":
        return (
          <div className="space-y-4">
            {renderSizeInput("businessAboutTitleSize", "Font Size", properties.businessAboutTitleSize)}
          </div>
        );
        
      case "businessAboutText":
        return (
          <div className="space-y-4">
            {renderSizeInput("businessAboutTextSize", "Font Size", properties.businessAboutTextSize)}
          </div>
        );
        
      case "businessAboutSection":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-2">About Section</h3>
            {renderColorPicker("businessAboutBgColor", "Background Color", properties.businessAboutBgColor || "#ffffff")}
            {renderSizeInput("businessAboutPadding", "Section Padding", properties.businessAboutPadding || "6rem", "rem")}
          </div>
        );
        
      case "businessServiceTitle":
        return (
          <div className="space-y-4">
            {renderSizeInput("businessServiceTitleSize", "Font Size", properties.businessServiceTitleSize)}
          </div>
        );
        
      case "businessServicesSection":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-2">Services Section</h3>
            {renderColorPicker("businessServiceBgColor", "Background Color", properties.businessServiceBgColor)}
            {renderSizeInput("businessServicesPadding", "Section Padding", properties.businessServicesPadding || "6rem", "rem")}
          </div>
        );
        
      case "businessService1":
      case "businessService2":
      case "businessService3":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-2">Service Card</h3>
            {renderColorPicker("businessServiceCardBgColor", "Card Background", properties.businessServiceCardBgColor || "#ffffff")}
            {renderSizeInput("businessServiceCardPadding", "Card Padding", properties.businessServiceCardPadding || "2rem", "rem")}
          </div>
        );
        
      case "businessCtaSection":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-2">CTA Section</h3>
            {renderColorPicker("businessCtaSectionBgColor", "Background Color", properties.businessCtaSectionBgColor || "#2563eb")}
            {renderSizeInput("businessCtaSectionPadding", "Section Padding", properties.businessCtaSectionPadding || "4rem", "rem")}
          </div>
        );
        
      case "businessFooterSection":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-2">Footer</h3>
            {renderColorPicker("businessFooterBgColor", "Background Color", properties.businessFooterBgColor || "#1a1a1a")}
            {renderSizeInput("businessFooterPadding", "Section Padding", properties.businessFooterPadding || "3rem", "rem")}
          </div>
        );
        
      case "businessNavbar":
        return (
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Position</label>
              <div className="flex gap-2">
                <Button 
                  variant={properties.navbarSticky ? "default" : "outline"} 
                  size="sm"
                  onClick={() => {
                    updateProperty("navbarSticky", true);
                    document.querySelector('header')?.classList.add('sticky');
                  }}
                  className="flex-1"
                >
                  Sticky
                </Button>
                <Button 
                  variant={!properties.navbarSticky ? "default" : "outline"} 
                  size="sm"
                  onClick={() => {
                    updateProperty("navbarSticky", false);
                    document.querySelector('header')?.classList.remove('sticky');
                  }}
                  className="flex-1"
                >
                  Static
                </Button>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Background Color</label>
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-md border border-input">
                  <div 
                    className="absolute inset-0" 
                    style={{backgroundColor: properties.navbarBgColor || 'transparent'}}
                  />
                  <input 
                    type="color" 
                    value={properties.navbarBgColor || '#ffffff'}
                    onChange={(e) => updateProperty("navbarBgColor", e.target.value)}
                    className="absolute inset-0 opacity-0"
                  />
                </div>
                <div className="text-sm">{properties.navbarBgColor || 'transparent'}</div>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Text Color</label>
              <Select
                value={properties.navbarTextColor || "inherit"}
                onValueChange={(value) => updateProperty("navbarTextColor", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inherit">Inherit</SelectItem>
                  <SelectItem value="var(--foreground)">Default</SelectItem>
                  <SelectItem value="var(--muted-foreground)">Muted</SelectItem>
                  <SelectItem value="var(--primary)">Primary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Font Size</label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={parseFloat(properties.navbarFontSize?.replace('rem', '') || '0.875')}
                  onChange={(e) => updateProperty("navbarFontSize", `${e.target.value}rem`)}
                  className="w-20"
                  step="0.125"
                />
                <span>rem</span>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Font Family</label>
              <Select
                value={properties.navbarFontFamily || "inherit"}
                onValueChange={(value) => updateProperty("navbarFontFamily", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inherit">System Default</SelectItem>
                  <SelectItem value="var(--font-sans)">Sans Serif</SelectItem>
                  <SelectItem value="var(--font-mono)">Monospace</SelectItem>
                  <SelectItem value="var(--font-serif)">Serif</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Font Weight</label>
              <Select
                value={properties.navbarFontWeight || "500"}
                onValueChange={(value) => updateProperty("navbarFontWeight", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="400">Regular</SelectItem>
                  <SelectItem value="500">Medium</SelectItem>
                  <SelectItem value="600">Semibold</SelectItem>
                  <SelectItem value="700">Bold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
        
      case "businessNavbarLogo":
        return (
          <div className="space-y-4">
            {renderTextInput("logoText", "Logo Text", properties.logoText || "VoiceCalc")}
            {renderTextInput("logoInitials", "Logo Initials", properties.logoInitials || "VC")}
            {renderColorPicker("navbarLogoBgColor", "Logo Background", properties.navbarLogoBgColor || "var(--primary)")}
            {renderColorPicker("navbarLogoColor", "Logo Color", properties.navbarLogoColor || "inherit")}
            {renderSizeInput("navbarLogoSize", "Logo Size", properties.navbarLogoSize || "1.125rem")}
            {renderSizeInput("navbarLogoRadius", "Logo Radius", properties.navbarLogoRadius || "0.5rem")}
          </div>
        );
        
      case "businessNavbarCTA":
      case "businessNavbarMobileCTA":
        return (
          <div className="space-y-4">
            {renderTextInput("navbarCTAText", "Button Text", properties.navbarCTAText || "Download")}
            {renderColorPicker("navbarButtonBgColor", "Button Background", properties.navbarButtonBgColor || "var(--primary)")}
            {renderColorPicker("navbarButtonTextColor", "Button Text Color", properties.navbarButtonTextColor || "var(--primary-foreground)")}
            <div>
              <label className="mb-2 block text-sm font-medium">Border Radius</label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={parseFloat(properties.navbarButtonRadius?.replace('rem', '') || '0.5')}
                  onChange={(e) => updateProperty("navbarButtonRadius", `${e.target.value}rem`)}
                  className="w-20"
                  step="0.125"
                />
                <span>rem</span>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Button Style</label>
              <Select
                value={properties.navbarButtonVariant || "default"}
                onValueChange={(value) => updateProperty("navbarButtonVariant", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
        
      case "businessNavbar":
        return (
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Navigation Items</label>
              {(properties.navItems || []).map((item: NavItem, index: number) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={item.label}
                    onChange={(e) => {
                      const newItems = [...(properties.navItems || [])];
                      newItems[index] = { ...item, label: e.target.value };
                      updateProperty("navItems", newItems);
                    }}
                    placeholder="Label"
                    className="flex-1"
                  />
                  <Select
                    value={item.href}
                    onValueChange={(value) => {
                      const newItems = [...(properties.navItems || [])];
                      newItems[index] = { ...item, href: value };
                      updateProperty("navItems", newItems);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="#features">Features</SelectItem>
                      <SelectItem value="#demo">Demo</SelectItem>
                      <SelectItem value="#download">Download</SelectItem>
                      <SelectItem value="#about">About</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newItems = [...(properties.navItems || [])];
                      newItems.splice(index, 1);
                      updateProperty("navItems", newItems);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newItems = [...(properties.navItems || []), { label: "New Item", href: "#features" }];
                  updateProperty("navItems", newItems);
                }}
                className="w-full mt-2"
              >
                Add Navigation Item
              </Button>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="flex h-40 items-center justify-center text-center text-sm text-muted-foreground">
            <p>Select an element to edit its design properties</p>
          </div>
        );
    }
  }
  
  // ----------------------- CONTENT TAB -----------------------
  // Content properties should include text and content settings
  const renderContentProperties = () => {
    switch (activeElement) {
      // Hero Section
      case "businessHeroTagline":
        return renderTextInput("businessHeroTagline", "Tagline", properties.businessHeroTagline || "Introducing VoiceCalc for macOS");
      
      case "businessHeroTitle":
        return renderTextArea("businessHeroTitle", "Title", properties.businessHeroTitle || "The Smart Calculator That Listens and Adapts", 4);
      
      case "businessHeroSubtitle":
        return renderTextArea("businessHeroSubtitle", "Subtitle", properties.businessHeroSubtitle || "Perform calculations effortlessly with voice commands. The intelligent interface appears when you need it and elegantly fades away when you don't.", 4);
      
      case "businessHeroPrimaryButton":
        return renderTextInput("businessHeroPrimaryButtonText", "Button Text", properties.businessHeroPrimaryButtonText || "Download Beta");
      
      case "businessHeroSecondaryButton":
        return renderTextInput("businessHeroSecondaryButtonText", "Button Text", properties.businessHeroSecondaryButtonText || "Watch Demo");

      // Features Section
      case "businessFeaturesTagline":
        return renderTextInput("businessFeaturesTagline", "Tagline", properties.businessFeaturesTagline || "Features");
      
      case "businessFeaturesTitle":
        return renderTextArea("businessFeaturesTitle", "Title", properties.businessFeaturesTitle || "Smart Functionality Designed for Effortless Use", 4);
      
      case "businessFeaturesSubtitle":
        return renderTextArea("businessFeaturesSubtitle", "Subtitle", properties.businessFeaturesSubtitle || "Every feature is thoughtfully designed to help you perform calculations with minimal effort and maximum efficiency.", 4);
      
      case "businessFeature0":
      case "businessFeature1":
      case "businessFeature2":
      case "businessFeature3":
      case "businessFeature4":
      case "businessFeature5":
        const featureIndex = parseInt(activeElement.replace("businessFeature", ""));
        return (
          <div className="space-y-4">
            {renderTextInput(
              `businessFeature${featureIndex}Title`,
              "Feature Title",
              properties[`businessFeature${featureIndex}Title`] || ""
            )}
            {renderTextArea(
              `businessFeature${featureIndex}Description`,
              "Feature Description",
              properties[`businessFeature${featureIndex}Description`] || "",
              3
            )}
          </div>
        );

      // Navbar
      case "businessNavbarLogo":
        return (
          <div className="space-y-4">
            {renderTextInput("businessNavbarLogoText", "Logo Text", properties.businessNavbarLogoText || "VoiceCalc")}
            {renderTextInput("businessNavbarLogoInitials", "Logo Initials", properties.businessNavbarLogoInitials || "VC")}
          </div>
        );
      
      case "businessNavbarSignIn":
        return renderTextInput("businessNavbarSignInText", "Sign In Text", properties.businessNavbarSignInText || "Sign In");
      
      case "businessNavbarCTA":
        return renderTextInput("businessNavbarCTAText", "CTA Text", properties.businessNavbarCTAText || "Download");
      
      // Demo
      case "businessDemoTagline":
        return renderTextInput("businessDemoTagline", "Tagline", properties.businessDemoTagline || "Experience VoiceCalc");
      
      case "businessDemoTitle":
        return renderTextArea("businessDemoTitle", "Title", properties.businessDemoTitle || "Intuitive Design for Every Calculation Need", 2);
      
      case "businessDemoSubtitle":
        return renderTextArea("businessDemoSubtitle", "Subtitle", properties.businessDemoSubtitle || "Switch between different calculator modes and see how the interface adapts to your needs.", 3);
      
      case "businessDemoSectionTitle":
        return renderTextInput("businessDemoSectionTitle", "Section Title", properties.businessDemoSectionTitle || "Demo Title");
      
      case "businessDemoSectionDescription":
        return renderTextArea("businessDemoSectionDescription", "Section Description", properties.businessDemoSectionDescription || "This is a demo description", 3);
      
      // Download
      case "businessDownloadTagline":
        return renderTextInput("businessDownloadTagline", "Tagline", properties.businessDownloadTagline || "Download");
      
      case "businessDownloadTitle":
        return renderTextArea("businessDownloadTitle", "Title", properties.businessDownloadTitle || "Download Title", 2);
      
      case "businessDownloadSubtitle":
        return renderTextArea("businessDownloadSubtitle", "Subtitle", properties.businessDownloadSubtitle || "Download Subtitle", 3);
      
      case "businessDownloadMacButton":
        return renderTextInput("businessDownloadMacButtonText", "Mac Button Text", properties.businessDownloadMacButtonText || "Download for Mac");
      
      case "businessDownloadWindowsButton":
        return renderTextInput("businessDownloadWindowsButtonText", "Windows Button Text", properties.businessDownloadWindowsButtonText || "Download for Windows");
      
      // Footer
      case "businessFooterLogo":
        return (
          <div className="space-y-4">
            {renderTextInput("businessFooterLogoText", "Logo Text", properties.businessFooterLogoText || "VoiceCalc")}
            {renderTextInput("businessFooterLogoInitials", "Logo Initials", properties.businessFooterLogoInitials || "VC")}
          </div>
        );
      
      case "businessFooterDescription":
        return renderTextArea("businessFooterDescription", "Description", properties.businessFooterDescription || "The smart calculator that listens and adapts", 3);
      
      case "businessFooterCopyright":
        return renderTextInput("businessFooterCopyrightText", "Copyright Text", properties.businessFooterCopyrightText || "VoiceCalc");
      
      // Dynamic elements
      default:
        // Handle navbar links
        if (activeElement?.startsWith("businessNavbarLink")) {
          const index = parseInt(activeElement.replace("businessNavbarLink", ""));
          return renderTextInput(`businessNavbarLink${index}Text`, "Link Text", properties[`businessNavbarLink${index}Text`] || "Link");
        }
        
        // Handle demo features
        if (activeElement?.startsWith("businessDemoFeature")) {
          const index = parseInt(activeElement.replace("businessDemoFeature", ""));
          return (
            <div className="space-y-4">
              {renderTextInput(`businessDemoFeature${index}Title`, "Feature Title", properties[`businessDemoFeature${index}Title`] || `Feature ${index + 1}`)}
              {renderTextArea(`businessDemoFeature${index}Description`, "Feature Description", properties[`businessDemoFeature${index}Description`] || `Description of Feature ${index + 1}`, 3)}
            </div>
          );
        }
        
        // Handle download features
        if (activeElement?.startsWith("businessDownloadFeature")) {
          const index = parseInt(activeElement.replace("businessDownloadFeature", ""));
          return (
            <div className="space-y-4">
              {renderTextInput(`businessDownloadFeature${index}Title`, "Feature Title", properties[`businessDownloadFeature${index}Title`] || `Feature ${index + 1}`)}
              {renderTextArea(`businessDownloadFeature${index}Description`, "Feature Description", properties[`businessDownloadFeature${index}Description`] || `Description of Feature ${index + 1}`, 3)}
            </div>
          );
        }
        
        // Handle footer section titles
        if (activeElement?.startsWith("businessFooterSection") && activeElement.endsWith("Title")) {
          const index = parseInt(activeElement.replace("businessFooterSection", "").replace("Title", ""));
          return renderTextInput(`businessFooterSection${index}Title`, "Section Title", properties[`businessFooterSection${index}Title`] || "Section Title");
        }
        
        // Handle footer section links
        if (activeElement?.startsWith("businessFooterSection") && activeElement.includes("Link")) {
          const matches = activeElement.match(/businessFooterSection(\d+)Link(\d+)/);
          if (matches) {
            const [_, sectionIndex, linkIndex] = matches;
            return renderTextInput(`businessFooterSection${sectionIndex}Link${linkIndex}Text`, "Link Text", properties[`businessFooterSection${sectionIndex}Link${linkIndex}Text`] || "Link");
          }
        }
        
        // Handle footer legal links
        if (activeElement?.startsWith("businessFooterLegalLink")) {
          const index = parseInt(activeElement.replace("businessFooterLegalLink", ""));
          return renderTextInput(`businessFooterLegalLink${index}Text`, "Link Text", properties[`businessFooterLegalLink${index}Text`] || "Legal Link");
        }
        
        return null;
    }
  }
  
  // ----------------------- STYLES TAB -----------------------
  // Style properties should include colors, typography, and visual effects
  const renderStyleProperties = () => {
    switch (activeElement) {
      case "businessHeroTitle":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessHeroTitleColor", "Text Color", properties.businessHeroTitleColor)}
            {renderAlignmentButtons("businessHeroTitleAlign", properties.businessHeroTitleAlign)}
            <div>
              <label className="mb-2 block text-sm font-medium">Font Weight</label>
              <div className="flex gap-2">
                <Button 
                  variant={properties.businessHeroTitleWeight === "400" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => updateProperty("businessHeroTitleWeight", "400")}
                  className="flex-1 h-8"
                >
                  Regular
                </Button>
                <Button 
                  variant={properties.businessHeroTitleWeight === "700" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => updateProperty("businessHeroTitleWeight", "700")}
                  className="flex-1 h-8"
                >
                  Bold
                </Button>
              </div>
            </div>
          </div>
        );
        
      case "businessHeroSubtitle":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessHeroSubtitleColor", "Text Color", properties.businessHeroSubtitleColor)}
            {renderAlignmentButtons("businessHeroSubtitleAlign", properties.businessHeroSubtitleAlign)}
          </div>
        );
        
      case "businessCtaButton":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessCtaTextColor", "Text Color", properties.businessCtaTextColor)}
          </div>
        );
        
      case "businessAboutTitle":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessAboutTitleColor", "Text Color", properties.businessAboutTitleColor)}
            {renderAlignmentButtons("businessAboutTitleAlign", properties.businessAboutTitleAlign || "center")}
          </div>
        );
        
      case "businessAboutText":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessAboutTextColor", "Text Color", properties.businessAboutTextColor)}
          </div>
        );
        
      case "businessServiceTitle":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessServiceTitleColor", "Text Color", properties.businessServiceTitleColor)}
            {renderAlignmentButtons("businessServiceTitleAlign", properties.businessServiceTitleAlign || "center")}
          </div>
        );
        
      case "businessService1":
      case "businessService2":
      case "businessService3":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessServiceIconColor", "Icon Color", properties.businessServiceIconColor || "#2563eb")}
            {renderColorPicker("businessServiceTitleColor", "Title Color", properties.businessServiceTitleColor || "#1a1a1a")}
            {renderColorPicker("businessServiceTextColor", "Text Color", properties.businessServiceTextColor || "#4a4a4a")}
          </div>
        );
        
      case "businessCtaTitle":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessCtaTitleColor", "Text Color", properties.businessCtaTitleColor || "#ffffff")}
            {renderAlignmentButtons("businessCtaTitleAlign", properties.businessCtaTitleAlign || "center")}
          </div>
        );
        
      case "businessCtaText":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessCtaTextColor", "Text Color", properties.businessCtaTextColor || "#e2e2e2")}
          </div>
        );
        
      case "businessCtaButton2":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessCtaButtonBgColor", "Button Background", properties.businessCtaButtonBgColor || "#ffffff")}
            {renderColorPicker("businessCtaButtonTextColor", "Button Text", properties.businessCtaButtonTextColor || "#2563eb")}
          </div>
        );
        
      case "businessFooterSection":
        return (
          <div className="space-y-4">
            {renderColorPicker("businessFooterTextColor", "Text Color", properties.businessFooterTextColor || "#d1d5db")}
            {renderColorPicker("businessFooterHeadingColor", "Heading Color", properties.businessFooterHeadingColor || "#ffffff")}
          </div>
        );
        
      default:
        return (
          <div className="flex h-40 items-center justify-center text-center text-sm text-muted-foreground">
            <p>Select an element to edit its styles</p>
          </div>
        );
    }
  }

  return (
    <div className="w-72 border-l bg-background">
      <div className="flex h-12 items-center border-b px-4">
        <h2 className="text-sm font-medium">Customize</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-3rem)]">
        <div className="p-6">
          {/* Element-specific settings */}
          {activeElement && (
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="themes">Themes</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-0">
                {renderContentProperties()}
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                {renderDesignProperties()}
              </TabsContent>

              <TabsContent value="themes" className="mt-0">
                {/* Fonts Section */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-4">Fonts</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {fontOptions.map((font, index) => (
                      <button
                        key={index}
                        className={cn(
                          "flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors",
                          properties.fontFamily === font.value && "border-primary",
                          font.previewClass
                        )}
                        onClick={() => handleFontChange(font.value)}
                      >
                        <div className="text-2xl mb-2">Aa</div>
                        <div className="text-xs text-muted-foreground">{font.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Colors Section */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Theme Colors</h3>
                  <div className="space-y-3">
                    {themeOptions.map((theme, themeIndex) => (
                      <div key={themeIndex} className="space-y-2">
                        <div className="text-xs text-muted-foreground">{theme.name}</div>
                        <div className="grid grid-cols-3 gap-2">
                          {theme.colors.map((colorSet, colorIndex) => (
                            <button
                              key={`${themeIndex}-${colorIndex}`}
                              className={cn(
                                "h-8 rounded-md overflow-hidden hover:ring-2 ring-offset-2 ring-offset-background transition-all",
                                JSON.stringify(properties.colors) === JSON.stringify(colorSet) 
                                  ? "ring-2 ring-primary" 
                                  : "hover:ring-primary"
                              )}
                              onClick={() => handleColorChange(colorSet)}
                            >
                              <div className="flex flex-col h-full">
                                {colorSet.map((color, i) => (
                                  <div
                                    key={i}
                                    className="flex-1"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}

          {/* Show global settings when no element is selected */}
          {!activeElement && (
            <>
              {/* Fonts Section */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-4">Fonts</h3>
                <div className="grid grid-cols-2 gap-3">
                  {fontOptions.map((font, index) => (
                    <button
                      key={index}
                      className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors",
                        properties.fontFamily === font.value && "border-primary",
                        font.previewClass
                      )}
                      onClick={() => handleFontChange(font.value)}
                    >
                      <div className="text-2xl mb-2">Aa</div>
                      <div className="text-xs text-muted-foreground">{font.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Themes Section */}
              <div>
                <h3 className="text-sm font-medium mb-4">Theme Colors</h3>
                <div className="space-y-3">
                  {themeOptions.map((theme, themeIndex) => (
                    <div key={themeIndex} className="space-y-2">
                      <div className="text-xs text-muted-foreground">{theme.name}</div>
                      <div className="grid grid-cols-3 gap-2">
                        {theme.colors.map((colorSet, colorIndex) => (
                          <button
                            key={`${themeIndex}-${colorIndex}`}
                            className={cn(
                              "h-8 rounded-md overflow-hidden hover:ring-2 ring-offset-2 ring-offset-background transition-all",
                              JSON.stringify(properties.colors) === JSON.stringify(colorSet) 
                                ? "ring-2 ring-primary" 
                                : "hover:ring-primary"
                            )}
                            onClick={() => handleColorChange(colorSet)}
                          >
                            <div className="flex flex-col h-full">
                              {colorSet.map((color, i) => (
                                <div
                                  key={i}
                                  className="flex-1"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  )
} 