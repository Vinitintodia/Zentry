"use client"

import React from "react"
import { Undo, Redo, Minus, Plus, MousePointer, Type, Square, Palette, Eye, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useEditor } from "@/contexts/editor-context"
import { ThemeToggle } from "@/components/theme-toggle"

export function EditorToolbar() {
  const { activeTab, setActiveTab, viewMode, setViewMode } = useEditor()
  
  return (
    <div className="flex h-12 items-center justify-between border-b px-4">
      {/* Left side controls */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MousePointer className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Type className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Square className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Palette className="h-4 w-4" />
        </Button>
      </div>
      
      <Separator orientation="vertical" className="h-6 mx-2" />
      
      {/* Right side controls */}
      <div className="flex items-center gap-2">
        {/* Add ThemeToggle button here, before the preview button */}
        <ThemeToggle />
        
        {/* Existing preview button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-1.5"
          onClick={() => setViewMode(viewMode === "design" ? "preview" : "design")}
        >
          {viewMode === "design" ? (
            <>
              <Eye className="h-4 w-4" />
              Preview
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4" />
              Edit
            </>
          )}
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-2" />
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}