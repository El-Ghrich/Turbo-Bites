import Link from "next/link";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    // Removed 'grain-overlay' and background colors for transparency
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      

      <HeroBackground />
      {/* ----- Content ----- */}
      <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto text-center pt-24 md:pt-14">
        {/* Logo/Brand */}
        {/* <div className="mb-8 inline-block animate-fade-in-down">
          <div className="bg-gradient-to-r from-flame-500 to-flame-400 text-black px-6 py-2 rounded-none tracking-widest font-black text-sm skew-x-[-10deg]">
            ⚡ TURBO BITES
          </div>
        </div> */}
         <img src="/logo.png" alt="⚡ TURBO" className="mt-6 mb-8 inline-block animate-fade-in-down h-[110] md:h-[140] mt-0" />


        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tighter animate-fade-in-up">
          <span className="block mb-2 text-slate-100">FUEL YOUR</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-400 via-flame-500 to-accent drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            HUNGER
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 tracking-wide font-light animate-fade-in-up delay-100">
          Aggressive flavor. Uncompromising speed. Built for cravings that won&apos;t wait.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-200">
          
          {/* Primary Button (Kept mostly the same) */}
          <button className="btn-aggressive px-8 py-4 bg-gradient-to-br from-flame-500 to-flame-600 hover:from-flame-400 hover:to-flame-500 text-white font-bold uppercase tracking-tight shadow-lg shadow-flame-500/30 hover:shadow-flame-500/60 hover:-translate-y-1 transition-all duration-200 skew-x-[-10deg]">
            ORDER NOW
          </button>

          {/* Secondary Link with NEW ANIMATION */}
          <Link
            href="/menu"
            // added 'group', 'relative', 'overflow-hidden' and hover scaling/shadow
            className="group relative px-8 py-4 font-bold uppercase tracking-tight border-2 border-flame-500 text-flame-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] skew-x-[-10deg]"
          >
            {/* The sliding filler background */}
            <span className="absolute inset-0 bg-flame-500 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
            
            {/* The text (relative z-10 ensures it stays on top of the filler) */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              VIEW MENU
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto text-center animate-fade-in-up delay-300">
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-black text-flame-400 mb-1 drop-shadow-sm">15 MIN</div>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Max Delivery</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-black text-accent mb-1 drop-shadow-sm">4.9★</div>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Rated</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-black text-flame-400 mb-1 drop-shadow-sm">10K+</div>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Happy Eaters</p>
          </div>
        </div>
      </div>
    </div>
  );
}