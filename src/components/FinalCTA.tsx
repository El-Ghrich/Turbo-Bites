import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-flame-600 via-accent to-flame-500 rounded-full blur-3xl opacity-5" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Main message */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tighter">
          <span className="block mb-3">Your hunger doesn&apos;t wait.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-400 via-accent to-flame-500">
            Neither should you.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Order now and get your Turbo Bites in 15 minutes or less. Guaranteed fresh, always aggressive, forever delicious.
        </p>

        {/* Primary CTA - Dominant button */}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/order">
          <button className="btn-aggressive px-12 py-4 text-lg bg-gradient-to-br from-flame-500 to-flame-600 hover:from-flame-400 hover:to-flame-500 shadow-2xl shadow-flame-500/50 hover:shadow-flame-400/50">
            ORDER NOW
          </button>
          </Link>
          <p className="text-sm text-slate-400 font-light">
            or call +212 600-323232
          </p>
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-800">
          <div>
            <div className="text-sm uppercase tracking-widest text-flame-400 font-bold mb-2">
              Free Delivery
            </div>
            <p className="text-slate-400 text-sm">Orders over $20 in selected areas</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-accent font-bold mb-2">
              100% Fresh
            </div>
            <p className="text-slate-400 text-sm">Never frozen, always prepared fresh</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-flame-400 font-bold mb-2">
              Fast & Reliable
            </div>
            <p className="text-slate-400 text-sm">15 min delivery guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
