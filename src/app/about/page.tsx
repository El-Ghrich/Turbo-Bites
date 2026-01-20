import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      
      {/* ==============================
          SECTION 1: HERO / INTRO
         ============================== */}
      <section className="relative py-24 sm:py-32 flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-30 mix-blend-screen pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-flame-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center px-6">
          <div className="inline-block mb-6">
             <span className="bg-flame-500 text-black font-black px-4 py-1 text-sm tracking-widest uppercase skew-x-[-10deg] inline-block">
               The Origin Story
             </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black leading-none mb-6 tracking-tighter">
            FORGED IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-500 to-accent">FIRE.</span><br />
            BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-flame-500">SPEED.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            We didn&apos;t just want to make a burger. We wanted to engineer a collision of aggressive flavor and impossible speed.
          </p>
        </div>
      </section>

      {/* ==============================
          SECTION 2: THE PHILOSOPHY (Split Layout)
         ============================== */}
      <section className="relative py-20 px-6">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-flame-500 to-accent rounded-lg opacity-0 group-hover:opacity-75 blur transition duration-300 group-hover:duration-200" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tight">
              No Freezers. <br />
              <span className="text-slate-500">No Microwaves.</span> <br />
              <span className="text-flame-500">Just Heat.</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
              <p>
                In 2022, we looked at the fast-food landscape and saw a lot of "fast" but not enough "food." Frozen patties. Sad lettuce. Zero soul.
              </p>
              <p>
                <strong className="text-white font-bold">Turbo Bites</strong> was the answer. We treat our kitchen like a Formula 1 pit lane. Every movement is calculated. Every ingredient is high-performance.
              </p>
              <p>
                We smash our beef fresh daily. We char our buns with open flame. We deliver in 15 minutes because hunger is an emergency, and we are the first responders.
              </p>
            </div>

            {/* Stats Row */}   
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-white">2022</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-black text-flame-500">500K+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Burgers Smashed</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">15m</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Avg. Pit Stop</div>
              </div>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-flame-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition duration-500" />
              <Image 
                src="/kitchen-fire.jpeg" // Placeholder: Use a photo of a grill with flames
                alt="Grilling in action"
                fill
                className="object-cover transition duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 "
              />
            </div>
            {/* Floating Accent Image */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden border-4 border-black hidden md:block">
               <Image 
                src="/burger-closeup.jpeg" // Placeholder: Close up of a burger
                alt="Detail shot"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==============================
          SECTION 3: THE PIT CREW (Team)
         ============================== */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Angular Background Shape */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-flame-900/10 to-transparent skew-y-3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4">The Crew</h2>
            <p className="text-slate-400">The engineers behind the flavor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Team Member 1 */}
             <TeamCard 
                name="Alex 'The Torch'" 
                role="Head Chef" 
                image="/team-1.jpg" 
             />
             {/* Team Member 2 */}
             <TeamCard 
                name="Mike 'The Beef' Ross" 
                role="Operations Lead" 
                image="/team-2.jpg" 
             />
             {/* Team Member 3 */}
             <TeamCard 
                name="Sarah 'Speed' Chen" 
                role="Grill Master" 
                image="/team-3.jpg" 
             />
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Component for Team Members
function TeamCard({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="group relative">
      <div className="h-96 w-full relative overflow-hidden rounded-xl bg-slate-900 grayscale transition-all duration-500 group-hover:grayscale-0">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
          <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-flame-500 font-bold tracking-widest text-xs uppercase mb-1">{role}</p>
            <h3 className="text-2xl font-black text-white uppercase italic">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}