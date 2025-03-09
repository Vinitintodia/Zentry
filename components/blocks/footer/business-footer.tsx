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
  theme = "light"
}: BusinessFooterProps) {
  const isDark = theme === 'dark';
  const { deviceView } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  const isTabletView = deviceView === "tablet";
  
  return (
    <footer id="about" className={cn(
      "border-t",
      isDark 
        ? "bg-gray-900 border-gray-800" 
        : "bg-brand-gray-light/30 border-gray-200/50",
      isMobileView ? "pt-10 pb-6" : isTabletView ? "pt-12 pb-6" : "pt-16 pb-8"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid gap-8",
          isMobileView ? "grid-cols-1" : isTabletView ? "grid-cols-2" : "grid-cols-5"
        )}>
          {/* Company Info */}
          <div className={cn(
            isMobileView ? "text-center" : isTabletView ? "col-span-2" : "col-span-2"
          )}>
            <div className={cn(
              "flex items-center gap-2 mb-4",
              isMobileView ? "justify-center" : ""
            )}>
              <div className={cn(
                "rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold",
                isMobileView ? "w-8 h-8" : "w-10 h-10"
              )}>
                {logoInitials}
              </div>
              <span className={cn(
                "font-medium",
                isMobileView ? "text-base" : "text-lg",
                isDark ? "text-white" : ""
              )}>
                {companyName}
              </span>
            </div>
            <p className={cn(
              "mb-6",
              isMobileView ? "text-sm max-w-[280px] mx-auto" : "max-w-md",
              isDark ? "text-gray-400" : "text-muted-foreground"
            )}>
              {tagline}
            </p>
            
            <div className={cn(
              "space-y-3",
              isMobileView ? "text-center" : ""
            )}>
              <div className={cn(
                "flex items-start gap-3",
                isMobileView ? "justify-center text-xs" : "text-sm"
              )}>
                <MapPin className={cn(
                  "shrink-0 mt-0.5",
                  isMobileView ? "h-4 w-4" : "h-5 w-5",
                  isDark ? "text-brand-blue-light" : "text-brand-blue"
                )} />
                <span className={isDark ? "text-gray-400" : "text-muted-foreground"}>
                  {address}
                </span>
              </div>
              <div className={cn(
                "flex items-center gap-3",
                isMobileView ? "justify-center text-xs" : "text-sm"
              )}>
                <Mail className={cn(
                  "shrink-0",
                  isMobileView ? "h-4 w-4" : "h-5 w-5",
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
              <div className={cn(
                "flex items-center gap-3",
                isMobileView ? "justify-center text-xs" : "text-sm"
              )}>
                <Phone className={cn(
                  "shrink-0",
                  isMobileView ? "h-4 w-4" : "h-5 w-5",
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
            
            <div className={cn(
              "flex gap-4 mt-6",
              isMobileView ? "justify-center" : ""
            )}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className={cn(
                    "rounded-full flex items-center justify-center transition-colors",
                    isDark 
                      ? "bg-gray-800 border border-gray-700 text-gray-400 hover:text-brand-blue-light hover:border-brand-blue-light/30" 
                      : "bg-white border border-gray-200 text-muted-foreground hover:text-brand-blue hover:border-brand-blue/30",
                    isMobileView ? "w-8 h-8" : "w-10 h-10"
                  )}
                  aria-label={link.name}
                >
                  {React.cloneElement(link.icon as React.ReactElement, {
                    className: cn(
                      isMobileView ? "h-4 w-4" : "h-5 w-5"
                    )
                  })}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          {navLinks.map((section, index) => (
            <div key={index} className={cn(
              isMobileView ? "text-center" : ""
            )}>
              <h3 className={cn(
                "font-medium mb-4",
                isMobileView ? "text-base" : "text-lg",
                isDark ? "text-white" : ""
              )}>
                {section.title}
              </h3>
              <ul className={cn(
                "space-y-3",
                isMobileView ? "text-center" : ""
              )}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className={cn(
                        "transition-colors",
                        isMobileView ? "text-xs" : "text-sm",
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
          "mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center",
          isDark ? "border-gray-800" : "border-gray-200/50"
        )}>
          <p className={cn(
            isMobileView ? "text-xs" : "text-sm",
            isDark ? "text-gray-500" : "text-muted-foreground"
          )}>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className={cn(
            "flex gap-4 md:gap-6",
            isMobileView ? "mt-4 flex-wrap justify-center" : "mt-0"
          )}>
            <a 
              href="#" 
              className={cn(
                "transition-colors",
                isMobileView ? "text-xs" : "text-sm",
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
                "transition-colors",
                isMobileView ? "text-xs" : "text-sm",
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
                "transition-colors",
                isMobileView ? "text-xs" : "text-sm",
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