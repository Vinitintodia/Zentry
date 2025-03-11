import React from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditor } from "@/contexts/editor-context";

interface BusinessFooterProps {
  companyName?: string;
  tagline?: string;
  address?: string;
  email?: string;
  phone?: string;
  logoInitials?: string;
  socialLinks?: Array<{
    name: string;
    icon: React.ReactNode;
    href: string;
  }>;
  navLinks?: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  theme?: string;
  logoText?: string;
  description?: string;
  footerLinks?: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  copyrightText?: string;
  legalLinks?: Array<{
    label: string;
    href: string;
  }>;
  setActiveElement?: (element: string) => void;
  activeElement?: string;
}

export function BusinessFooter({
  companyName = "VoiceCalc",
  tagline = "The smart calculator that listens and adapts",
  address = "123 Innovation Way, San Francisco, CA 94107",
  email = "hello@voicecalc.app",
  phone = "+1 (555) 123-4567",
  logoInitials = "VC",
  socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" }
  ],
  navLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Demo", href: "#demo" },
        { label: "Download", href: "#download" },
        { label: "Pricing", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" }
      ]
    }
  ],
  theme = "light",
  logoText = "VC",
  description = "The smart calculator that listens and adapts",
  footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Demo", href: "#demo" },
        { label: "Download", href: "#download" },
        { label: "Pricing", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" }
      ]
    }
  ],
  copyrightText = "VoiceCalc",
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies", href: "#" }
  ],
  setActiveElement,
  activeElement
}: BusinessFooterProps) {
  const isDark = theme === 'dark';
  const { deviceView, properties } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  return (
    <footer className={cn(
      "template-container relative overflow-hidden border-t border-[var(--template-border)]",
      isMobileView ? "py-8" : isTabletView ? "py-12" : "py-16"
    )}>
      <div className="container px-4 md:px-6">
        <div className={cn(
          "grid gap-8",
          isMobileView ? "grid-cols-1" : isTabletView ? "grid-cols-2" : "grid-cols-4"
        )}>
          {/* Brand */}
          <div className="space-y-4">
            <div 
              className={cn(
                "flex items-center space-x-2",
                activeElement === "businessFooterLogo" && "ring-2 ring-[var(--template-primary)]"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessFooterLogo");
              }}
              style={{ fontFamily: properties.fontFamily }}
            >
              <div className={cn(
                "rounded-lg bg-[var(--template-primary)] text-[var(--template-primary-foreground)] flex items-center justify-center font-semibold",
                isMobileView ? "w-8 h-8 text-lg" : "w-10 h-10 text-xl"
              )}>
                {properties.businessFooterLogoInitials || logoInitials}
              </div>
              <span className={cn(
                "font-semibold text-[var(--template-foreground)]",
                isMobileView ? "text-lg" : "text-xl"
              )}>
                {properties.businessFooterLogoText || logoText}
              </span>
            </div>
            <p 
              className={cn(
                "text-sm text-[var(--template-muted-foreground)]",
                activeElement === "businessFooterDescription" && "ring-2 ring-[var(--template-primary)]"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessFooterDescription");
              }}
              style={{ fontFamily: properties.fontFamily }}
            >
              {properties.businessFooterDescription || description}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "rounded-full p-2 transition-colors duration-200",
                    "hover:bg-[var(--template-primary)]/10 text-[var(--template-muted-foreground)] hover:text-[var(--template-primary)]",
                    activeElement === `businessFooterSocialLink${index}` && "ring-2 ring-[var(--template-primary)]"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveElement?.(`businessFooterSocialLink${index}`);
                  }}
                  style={{ fontFamily: properties.fontFamily }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 
                className={cn(
                  "font-semibold text-[var(--template-foreground)]",
                  isMobileView ? "text-base" : "text-lg",
                  activeElement === `businessFooterSection${index}Title` && "ring-2 ring-[var(--template-primary)]"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.(`businessFooterSection${index}Title`);
                }}
                style={{ fontFamily: properties.fontFamily }}
              >
                {properties[`businessFooterSection${index}Title`] || section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm text-[var(--template-muted-foreground)] hover:text-[var(--template-primary)] transition-colors duration-200",
                        isMobileView ? "text-sm" : "text-base",
                        activeElement === `businessFooterSection${index}Link${linkIndex}` && "ring-2 ring-[var(--template-primary)]"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveElement?.(`businessFooterSection${index}Link${linkIndex}`);
                      }}
                      style={{ fontFamily: properties.fontFamily }}
                    >
                      {properties[`businessFooterSection${index}Link${linkIndex}Text`] || link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className={cn(
          "flex flex-col sm:flex-row justify-between items-center border-t border-[var(--template-border)]",
          isMobileView ? "mt-6 pt-6 space-y-2" : "mt-8 pt-8"
        )}>
          <p 
            className={cn(
              "text-[var(--template-muted-foreground)]",
              isMobileView ? "text-xs text-center" : "text-sm",
              activeElement === "businessFooterCopyright" && "ring-2 ring-[var(--template-primary)]"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessFooterCopyright");
            }}
            style={{ fontFamily: properties.fontFamily }}
          >
            © {new Date().getFullYear()} {properties.businessFooterCopyrightText || copyrightText}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn(
                  "text-[var(--template-muted-foreground)] hover:text-[var(--template-primary)] transition-colors duration-200",
                  isMobileView ? "text-xs" : "text-sm",
                  activeElement === `businessFooterLegalLink${index}` && "ring-2 ring-[var(--template-primary)]"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveElement?.(`businessFooterLegalLink${index}`);
                }}
                style={{ fontFamily: properties.fontFamily }}
              >
                {properties[`businessFooterLegalLink${index}Text`] || link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}