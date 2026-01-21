"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getHref = (item: string) => {
    const name = item.toLowerCase();
    if (name === "home") return "/";
    if (name === "locations") return "/#locations";
    return `/${name}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const desktopItems = ["Menu", "Locations", "About"];
  const mobileItems = ["Home", "Menu", "Locations", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* ==============================
            LAYER 3: LOGO (ALWAYS VISIBLE)
           ============================== */}
        <Link 
          href="/" 
          className="relative z-50 group" // z-50 puts it above the overlay
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* <div className="bg-gradient-to-r from-flame-500 to-flame-400 text-black px-4 py-1 skew-x-[-10deg] transition-transform duration-300 group-hover:scale-105">
            <span className="block font-black tracking-widest text-sm skew-x-[10deg]">
              ⚡ TURBO
            </span>
          </div> */}
          <img src="/logo.png" alt="⚡ TURBO" className="h-[40]" />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-20">
          {desktopItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              className="relative text-sm font-bold uppercase tracking-widest text-slate-300 transition-all duration-300 hover:text-flame-400 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-flame-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* --- DESKTOP ACTION BUTTON --- */}
        <div className="hidden md:block">
          <Link href={'/book-table'}>
          <button
           className="group relative px-6 py-2 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider text-xs overflow-hidden hover:border-flame-500 skew-x-[-10deg]">
            <span className="absolute inset-0 w-0 bg-flame-600 transition-all duration-[250ms] ease-out group-hover:w-full" />
           
            <span className="relative z-10 skew-x-[10deg]">Book Table</span>
          </button>
          </Link>
        </div>

        {/* ==============================
            LAYER 3: HAMBURGER / CLOSE BUTTON
           ============================== */}
        <button 
          className="md:hidden relative z-50 text-white p-2" // z-50 puts it above overlay
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <span className="text-3xl font-bold block leading-none">&times;</span>
          ) : (
            <div className="flex flex-col gap-1.5 items-end">
               <span className="block w-8 h-[3px] bg-flame-500" />
               <span className="block w-6 h-[3px] bg-white" />
               <span className="block w-4 h-[3px] bg-flame-500" />
            </div>
          )}
        </button>

        {/* ==============================
            LAYER 2: MOBILE MENU OVERLAY
           ============================== */}
        <div 
          className={`fixed inset-0 h-[100dvh] bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'translate-y-0' 
              : '-translate-y-full'
          }`}
        >
             {/* Decorative Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-flame-600/10 rounded-full blur-[100px] pointer-events-none" />

             {mobileItems.map((item) => (
                <Link 
                  key={item}
                  href={getHref(item)} 
                  className="text-4xl font-black text-white uppercase tracking-tighter hover:text-flame-500 transition-transform duration-300 hover:scale-105 active:scale-95"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
             ))}
        </div>

      </div>
    </nav>
  );
}