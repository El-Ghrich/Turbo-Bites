import Link from "next/link";

export function PromoSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Diagonal background pattern */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-20"
      >
        <defs>
          <pattern id="diagonal" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="100" stroke="hsl(25, 95%, 53%)" strokeWidth="2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="hsl(25, 95%, 53%)" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>

      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      {/* Radial glow elements */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-flame-600 to-flame-500 rounded-full blur-3xl opacity-20 animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent to-transparent rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Content - split with diagonal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - text and promo */}
          <div>
            <div className="mb-6 skew-x-[-10deg]">
              <span className=" relative inline-block bg-accent text-black px-4 py-2 font-black text-xs uppercase tracking-widest ">
                LIMITED TIME
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tighter">
              <span className="block mb-2">DOUBLE</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-400 to-accent">
                MEAT WEEK
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 font-light max-w-lg">
              Unlimited extras. Maximum flavor. Two weeks only. Get any burger with double meat for the price of one.
            </p>

            {/* Key highlights */}
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-flame-400 font-black mt-1">✓</span>
                <div>
                  <p className="font-bold text-white">FREE DELIVERY</p>
                  <p className="text-sm text-slate-400">On all orders over 150DH</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-accent font-black mt-1">✓</span>
                <div>
                  <p className="font-bold text-white">DOUBLE TOPPINGS</p>
                  <p className="text-sm text-slate-400">Same price, maximum flavor</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-flame-400 font-black mt-1">✓</span>
                <div>
                  <p className="font-bold text-white">15 MIN GUARANTEE</p>
                  <p className="text-sm text-slate-400">Or it&apos;s free</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/order">
            <button className="btn-aggressive bg-gradient-to-r from-accent via-flame-500 to-flame-600 hover:from-accent hover:via-flame-400 hover:to-flame-500 text-black shadow-lg shadow-flame-500/50">
              CLAIM OFFER
            </button>
            </Link>
          </div>

          {/* Right side - racing stripes visual */}
          <div className="relative h-96 sm:h-full min-h-96 flex items-center justify-center">
            {/* Gradient racing stripes */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-flame-500 to-transparent opacity-20 blur-3xl transform -skew-x-12" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-10 blur-2xl transform skew-x-12" />
            </div>

            {/* Large promo text */}
            <div className="relative z-10 text-center">
              <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-flame-500 via-accent to-flame-400 tracking-tighter">
                2X
              </div>
              <p className="text-2xl font-black text-white mt-4 tracking-wide">
                MEAT POWER
              </p>
            </div>

            {/* Decorative flames */}
            <div className="absolute top-0 left-0 text-6xl animate-float" style={{ animationDelay: "0s" }}>🔥</div>
            <div className="absolute bottom-0 right-0 text-6xl animate-float" style={{ animationDelay: "1s" }}>🔥</div>
            <div className="absolute top-1/2 right-0 text-6xl animate-float" style={{ animationDelay: "2s" }}>⚡</div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-flame-500 to-transparent" />
    </section>
  );
}
