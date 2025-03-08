import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  element?: keyof JSX.IntrinsicElements;
  className?: string;
  animation?: string;
  delay?: number;
  theme?: string;
}

export function AnimatedText({ 
  text, 
  element = "p", 
  className = "", 
  animation = "fade-in", 
  delay = 0,
  theme = "light"
}: AnimatedTextProps) {
  const Element = element as any;
  const isDark = theme === 'dark';
  
  return (
    <Element 
      className={cn(
        className, 
        `animate-${animation}`,
        isDark && element === 'h1' ? 'text-white' : '',
        isDark && element === 'h2' ? 'text-white' : '',
        isDark && element === 'h3' ? 'text-white' : '',
        isDark && element === 'p' ? 'text-gray-300' : ''
      )} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </Element>
  );
}