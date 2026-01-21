import Link from "next/link";

export default function BookTable() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-flame-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-lg w-full text-center space-y-8">
        
        {/* 1. The Icon (Pulsing Warning) */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto">
          <div className="absolute inset-0 bg-flame-500/20 rounded-full animate-ping" />
          <div className="relative bg-slate-900 border border-flame-500/50 text-flame-500 p-5 rounded-full shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>

        {/* 2. The Message */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Pit Lane <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-500 to-accent">Closed</span>
          </h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Our digital reservation engine is currently getting an upgrade. <br className="hidden sm:block" />
            Don&apos;t worry, the kitchen is still firing on all cylinders.
          </p>
        </div>

        {/* 3. The Alternative (Professional Pivot) */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
            For Reservations Please Call
          </p>
          <a 
            href="tel:+212600000000" 
            className="text-2xl sm:text-3xl font-black text-white hover:text-flame-500 transition-colors block mb-2"
          >
            +212 600-000000
          </a>
          <p className="text-xs text-slate-500">
            11:00 AM - 04:00 AM • Daily
          </p>
        </div>

        {/* 4. Secondary Action */}
        <div>
           <Link 
             href="/"
             className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
           >
             ← Back to Base
           </Link>
        </div>

      </div>
    </div>
  );
}