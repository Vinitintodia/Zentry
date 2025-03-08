"use client"

import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEditor } from "@/contexts/editor-context"

export function PropertiesPanel() {
  const { activeElement, activeTab, setActiveTab, properties, updateProperty } = useEditor()
  
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
        
      default:
        return (
          <div className="flex h-40 items-center justify-center text-center text-sm text-muted-foreground">
            <p>Select an element to edit its design properties</p>
          </div>
        );
    }
  }
  
  // ----------------------- CONTENT TAB -----------------------
  // Content properties should include text and media content
  const renderContentProperties = () => {
    switch (activeElement) {
      case "businessName":
        return renderTextInput("businessName", "Business Name", properties.businessName);
        
      case "businessHeroTitle":
        return renderTextArea("businessHeroTitle", "Headline", properties.businessHeroTitle, 4);
        
      case "businessHeroSubtitle":
        return renderTextArea("businessHeroSubtitle", "Subtitle", properties.businessHeroSubtitle, 4);
        
      case "businessCtaButton":
        return renderTextInput("businessCtaText", "Button Text", properties.businessCtaText);
        
      case "businessAboutTitle":
        return renderTextInput("businessAboutTitle", "Section Title", properties.businessAboutTitle);
        
      case "businessAboutText":
        return renderTextArea("businessAboutText", "Section Content", properties.businessAboutText, 5);
        
      case "businessAboutStat1":
        return renderTextInput("businessAboutStat1", "Statistic 1", properties.businessAboutStat1 || "10+ Years Experience");
        
      case "businessAboutStat2":
        return renderTextInput("businessAboutStat2", "Statistic 2", properties.businessAboutStat2 || "100+ Successful Projects");
        
      case "businessAboutStat3":
        return renderTextInput("businessAboutStat3", "Statistic 3", properties.businessAboutStat3 || "24/7 Customer Support");
        
      case "businessServiceTitle":
        return renderTextInput("businessServiceTitle", "Section Title", properties.businessServiceTitle);
        
      case "businessService1":
        return (
          <div className="space-y-4">
            {renderTextInput("businessService1Title", "Service Title", properties.businessService1Title)}
            {renderTextArea("businessService1Description", "Service Description", properties.businessService1Description, 3)}
          </div>
        );
        
      case "businessService2":
        return (
          <div className="space-y-4">
            {renderTextInput("businessService2Title", "Service Title", properties.businessService2Title)}
            {renderTextArea("businessService2Description", "Service Description", properties.businessService2Description, 3)}
          </div>
        );
        
      case "businessService3":
        return (
          <div className="space-y-4">
            {renderTextInput("businessService3Title", "Service Title", properties.businessService3Title)}
            {renderTextArea("businessService3Description", "Service Description", properties.businessService3Description, 3)}
          </div>
        );
        
      case "businessCtaTitle":
        return renderTextInput("businessCtaTitle", "CTA Title", properties.businessCtaTitle || "Ready to Transform Your Business?");
        
      case "businessCtaText":
        return renderTextArea("businessCtaText", "CTA Text", properties.businessCtaText || "Get in touch with our team to learn how we can help you achieve your business goals.", 3);
        
      case "businessCtaButton2":
        return renderTextInput("businessCtaButtonText", "Button Text", properties.businessCtaButtonText || "Contact Us Today");
        
      case "businessFooterCompany":
        return (
          <div className="space-y-4">
            {renderTextInput("businessTagline", "Business Tagline", properties.businessTagline)}
            {renderTextInput("businessCopyright", "Copyright Text", properties.businessCopyright || `© ${new Date().getFullYear()} ${properties.businessName}. All rights reserved.`)}
          </div>
        );
        
      case "businessFooterContact":
        return (
          <div className="space-y-4">
            {renderTextInput("businessEmail", "Email Address", properties.businessEmail || "info@acmeinc.com")}
            {renderTextInput("businessPhone", "Phone Number", properties.businessPhone || "+1 (555) 123-4567")}
            {renderTextInput("businessAddress", "Business Address", properties.businessAddress || "123 Business St, City, State")}
          </div>
        );
        
      default:
        return (
          <div className="flex h-40 items-center justify-center text-center text-sm text-muted-foreground">
            <p>Select an element to edit its content</p>
          </div>
        );
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
      <div className="flex h-12 items-center justify-between border-b px-4 py-2">
        <Tabs defaultValue="design" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="styles">Styles</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="p-6">
          {!activeElement && (
            <div className="text-sm text-muted-foreground mb-4">
              Click on a section to edit its properties.
            </div>
          )}
          <Tabs value={activeTab} className="w-full">
            <TabsContent value="design" className="mt-0">
              {renderDesignProperties()}
            </TabsContent>
            <TabsContent value="content" className="mt-0">
              {renderContentProperties()}
            </TabsContent>
            <TabsContent value="styles" className="mt-0">
              {renderStyleProperties()}
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  )
} 