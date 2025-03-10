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
  font: "var(--font-system)",
  setFont: () => {},
  colors: [],
  setColors: () => {},
  updateTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState("var(--font-system)")
  const [colors, setColors] = useState<string[]>([])

  // Add useEffect to initialize font
  useEffect(() => {
    // Set initial font CSS variable
    document.documentElement.style.setProperty('--font-primary', font);
  }, [])

  const updateTheme = (newFont: string, newColors: string[]) => {
    setFont(newFont)
    setColors(newColors)
    
    // Update CSS variables
    document.documentElement.style.setProperty("--font-primary", newFont)
    
    // Update theme colors
    if (newColors.length >= 3) {
      document.documentElement.style.setProperty("--primary", newColors[0])
      document.documentElement.style.setProperty("--primary-hover", newColors[1])
      document.documentElement.style.setProperty("--primary-active", newColors[2])
    }
  }

  return (
    <ThemeContext.Provider value={{ font, setFont, colors, setColors, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 