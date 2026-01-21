"use client";

import { useEffect } from "react";


interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      
      {/* 1. Backdrop (Darkens the screen) */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* 2. The Modal Box */}
      <div className="relative z-10 w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] transform transition-all scale-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black uppercase italic text-white mb-2">
            Choose Your <span className="text-flame-500">Method</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Fastest delivery to your doorstep.
          </p>
        </div>

        <div className="space-y-4">
          
          {/* OPTION A: GLOVO */}
          <a 
            href="https://glovoapp.com/ma/en/casablanca/" // Put your real link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#FFC244] hover:bg-[#FFD066] text-black font-bold p-4 rounded-xl transition-transform hover:scale-[1.02] group"
          >
            <span className="flex items-center gap-3">
              {/* Simple circle icon for Glovo */}
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">🛵</span>
              Order via Glovo
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>

          {/* OPTION B: WHATSAPP */}
          <a 
            // This API link opens WhatsApp with text pre-filled
            href="https://wa.me/212600000000?text=Hello%20Turbo%20Burger%2C%20I%20want%20to%20place%20an%20order%21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#25D366] hover:bg-[#4ade80] text-black font-bold p-4 rounded-xl transition-transform hover:scale-[1.02] group"
          >
            <span className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">💬</span>
              Order on WhatsApp
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>

          {/* OPTION C: CALL */}
          <a 
            href="tel:+212600000000"
            className="flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm font-bold py-2 transition-colors"
          >
            Or Call Us: +212 600-000000
          </a>

        </div>
      </div>
    </div>
  );
}