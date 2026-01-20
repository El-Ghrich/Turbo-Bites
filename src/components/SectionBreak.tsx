export function DiagonalBreak() {
  return (
    <div className="relative h-32 overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
      >
        {/* Main diagonal */}
        <polygon
          points="0,50 1440,0 1440,60 0,120"
          fill="hsl(25, 95%, 53%)"
        />
        {/* Accent stripe */}
        <polygon
          points="0,80 1440,30 1440,50 0,100"
          fill="hsl(40, 100%, 50%)"
          opacity="0.6"
        />
        {/* Speed lines */}
        <line x1="0" y1="70" x2="1440" y2="60" stroke="hsl(0, 0%, 20%)" strokeWidth="2" />
        <line x1="0" y1="90" x2="1440" y2="80" stroke="hsl(0, 0%, 20%)" strokeWidth="2" />
      </svg>

      {/* Scratch marks for street aesthetic */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <line x1="0" y1="20" x2="30" y2="40" stroke="white" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="80" y2="35" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="30" x2="70" y2="55" stroke="white" strokeWidth="0.5" />
          <line x1="20" y1="70" x2="50" y2="90" stroke="white" strokeWidth="0.5" />
          <line x1="75" y1="65" x2="100" y2="85" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}

export function ZigZagBreak() {
  return (
    <div className="relative h-24 overflow-hidden bg-black hidden md:block">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
      >
        <polyline
          points="0,30 120,10 240,50 360,10 480,50 600,10 720,50 840,10 960,50 1080,10 1200,50 1320,10 1440,30"
          fill="none"
          stroke="hsl(25, 95%, 53%)"
          strokeWidth="3"
        />
        <polyline
          points="0,35 120,15 240,55 360,15 480,55 600,15 720,55 840,15 960,55 1080,15 1200,55 1320,15 1440,35"
          fill="none"
          stroke="hsl(40, 100%, 50%)"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export function PaintStrokeBreak() {
  return (
    <div className="relative h-32 overflow-hidden bg-gradient-to-b from-black to-slate-900">
      {/* Rough paint stroke effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-12 bg-gradient-to-r from-transparent via-flame-500 to-transparent opacity-20 blur-2xl skew-y-3" />
        <div className="absolute w-full h-8 bg-gradient-to-r from-transparent via-accent to-transparent opacity-10 blur-xl skew-y-2" />
      </div>

      {/* Texture lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="slash" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M-10,10 l20,-20 M0,40 l20,-20 M30,30 l20,-20" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#slash)" />
      </svg>
    </div>
  );
}

export function GlitchBreak() {
  return (
    <div className="relative h-20 overflow-hidden bg-black">
      {/* Glitch lines */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-full h-1 bg-flame-500 animate-pulse" style={{ clipPath: "polygon(0 0, 30% 0, 35% 100%, 0 100%)" }} />
        <div className="absolute left-1/4 top-1/3 w-2/3 h-1 bg-accent animate-pulse" style={{ animationDelay: "0.1s" }} />
        <div className="absolute right-0 bottom-0 w-1/3 h-1 bg-flame-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
      </div>

      {/* Distortion text effect */}
      <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-flame-500 opacity-20 uppercase tracking-widest pointer-events-none">
        &gt;&gt;&gt;
      </div>
    </div>
  );
}
