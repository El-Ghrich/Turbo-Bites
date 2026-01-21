import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6 selection:bg-flame-500 selection:text-black">
      
      {/* --- BACKGROUND FX --- */}
      {/* A massive red glow to indicate "Error" state */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center">
        
        {/* The Giant 404 Number */}
        <div className="relative">
          <h1 className="text-[8rem] md:text-[10rem] sm:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-black select-none opacity-50">
            404
          </h1>
          
          {/* Overlay Text (The "Real" Text) */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mix-blend-overlay">
                Wrong Turn
             </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6 -mt-8 sm:-mt-16 relative z-20">
          <div className="inline-block border border-red-500/30 bg-red-500/10 px-4 py-1 rounded text-red-500 text-xs font-bold uppercase tracking-widest animate-pulse">
            ⚠ Navigation Failure
          </div>

          <p className="text-slate-400 text-lg max-w-md mx-auto font-light leading-relaxed">
            You've gone off-track. This route doesn't exist on our map. 
            Get back to the pit lane before you run out of fuel.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/"
              className="px-8 py-3  md:mb-10 bg-white text-black font-black uppercase tracking-wider text-sm hover:bg-flame-500 hover:text-white transition-all duration-300 skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] inline-block">
                Return to Base
              </span>
            </Link>
            
            <Link 
              href="/menu"
              className="px-8 py-3 mb-10 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:border-flame-500 hover:text-flame-500 transition-all duration-300 skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] inline-block">
                View Menu
              </span>
            </Link>
          </div>
        </div>

      </div>

      {/* Footer decorative noise */}
      <div className="absolute bottom-10 text-slate-800 font-mono text-xs">
        ERR_CODE: OFF_TRACK_LIMITS
      </div>

    </div>
  );
}