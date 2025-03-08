"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { SparklesIcon } from "lucide-react"

interface TemplateProps {
  properties: Record<string, any>;
  setActiveElement: (element: string | null) => void;
}

export function ModernLandingTemplate({ properties, setActiveElement }: TemplateProps) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Hero Section */}
      <section 
        style={{ backgroundColor: properties.heroBgColor }}
        className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center"
      >
        <h1 
          style={{ 
            fontSize: properties.heroTitleSize, 
            color: properties.heroTitleColor
          }}
          className="mb-6 max-w-4xl font-bold tracking-tight"
          onClick={() => setActiveElement("title")}
        >
          {properties.heroTitle}
        </h1>
        <p 
          style={{ 
            fontSize: properties.heroSubtitleSize, 
            color: properties.heroSubtitleColor 
          }}
          className="mb-10 max-w-2xl"
          onClick={() => setActiveElement("subtitle")}
        >
          {properties.heroSubtitle}
        </p>
        <Button 
          style={{ 
            backgroundColor: properties.heroButtonBgColor,
            color: properties.heroButtonTextColor
          }}
          className="rounded-full px-8 py-6 text-lg font-medium"
          onClick={() => setActiveElement("button")}
        >
          {properties.heroButtonText}
        </Button>
      </section>

      {/* Features Section */}
      <section
        style={{ backgroundColor: properties.featuresBgColor }}
        className="px-6 py-24"
      >
        <h2 
          style={{ 
            fontSize: properties.featuresTitleSize, 
            color: properties.featuresTitleColor 
          }}
          className="mb-16 text-center font-bold tracking-tight"
          onClick={() => setActiveElement("featuresTitle")}
        >
          {properties.featuresTitle}
        </h2>
        
        <div className={`${properties.featuresLayout === "grid" ? "grid grid-cols-1 gap-12 md:grid-cols-3" : "space-y-12"}`}>
          {/* Feature 1 */}
          <div 
            className={`flex ${properties.featuresLayout === "list" ? "items-start" : "flex-col items-center text-center"}`}
            onClick={() => setActiveElement("feature1")}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <div className={properties.featuresLayout === "list" ? "ml-4" : ""}>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {properties.feature1Title}
              </h3>
              <p className="text-gray-400">
                {properties.feature1Description}
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div 
            className={`flex ${properties.featuresLayout === "list" ? "items-start" : "flex-col items-center text-center"}`}
            onClick={() => setActiveElement("feature2")}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <div className={properties.featuresLayout === "list" ? "ml-4" : ""}>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {properties.feature2Title}
              </h3>
              <p className="text-gray-400">
                {properties.feature2Description}
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div 
            className={`flex ${properties.featuresLayout === "list" ? "items-start" : "flex-col items-center text-center"}`}
            onClick={() => setActiveElement("feature3")}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <div className={properties.featuresLayout === "list" ? "ml-4" : ""}>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {properties.feature3Title}
              </h3>
              <p className="text-gray-400">
                {properties.feature3Description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 