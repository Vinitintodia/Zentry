import { Navbar1 } from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import { Feature108 } from "@/components/shadcnblocks-com-feature108";
import Image from "next/image";
import { Footerdemo } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
      <Navbar1 />
      <Hero />
      <Feature108 />
      <Footerdemo />
    </div>
  );
}
