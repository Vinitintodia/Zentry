"use client"

import React from "react"
import { ModernLandingTemplate } from "@/components/templates/modern-landing"
import { CreativePortfolioTemplate } from "@/components/templates/creative-portfolio"
import { BusinessWebsiteTemplate } from "@/components/templates/business-website"
import { useEditor } from "@/contexts/editor-context"
import { cn } from "@/lib/utils"

export function CanvasArea() {
  const { templateId, zoom, properties, setActiveElement, viewMode, deviceView } = useEditor()
  
  // Render the appropriate template
  const renderTemplate = () => {
    switch (templateId) {
      case "modern-landing-page":
        return <ModernLandingTemplate properties={properties} setActiveElement={setActiveElement} />;
      case "creative-portfolio":
        return <CreativePortfolioTemplate properties={properties} setActiveElement={setActiveElement} />;
      case "business-website":
      default:
        return <BusinessWebsiteTemplate properties={properties} setActiveElement={setActiveElement} />;
    }
  }
  
  return (
    <div className={cn(
      "editor-canvas w-full h-full",
      viewMode === "preview" ? "preview-mode" : "p-4"
    )}>
      <div 
        className={cn(
          "h-full",
          viewMode === "preview" ? "" : "editor-canvas-content"
        )}
        style={{ 
          transform: viewMode === "preview" ? undefined : `scale(${zoom / 100})`,
          transformOrigin: 'center top',
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  )
} 