"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextType {
  font: string
  setFont: (font: string) => void
  colors: string[]
  setColors: (colors: string[]) => void
  updateTheme: (font: string, colors: string[]) => void
}

const ThemeContext = createContext<ThemeContextType>({
  font: "var(--template-font-system)",
  setFont: () => {},
  colors: [],
  setColors: () => {},
  updateTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState("var(--template-font-system)")
  const [colors, setColors] = useState<string[]>([])

  // Add useEffect to initialize font
  useEffect(() => {
    // Set initial font CSS variable
    document.documentElement.style.setProperty('--template-font-primary', font);
  }, [])

  const updateTheme = (newFont: string, newColors: string[]) => {
    setFont(newFont)
    setColors(newColors)
    
    // Update CSS variables for templates only
    document.documentElement.style.setProperty("--template-font-primary", newFont)
    
    // Update template theme colors
    if (newColors.length >= 3) {
      document.documentElement.style.setProperty("--template-primary", newColors[0])
      document.documentElement.style.setProperty("--template-primary-hover", newColors[1])
      document.documentElement.style.setProperty("--template-primary-active", newColors[2])
    }
  }

  return (
    <ThemeContext.Provider value={{ font, setFont, colors, setColors, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 