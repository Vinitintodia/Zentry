import React from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessFooterProps {
  companyName?: string;
  tagline?: string;
  address?: string;
  email?: string;
  phone?: string;
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
}

export function BusinessFooter({
  companyName = "VoiceCalc",
  tagline = "The smart calculator that listens and adapts",
  address = "123 Innovation Way, San Francisco, CA 94107",
  email = "hello@voicecalc.app",
  phone = "+1 (555) 123-4567",
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
  theme = "light"
}: BusinessFooterProps) {
  const isDark = theme === 'dark';
  
  return (
    <footer id="about" className={cn(
      "border-t pt-16 pb-8",
      isDark 
        ? "bg-gray-900 border-gray-800" 
        : "bg-brand-gray-light/30 border-gray-200/50"
    )}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold">
                VC
              </div>
              <span className={cn(
                "font-medium text-lg",
                isDark ? "text-white" : ""
              )}>
                {companyName}
              </span>
            </div>
            <p className={cn(
              "mb-6 max-w-md",
              isDark ? "text-gray-400" : "text-muted-foreground"
            )}>
              {tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className={cn(
                  "h-5 w-5 shrink-0 mt-0.5",
                  isDark ? "text-brand-blue-light" : "text-brand-blue"
                )} />
                <span className={isDark ? "text-gray-400" : "text-muted-foreground"}>
                  {address}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className={cn(
                  "h-5 w-5 shrink-0",
                  isDark ? "text-brand-blue-light" : "text-brand-blue"
                )} />
                <a 
                  href={`mailto:${email}`} 
                  className={cn(
                    "transition-colors",
                    isDark 
                      ? "text-gray-400 hover:text-brand-blue-light" 
                      : "text-muted-foreground hover:text-brand-blue"
                  )}
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className={cn(
                  "h-5 w-5 shrink-0",
                  isDark ? "text-brand-blue-light" : "text-brand-blue"
                )} />
                <a 
                  href={`tel:${phone.replace(/\D/g, '')}`} 
                  className={cn(
                    "transition-colors",
                    isDark 
                      ? "text-gray-400 hover:text-brand-blue-light" 
                      : "text-muted-foreground hover:text-brand-blue"
                  )}
                >
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    isDark 
                      ? "bg-gray-800 border border-gray-700 text-gray-400 hover:text-brand-blue-light hover:border-brand-blue-light/30" 
                      : "bg-white border border-gray-200 text-muted-foreground hover:text-brand-blue hover:border-brand-blue/30"
                  )}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          {navLinks.map((section, index) => (
            <div key={index}>
              <h3 className={cn(
                "font-medium text-lg mb-4",
                isDark ? "text-white" : ""
              )}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className={cn(
                        "text-sm transition-colors",
                        isDark 
                          ? "text-gray-400 hover:text-brand-blue-light" 
                          : "text-muted-foreground hover:text-brand-blue"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 pt-8 flex flex-col md:flex-row justify-between items-center",
          isDark ? "border-t border-gray-800" : "border-t border-gray-200/50"
        )}>
          <p className={cn(
            "text-sm",
            isDark ? "text-gray-500" : "text-muted-foreground"
          )}>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a 
              href="#" 
              className={cn(
                "text-sm transition-colors",
                isDark 
                  ? "text-gray-500 hover:text-brand-blue-light" 
                  : "text-muted-foreground hover:text-brand-blue"
              )}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className={cn(
                "text-sm transition-colors",
                isDark 
                  ? "text-gray-500 hover:text-brand-blue-light" 
                  : "text-muted-foreground hover:text-brand-blue"
              )}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className={cn(
                "text-sm transition-colors",
                isDark 
                  ? "text-gray-500 hover:text-brand-blue-light" 
                  : "text-muted-foreground hover:text-brand-blue"
              )}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}