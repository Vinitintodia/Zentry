import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface BusinessNavbarProps {
  logoText?: string;
  logoInitials?: string;
  navItems?: Array<{
    label: string;
    href: string;
  }>;
  theme?: string;
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
  theme = "light"
}: BusinessNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { setTheme } = useTheme();
  const isDark = theme === 'dark';
  
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
    }
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300",
        scrolled 
          ? isDark 
            ? "bg-gray-900/80 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold">
            {logoInitials}
          </div>
          <span className={cn("font-medium text-lg hidden sm:block", isDark ? "text-white" : "")}>
            {logoText}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                isDark 
                  ? "text-gray-300 hover:text-white" 
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className={cn(
              isDark 
                ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                : "hover:bg-gray-100"
            )}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "hidden sm:flex",
              isDark 
                ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                : "hover:bg-gray-100"
            )}
          >
            Sign In
          </Button>
          
          <Button 
            size="sm" 
            className={cn(
              "bg-brand-blue hover:bg-brand-blue/90",
              isDark ? "text-white" : ""
            )}
            onClick={(e) => scrollToSection(e, "#download")}
          >
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}