import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";

interface NavItem {
  label: string;
  href: string;
}

interface BusinessNavbarProps {
  logoText?: string;
  logoInitials?: string;
  navItems?: NavItem[];
  setActiveElement?: (element: string) => void;
  activeElement?: string;
}

export function BusinessNavbar({ 
  logoText = "VoiceCalc", 
  logoInitials = "VC",
  navItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Download", href: "#download" },
    { label: "About", href: "#about" }
  ],
  setActiveElement,
  activeElement
}: BusinessNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { deviceView, properties } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  
  // Get navbar properties with defaults
  const {
    navbarBgColor = "transparent",
    navbarTextColor = "inherit",
    navbarSticky = true,
    navbarFontSize = "0.875rem",
    navbarFontWeight = "500",
    navbarFontFamily = "var(--template-font-primary)",
    navbarButtonVariant = "default",
    navbarButtonRadius = "0.5rem",
    navbarButtonBgColor = "var(--template-primary)",
    navbarButtonTextColor = "var(--template-primary-foreground)",
    navbarLogoSize = "1.125rem",
    navbarLogoWeight = "600",
    navbarLogoColor = "inherit",
    navbarLogoBgColor = "var(--template-primary)",
    navbarLogoRadius = "0.5rem",
    businessNavbarLogoText = logoText,
    businessNavbarLogoInitials = logoInitials,
    businessNavbarSignInText = "Sign In",
    businessNavbarCTAText = "Download",
    businessNavbarLinks = navItems
  } = properties;
  
  useEffect(() => {
    if (!navbarSticky) return;
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, navbarSticky]);
  
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const section = document.getElementById(href.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={cn(
        "top-0 left-0 right-0 z-50 transition-all duration-300 template-container",
        navbarSticky ? "sticky" : "relative",
        scrolled || mobileMenuOpen
          ? "bg-[var(--template-background)]/80 backdrop-blur-md border-b"
          : "",
        activeElement === "businessNavbar" && "ring-2 ring-[var(--template-primary)]"
      )}
      style={{ 
        backgroundColor: navbarBgColor === 'transparent' ? 'transparent' : navbarBgColor,
        color: navbarTextColor,
        fontFamily: navbarFontFamily,
        position: navbarSticky ? 'sticky' : 'relative'
      }}
      onClick={(e) => {
        e.stopPropagation();
        setActiveElement?.("businessNavbar");
      }}
    >
      <div className="px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div 
            className={cn(
              "flex items-center gap-2",
              activeElement === "businessNavbarLogo" && "ring-2 ring-[var(--template-primary)]"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActiveElement?.("businessNavbarLogo");
            }}
          >
            <div 
              className="flex items-center justify-center text-primary-foreground font-bold"
              style={{
                width: navbarLogoSize,
                height: navbarLogoSize,
                backgroundColor: navbarLogoBgColor,
                borderRadius: navbarLogoRadius,
                color: navbarLogoColor,
                fontWeight: navbarLogoWeight
              }}
            >
              {properties.businessNavbarLogoInitials || businessNavbarLogoInitials}
            </div>
            <span className={cn(
              "font-medium",
              isMobileView ? "hidden" : "block"
            )}
            style={{
              fontSize: navbarLogoSize,
              fontWeight: navbarLogoWeight,
              color: navbarLogoColor
            }}>
              {properties.businessNavbarLogoText || businessNavbarLogoText}
            </span>
          </div>
          
          <nav className={cn(
            "items-center space-x-8",
            isMobileView ? "hidden" : "flex"
          )}>
            {(businessNavbarLinks || navItems).map((item: NavItem, index: number) => (
              <a 
                key={index} 
                href={item.href} 
                className={cn(
                  "transition-colors hover:text-[var(--template-foreground)]",
                  activeElement === `businessNavbarLink${index}` && "ring-2 ring-[var(--template-primary)]"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.(`businessNavbarLink${index}`);
                  scrollToSection(e, item.href);
                }}
                style={{
                  fontSize: navbarFontSize,
                  fontWeight: navbarFontWeight,
                  color: navbarTextColor === 'inherit' ? 'inherit' : navbarTextColor,
                  fontFamily: navbarFontFamily
                }}
              >
                {properties[`businessNavbarLink${index}Text`] || item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-[var(--template-foreground)]"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                isMobileView ? "hidden" : "flex",
                activeElement === "businessNavbarSignIn" && "ring-2 ring-[var(--template-primary)]"
              )}
              style={{
                fontSize: navbarFontSize,
                fontWeight: navbarFontWeight,
                borderRadius: navbarButtonRadius,
                color: navbarTextColor === 'inherit' ? 'inherit' : navbarTextColor,
                fontFamily: navbarFontFamily
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessNavbarSignIn");
              }}
            >
              {properties.businessNavbarSignInText || businessNavbarSignInText}
            </Button>
            
            <Button 
              variant={navbarButtonVariant}
              size="sm" 
              className={cn(
                isMobileView ? "hidden" : "flex",
                activeElement === "businessNavbarCTA" && "ring-2 ring-[var(--template-primary)]"
              )}
              style={{
                backgroundColor: navbarButtonBgColor,
                color: navbarButtonTextColor,
                fontSize: navbarFontSize,
                fontWeight: navbarFontWeight,
                borderRadius: navbarButtonRadius,
                fontFamily: navbarFontFamily
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessNavbarCTA");
                scrollToSection(e, "#download");
              }}
            >
              {properties.businessNavbarCTAText || businessNavbarCTAText}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn(isMobileView ? "flex" : "hidden")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "overflow-hidden transition-all duration-300 border-t",
          isMobileView ? "block" : "hidden",
          mobileMenuOpen ? "max-h-[400px] border-[var(--template-border)]" : "max-h-0 border-transparent"
        )}>
          <nav className="px-4 py-4 flex flex-col gap-2">
            {(businessNavbarLinks || navItems).map((item: NavItem, index: number) => (
              <a 
                key={index} 
                href={item.href} 
                className={cn(
                  "transition-colors py-2 px-2 rounded-lg hover:bg-[var(--template-muted)]",
                  activeElement === `businessNavbarLink${index}` && "ring-2 ring-[var(--template-primary)]"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveElement?.(`businessNavbarLink${index}`);
                  scrollToSection(e, item.href);
                }}
                style={{
                  fontSize: navbarFontSize,
                  fontWeight: navbarFontWeight,
                  color: navbarTextColor === 'inherit' ? 'inherit' : navbarTextColor,
                  fontFamily: navbarFontFamily
                }}
              >
                {properties[`businessNavbarLink${index}Text`] || item.label}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="sm"
              className={cn(
                "w-full justify-start px-2",
                activeElement === "businessNavbarSignIn" && "ring-2 ring-[var(--template-primary)]"
              )}
              style={{
                fontSize: navbarFontSize,
                fontWeight: navbarFontWeight,
                color: navbarTextColor === 'inherit' ? 'inherit' : navbarTextColor,
                fontFamily: navbarFontFamily
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessNavbarSignIn");
              }}
            >
              {properties.businessNavbarSignInText || businessNavbarSignInText}
            </Button>
            <Button 
              variant={navbarButtonVariant}
              size="sm"
              className={cn(
                "w-full justify-start px-2",
                activeElement === "businessNavbarCTA" && "ring-2 ring-[var(--template-primary)]"
              )}
              style={{
                backgroundColor: navbarButtonBgColor,
                color: navbarButtonTextColor,
                fontSize: navbarFontSize,
                fontWeight: navbarFontWeight,
                borderRadius: navbarButtonRadius,
                fontFamily: navbarFontFamily
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveElement?.("businessNavbarCTA");
                scrollToSection(e, "#download");
              }}
            >
              {properties.businessNavbarCTAText || businessNavbarCTAText}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}