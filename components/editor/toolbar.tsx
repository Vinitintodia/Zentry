"use client"

import React from "react"
import { Undo, Redo, Minus, Plus, MousePointer, Type, Square, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useEditor } from "@/contexts/editor-context"

export function EditorToolbar() {
  const { zoom, setZoom } = useEditor()
  
  return (
    <div className="flex h-12 items-center border-b px-4">
      <div className="flex items-center gap-1 mr-4">
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
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => setZoom(Math.max(25, zoom - 25))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1">
          <span className="text-xs w-9 text-center">{zoom}%</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => setZoom(Math.min(200, zoom + 25))}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
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
  )
} 