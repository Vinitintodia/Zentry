"use client"

import React from "react"
import { ModernLandingTemplate } from "@/components/templates/modern-landing"
import { CreativePortfolioTemplate } from "@/components/templates/creative-portfolio"
import { BusinessWebsiteTemplate } from "@/components/templates/business-website"
import { useEditor } from "@/contexts/editor-context"

export function CanvasArea() {
  const { templateId, zoom, properties, setActiveElement } = useEditor()
  
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
    <div className="flex-1 overflow-auto editor-canvas p-4">
      <div 
        className="min-h-full p-8 editor-canvas-content"
        style={{ 
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'center top'
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  )
} 