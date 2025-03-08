"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { BarChart4, CheckCircle2, Globe, Users, Mail, Phone, MapPin } from "lucide-react"

interface TemplateProps {
  properties: Record<string, any>;
  setActiveElement: (element: string | null) => void;
}

export function BusinessWebsiteTemplate({ properties, setActiveElement }: TemplateProps) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Hero Section */}
      <section 
        style={{ backgroundColor: properties.businessHeroBgColor }}
        className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p 
            className="mb-4 font-medium text-blue-600"
            onClick={() => setActiveElement("businessName")}
          >
            {properties.businessName}
          </p>
          <h1 
            style={{ 
              fontSize: properties.businessHeroTitleSize,
              color: properties.businessHeroTitleColor,
              fontWeight: properties.businessHeroTitleWeight,
              textAlign: properties.businessHeroTitleAlign as "left" | "center" | "right"
            }}
            className="mb-6 font-bold tracking-tight"
            onClick={() => setActiveElement("businessHeroTitle")}
          >
            {properties.businessHeroTitle}
          </h1>
          <p 
            style={{ 
              fontSize: properties.businessHeroSubtitleSize,
              color: properties.businessHeroSubtitleColor,
              textAlign: properties.businessHeroSubtitleAlign as "left" | "center" | "right"
            }}
            className="mb-10"
            onClick={() => setActiveElement("businessHeroSubtitle")}
          >
            {properties.businessHeroSubtitle}
          </p>
          <Button 
            style={{ 
              backgroundColor: properties.businessCtaBgColor,
              color: properties.businessCtaTextColor,
              borderRadius: properties.businessCtaBorderRadius
            }}
            className="px-8 py-3 font-medium"
            onClick={() => setActiveElement("businessCtaButton")}
          >
            {properties.businessCtaText}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-24" onClick={() => setActiveElement("businessAboutSection")}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 
            style={{
              fontSize: properties.businessAboutTitleSize,
              color: properties.businessAboutTitleColor
            }}
            className="mb-6 font-bold tracking-tight"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessAboutTitle");
            }}
          >
            {properties.businessAboutTitle}
          </h2>
          <p 
            style={{
              fontSize: properties.businessAboutTextSize,
              color: properties.businessAboutTextColor
            }}
            className="mb-8 leading-relaxed"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessAboutText");
            }}
          >
            {properties.businessAboutText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div 
              className="flex items-center text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement("businessAboutStat1");
              }}
            >
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>{properties.businessAboutStat1 || "10+ Years Experience"}</span>
            </div>
            <div 
              className="flex items-center text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement("businessAboutStat2");
              }}
            >
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>{properties.businessAboutStat2 || "100+ Successful Projects"}</span>
            </div>
            <div 
              className="flex items-center text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement("businessAboutStat3");
              }}
            >
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>{properties.businessAboutStat3 || "24/7 Customer Support"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        style={{ backgroundColor: properties.businessServiceBgColor }}
        className="px-6 py-24"
        onClick={() => setActiveElement("businessServicesSection")}
      >
        <div className="mx-auto max-w-6xl">
          <h2 
            style={{
              fontSize: properties.businessServiceTitleSize,
              color: properties.businessServiceTitleColor
            }}
            className="mb-16 text-center font-bold tracking-tight"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessServiceTitle");
            }}
          >
            {properties.businessServiceTitle}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div 
              className="rounded-lg bg-white p-8 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement("businessService1");
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {properties.businessService1Title}
              </h3>
              <p className="text-gray-600">
                {properties.businessService1Description}
              </p>
            </div>
            
            {/* Service 2 */}
            <div 
              className="rounded-lg bg-white p-8 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement("businessService2");
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {properties.businessService2Title}
              </h3>
              <p className="text-gray-600">
                {properties.businessService2Description}
              </p>
            </div>
            
            {/* Service 3 */}
            <div 
              className="rounded-lg bg-white p-8 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement("businessService3");
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <BarChart4 className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {properties.businessService3Title}
              </h3>
              <p className="text-gray-600">
                {properties.businessService3Description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        style={{ 
          backgroundColor: properties.businessCtaSectionBgColor || "#2563eb" 
        }}
        className="px-6 py-16 text-center text-white"
        onClick={() => setActiveElement("businessCtaSection")}
      >
        <div className="mx-auto max-w-3xl">
          <h2 
            style={{
              fontSize: properties.businessCtaTitleSize || "2rem",
              color: properties.businessCtaTitleColor || "#ffffff"
            }}
            className="mb-6 font-bold"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessCtaTitle");
            }}
          >
            {properties.businessCtaTitle || "Ready to Transform Your Business?"}
          </h2>
          <p 
            style={{
              fontSize: properties.businessCtaTextSize || "1.25rem",
              color: properties.businessCtaTextColor || "#e2e2e2"
            }}
            className="mb-8"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessCtaText");
            }}
          >
            {properties.businessCtaText || "Get in touch with our team to learn how we can help you achieve your business goals."}
          </p>
          <Button 
            style={{ 
              backgroundColor: properties.businessCtaButtonBgColor || "#ffffff",
              color: properties.businessCtaButtonTextColor || "#2563eb"
            }}
            className="rounded-md px-8 py-3 font-medium hover:bg-blue-50"
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessCtaButton2");
            }}
          >
            {properties.businessCtaButtonText || "Contact Us Today"}
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer 
        style={{ backgroundColor: properties.businessFooterBgColor || "#1a1a1a" }}
        className="px-6 py-12 text-gray-300"
        onClick={() => setActiveElement("businessFooterSection")}
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div 
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessFooterCompany");
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <p className="mb-2">{properties.businessName}</p>
            <p className="mb-6 text-sm">{properties.businessTagline}</p>
            <p className="text-sm">{properties.businessCopyright || `© ${new Date().getFullYear()} ${properties.businessName}. All rights reserved.`}</p>
          </div>
          
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessFooterContact");
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <div className="mb-3 flex items-center">
              <Mail className="mr-3 h-5 w-5 text-blue-400" />
              <span>{properties.businessEmail || "info@acmeinc.com"}</span>
            </div>
            <div className="mb-3 flex items-center">
              <Phone className="mr-3 h-5 w-5 text-blue-400" />
              <span>{properties.businessPhone || "+1 (555) 123-4567"}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 h-5 w-5 text-blue-400" />
              <span>{properties.businessAddress || "123 Business St, City, State"}</span>
            </div>
          </div>
          
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessFooterLinks1");
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>{properties.businessService1Title}</li>
              <li>{properties.businessService2Title}</li>
              <li>{properties.businessService3Title}</li>
              <li>{properties.businessServiceExtra || "Custom Solutions"}</li>
            </ul>
          </div>
          
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement("businessFooterLinks2");
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
} 