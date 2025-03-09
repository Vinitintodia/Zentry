"use client"

import React from "react"
import { EditorProvider } from "@/contexts/editor-context"
import { EditorHeader } from "@/components/editor/header"
import { EditorToolbar } from "@/components/editor/toolbar"
import { LayersPanel } from "@/components/editor/layers-panel"
import { PropertiesPanel } from "@/components/editor/properties-panel"
import { CanvasArea } from "@/components/editor/canvas"
import { ExportModal } from "@/components/editor/export-modal"
import { cn } from "@/lib/utils"
import { useEditor } from "@/contexts/editor-context"

interface EditorProps {
  params: {
    templateId: string
  }
}

interface EditorContentProps {
  templateId: string;
}

function EditorContent({ templateId }: EditorContentProps) {
  const { viewMode, deviceView } = useEditor()
  const isPreviewMode = viewMode === "preview"

  const getDeviceStyles = () => {
    switch (deviceView) {
      case "mobile":
        return "w-[390px] h-[844px] mx-auto rounded-2xl shadow-2xl border border-border/50 bg-background";
      case "tablet":
        return "w-[820px] h-[1180px] mx-auto rounded-2xl shadow-2xl border border-border/50 bg-background";
      default:
        return "w-full min-h-[calc(100vh-3.5rem)] rounded-lg shadow-lg border border-border/50 bg-background";
    }
  }

  const getDeviceWrapperStyles = () => {
    switch (deviceView) {
      case "mobile":
        return "h-[844px] overflow-y-auto hide-scrollbar";
      case "tablet":
        return "h-[1180px] overflow-y-auto hide-scrollbar";
      default:
        return "min-h-full overflow-y-auto";
    }
  }

  const getDeviceViewport = () => {
    switch (deviceView) {
      case "mobile":
        return { width: '390px', initialScale: '1.0' };
      case "tablet":
        return { width: '820px', initialScale: '1.0' };
      default:
        return { width: 'device-width', initialScale: '1.0' };
    }
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {isPreviewMode && deviceView !== "desktop" && (
        <meta name="viewport" content={`width=${getDeviceViewport().width}, initial-scale=${getDeviceViewport().initialScale}`} />
      )}
      
      {/* Header - Always visible */}
      <div className="flex-none border-b bg-background">
        <EditorHeader title={getTemplateTitle(templateId)} />
      </div>
      
      {/* Toolbar - Only in edit mode */}
      {!isPreviewMode && (
        <div className="flex-none border-b">
          <EditorToolbar />
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar panels - Only in edit mode */}
        {!isPreviewMode && <LayersPanel />}
        
        {/* Preview/Edit Area */}
        <div className={cn(
          "flex-1",
          isPreviewMode ? "bg-muted p-6 overflow-y-auto" : "overflow-y-auto"
        )}>
          {/* Device Container */}
          <div className={cn(
            "transition-all duration-300",
            isPreviewMode ? "flex items-start justify-center" : ""
          )}>
            <div className={cn(
              "transition-all duration-300",
              getDeviceStyles(),
              "overflow-hidden"
            )}>
              <div className="w-full h-full overflow-y-auto hide-scrollbar">
                <CanvasArea />
              </div>
            </div>
          </div>
        </div>
        
        {/* Properties panel - Only in edit mode */}
        {!isPreviewMode && <PropertiesPanel />}
      </div>
      
      <ExportModal />
    </div>
  )
}

const getTemplateTitle = (id: string) => {
  switch (id) {
    case "modern-landing-page":
      return "Modern Landing Page"
    case "creative-portfolio":
      return "Creative Portfolio"
    case "business-website":
      return "Business Website"
    default:
      return "Template Editor"
  }
}

export default function EditorPage({ params }: EditorProps) {
  const templateId = params.templateId;
  
  return (
    <EditorProvider initialTemplateId={templateId}>
      <EditorContent templateId={templateId} />
    </EditorProvider>
  )
}