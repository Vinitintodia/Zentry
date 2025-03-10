// types/blocks.ts
export interface NavbarStructure {
  type: "navbar";
  properties: {
    layout: {
      isSticky: boolean;
      maxWidth: "full" | "7xl" | "6xl" | "5xl";
      padding: {
        x: string;
        y: string;
      };
    };
    style: {
      background: {
        color: string;
        blur: boolean;
        opacity: number;
      };
      border: {
        show: boolean;
        color: string;
      };
    };
    logo: {
      text: string;
      initials: string;
      font: {
        size: string;
        weight: "normal" | "medium" | "semibold" | "bold";
        family: string;
      };
      colors: {
        text: string;
        background: string;
      };
    };
    menu: {
      items: Array<{
        label: string;
        href: string;
      }>;
      font: {
        size: string;
        weight: "normal" | "medium" | "semibold" | "bold";
        family: string;
      };
      colors: {
        text: string;
        hoverText: string;
      };
    };
    buttons: {
      signIn: {
        show: boolean;
        text: string;
        variant: "default" | "secondary" | "outline" | "ghost";
        size: "sm" | "default" | "lg";
        radius: "none" | "sm" | "md" | "lg" | "full";
        font: {
          weight: "normal" | "medium" | "semibold" | "bold";
        };
      };
      download: {
        show: boolean;
        text: string;
        variant: "default" | "secondary" | "outline" | "ghost";
        size: "sm" | "default" | "lg";
        radius: "none" | "sm" | "md" | "lg" | "full";
        font: {
          weight: "normal" | "medium" | "semibold" | "bold";
        };
        colors: {
          background: string;
          text: string;
        };
      };
    };
  };
}