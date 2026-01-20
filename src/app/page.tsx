"use client";

import { Hero } from "@/components/Hero";
import { DiagonalBreak, ZigZagBreak, PaintStrokeBreak } from "@/components/SectionBreak";
import { BestSellers } from "@/components/BestSellers";
import { FinalCTA } from "@/components/FinalCTA";
import { PromoSection } from "@/components/PromoSection";
import { Locations } from "@/components/Location";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      {/* Hero Section */}
      <Hero />

      {/* First aggressive break */}
      <DiagonalBreak />

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Second aggressive break */}
      <ZigZagBreak />

      {/* Promo Section */}
      <PromoSection />

      {/* Third aggressive break */}
      <PaintStrokeBreak />

      <Locations />

      {/* Final CTA */}
      <FinalCTA />


    </div>
  );
}
