import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEditor } from "@/contexts/editor-context";

interface BusinessNavbarProps {
  logoText?: string;
  logoInitials?: string;
  navItems?: Array<{
    label: string;
    href: string;
  }>;
}

export function BusinessNavbar({ 
  logoText = "VoiceCalc", 
  logoInitials = "VC",
  navItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Download", href: "#download" },
    { label: "About", href: "#about" }
  ]
}: BusinessNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { deviceView } = useEditor();
  
  const isMobileView = deviceView === "mobile";
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
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
        "top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              {logoInitials}
            </div>
            <span className={cn(
              "font-medium text-lg text-foreground",
              isMobileView ? "hidden" : "block"
            )}>
              {logoText}
            </span>
          </div>
          
          <nav className={cn(
            "items-center space-x-8",
            isMobileView ? "hidden" : "flex"
          )}>
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground"
                )}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(isMobileView ? "hidden" : "flex")}
            >
              Sign In
            </Button>
            
            <Button 
              size="sm" 
              className={cn(
                "bg-primary text-primary-foreground hover:bg-primary/90",
                isMobileView ? "hidden" : "flex"
              )}
              onClick={(e) => scrollToSection(e, "#download")}
            >
              Download
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
          mobileMenuOpen ? "max-h-[400px] border-border" : "max-h-0 border-transparent"
        )}>
          <nav className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors py-2 px-2 rounded-lg",
                  "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-border my-2" />
            <Button 
              size="sm" 
              variant="outline"
              className="w-full justify-center"
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={(e) => scrollToSection(e, "#download")}
            >
              Download
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}