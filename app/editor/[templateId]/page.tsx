"use client"

import React from "react"
import { EditorProvider } from "@/contexts/editor-context"
import { EditorHeader } from "@/components/editor/header"
import { EditorToolbar } from "@/components/editor/toolbar"
import { LayersPanel } from "@/components/editor/layers-panel"
import { PropertiesPanel } from "@/components/editor/properties-panel"
import { CanvasArea } from "@/components/editor/canvas"
import { ExportModal } from "@/components/editor/export-modal"

interface EditorProps {
  params: {
    templateId: string
  }
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
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const templateId = unwrappedParams.templateId;
  
  return (
    <EditorProvider initialTemplateId={templateId}>
      <div className="flex h-screen flex-col overflow-hidden bg-background dark:bg-gray-900 dark:text-white">
        <EditorHeader title={getTemplateTitle(templateId)} />
        <EditorToolbar />
        
        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          <LayersPanel />
          <CanvasArea />
          <PropertiesPanel />
        </div>
        
        <ExportModal />
      </div>
    </EditorProvider>
  )
}