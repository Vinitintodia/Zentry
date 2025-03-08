"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useEditor } from "@/contexts/editor-context"

// Get structure of template elements based on template ID
const getTemplateStructure = (templateId: string) => {
  if (templateId === "business-website") {
    return {
      "1. Hero Section": {
        elements: ["businessName", "businessHeroTitle", "businessHeroSubtitle", "businessCtaButton"]
      },
      "2. About Section": {
        elements: ["businessAboutTitle", "businessAboutText", "businessAboutStat1", "businessAboutStat2", "businessAboutStat3"]
      },
      "3. Services Section": {
        elements: ["businessServiceTitle", "businessService1", "businessService2", "businessService3"]
      },
      "4. CTA Section": {
        elements: ["businessCtaTitle", "businessCtaText", "businessCtaButton2"]
      },
      "5. Footer Section": {
        elements: ["businessFooterCompany", "businessFooterContact", "businessFooterLinks1", "businessFooterLinks2"]
      }
    }
  }
  
  // Default for other templates
  return {
    "1. Hero Section": {
      elements: ["title", "subtitle", "button"]
    },
    "2. Features Section": {
      elements: ["featuresTitle", "feature1", "feature2", "feature3"]
    }
  }
}

export function LayersPanel() {
  const { templateId, activeSection, setActiveSection, activeElement, setActiveElement } = useEditor()
  const templateStructure = getTemplateStructure(templateId)
  
  // Format element name for display
  const formatElementName = (name: string) => {
    return name
      .replace(/^business/, '')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim()
  }
  
  return (
    <div className="w-[250px] border-r bg-background">
      <div className="flex h-10 items-center justify-between border-b px-4">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">Layers</Button>
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">Assets</Button>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="p-2">
          {Object.entries(templateStructure).map(([sectionName, section]) => (
            <div key={sectionName} className="mb-2">
              <div
                className={cn(
                  "mb-1 rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
                  activeSection === sectionName && "bg-accent text-accent-foreground"
                )}
                onClick={() => setActiveSection(sectionName)}
              >
                {sectionName}
              </div>
              {section.elements.map((element) => (
                <div
                  key={element}
                  className={cn(
                    "ml-3 cursor-pointer rounded-md px-3 py-1 text-sm",
                    activeElement === element && "bg-muted"
                  )}
                  onClick={() => {
                    setActiveSection(sectionName);
                    setActiveElement(element);
                  }}
                >
                  {formatElementName(element)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 