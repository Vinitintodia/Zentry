"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEditor } from "@/contexts/editor-context"

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const { updateProperty } = useEditor()

  React.useEffect(() => {
    // Check if we're in the editor page by looking for the editor context
    const isEditorPage = typeof window !== 'undefined' && 
      document.querySelector('.flex.h-screen.flex-col.overflow-hidden.bg-background') !== null

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      
      // Update template properties if in editor
      if (isEditorPage) {
        // Update template-specific properties for dark mode
        updateProperty("backgroundColor", "#121212")
        updateProperty("businessHeroTitleColor", "#ffffff")
        updateProperty("businessHeroSubtitleColor", "#e0e0e0")
        updateProperty("businessHeroBgColor", "#1a1a1a")
        // Add more properties as needed for dark mode
      }
    } else {
      document.documentElement.classList.remove("dark")
      
      // Update template properties if in editor
      if (isEditorPage) {
        // Reset template-specific properties for light mode
        updateProperty("backgroundColor", "#f5f5f5")
        updateProperty("businessHeroTitleColor", "#1a1a1a")
        updateProperty("businessHeroSubtitleColor", "#4a4a4a")
        updateProperty("businessHeroBgColor", "#f5f5f5")
        // Reset more properties as needed for light mode
      }
    }
  }, [isDarkMode, updateProperty])

  return (
    <Button
      variant="outline"
      size="icon"
      className="aspect-square h-8 w-8"
      onClick={() => setIsDarkMode(!isDarkMode)}
      title="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}