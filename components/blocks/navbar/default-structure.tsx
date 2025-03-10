import { NavbarStructure } from "@/types/blocks";

// components/blocks/navbar/default-structure.ts
export const defaultNavbarStructure: NavbarStructure = {
    type: "navbar",
    properties: {
      layout: {
        isSticky: true,
        maxWidth: "7xl",
        padding: {
          x: "4",
          y: "4"
        }
      },
      style: {
        background: {
          color: "#ffffff",
          blur: true,
          opacity: 0.8
        },
        border: {
          show: true,
          color: "var(--border)"
        }
      },
      logo: {
        text: "VoiceCalc",
        initials: "VC",
        font: {
          size: "1.125rem",
          weight: "medium",
          family: "inherit"
        },
        colors: {
          text: "var(--foreground)",
          background: "var(--primary)"
        }
      },
      menu: {
        items: [
          { label: "Features", href: "#features" },
          { label: "Demo", href: "#demo" },
          { label: "Download", href: "#download" },
          { label: "About", href: "#about" }
        ],
        font: {
          size: "0.875rem",
          weight: "medium",
          family: "inherit"
        },
        colors: {
          text: "var(--muted-foreground)",
          hoverText: "var(--foreground)"
        }
      },
      buttons: {
        signIn: {
          show: true,
          text: "Sign In",
          variant: "ghost",
          size: "sm",
          radius: "md",
          font: {
            weight: "medium"
          }
        },
        download: {
          show: true,
          text: "Download",
          variant: "default",
          size: "sm",
          radius: "md",
          font: {
            weight: "medium"
          },
          colors: {
            background: "var(--primary)",
            text: "var(--primary-foreground)"
          }
        }
      }
    }
  };