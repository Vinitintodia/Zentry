"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useEditor } from "@/contexts/editor-context"

export function ExportModal() {
  const { templateId, showExportCode, setShowExportCode } = useEditor()
  
  if (!showExportCode) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-lg bg-background p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Export Code</h2>
          <Button variant="ghost" size="sm" onClick={() => setShowExportCode(false)}>
            &times;
          </Button>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted-foreground">Run the following command to install the template:</p>
          <div className="relative">
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>npx create-next-app my-website --example https://github.com/yourusername/website-builder-templates/tree/main/templates/{templateId}</code>
            </pre>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setShowExportCode(false)}>
            Cancel
          </Button>
          <Button>
            Download Files
          </Button>
        </div>
      </div>
    </div>
  )
} 