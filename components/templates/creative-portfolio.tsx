"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Image as ImageIcon } from "lucide-react"

interface TemplateProps {
  properties: Record<string, any>;
  setActiveElement: (element: string | null) => void;
}

export function CreativePortfolioTemplate({ properties, setActiveElement }: TemplateProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col">
      {/* Hero Section */}
      <section 
        style={{ backgroundColor: properties.backgroundColor }}
        className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center"
      >
        <h1 
          style={{ 
            fontSize: properties.heroTitleSize, 
            color: properties.heroTitleColor,
            fontWeight: properties.heroTitleWeight || 700
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
          className="rounded-md px-8 py-6 text-lg font-medium"
          onClick={() => setActiveElement("button")}
        >
          {properties.heroButtonText}
        </Button>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-slate-800 px-6 py-24">
        <h2 
          style={{
            fontSize: properties.portfolioTitleSize || "2.5rem",
            color: properties.portfolioTitleColor || "#ffffff"
          }}
          className="mb-12 text-center font-bold"
          onClick={() => setActiveElement("portfolioTitle")}
        >
          {properties.portfolioTitle || "Recent Work"}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Portfolio Item 1 */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-slate-700 flex items-center justify-center">
              <ImageIcon className="h-16 w-16 text-slate-600" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="mb-1 text-xl font-semibold text-white">
                Project One
              </h3>
              <span className="mb-4 text-sm text-blue-400">
                Web Design
              </span>
              <p className="mb-6 text-center text-gray-300">
                A modern website with clean aesthetics
              </p>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Portfolio Item 2 */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-slate-700 flex items-center justify-center">
              <ImageIcon className="h-16 w-16 text-slate-600" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="mb-1 text-xl font-semibold text-white">
                Project Two
              </h3>
              <span className="mb-4 text-sm text-blue-400">
                Branding
              </span>
              <p className="mb-6 text-center text-gray-300">
                Comprehensive brand identity for a tech startup
              </p>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Portfolio Item 3 */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-slate-700 flex items-center justify-center">
              <ImageIcon className="h-16 w-16 text-slate-600" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="mb-1 text-xl font-semibold text-white">
                Project Three
              </h3>
              <span className="mb-4 text-sm text-blue-400">
                UI/UX
              </span>
              <p className="mb-6 text-center text-gray-300">
                Mobile app interface with intuitive navigation
              </p>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-slate-950 px-6 py-24 text-center">
        <h2 
          style={{
            fontSize: properties.contactTitleSize || "2.5rem",
            color: properties.contactTitleColor || "#ffffff"
          }}
          className="mb-6 font-bold tracking-tight"
        >
          {properties.contactTitle || "Let's Work Together"}
        </h2>
        <p 
          style={{
            color: properties.contactTextColor || "#e2e2e2"
          }}
          className="mx-auto mb-10 max-w-2xl"
        >
          {properties.contactText || "I'm available for freelance work. Connect with me via email or social media."}
        </p>
        <Button className="rounded-full px-8 py-3 text-lg">
          Contact Me
        </Button>
      </section>
    </div>
  )
} 