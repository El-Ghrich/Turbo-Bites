import Image from "next/image";

const locationData = {
  name: "The HQ",
  address: "Bd Mohamed V, Tanger 90000", // 👈 Change this once, updates everywhere
  googleMapsUrl: "",
  phoneNumber: "+212 600-111111",
  workingHours: "10:00 AM - 02:00 AM"  // We will generate this dynamically below
};

export function Locations() {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationData.address)}`;
  return (
    <section id="locations" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950" />
      
      {/* Side Glow (Blue/Red mix for the map area) */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-flame-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT SIDE: INFO & PHOTO --- */}
          <div className="space-y-10">
            
            {/* Header Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 font-bold tracking-widest text-sm uppercase">Open Now</span>
              </div>
              
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase leading-tight">
               {locationData.name}
              </h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed max-w-md">
                Come to where the magic happens. Loud music, cold drinks, and the hottest burgers in Tangier.
              </p>
            </div>

            {/* Details Box */}
            <div className="border-l-2 border-flame-500 pl-6 space-y-4">
              <div>
                <h4 className="text-slate-500 uppercase text-xs tracking-widest font-bold mb-1">Address</h4>
                <p className="text-white text-xl font-bold">{locationData.address}</p>
              </div>
              <div>
                <h4 className="text-slate-500 uppercase text-xs tracking-widest font-bold mb-1">Working Hours</h4>
                <p className="text-white text-xl font-bold">{locationData.workingHours}</p>
              </div>
              <div>
                <h4 className="text-slate-500 uppercase text-xs tracking-widest font-bold mb-1">Contact</h4>
                <p className="text-white text-xl font-bold">{locationData.phoneNumber}</p>
              </div>
            </div>

            {/* Restaurant Photo */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-slate-800 group">
              <div className="absolute inset-0 bg-flame-500/10 z-10 group-hover:bg-transparent transition duration-500" />
              <Image 
                src="/restaurant.jpeg" // Make sure to add this photo!
                alt="Turbo Bites Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: THE MAP --- */}
          <div className="relative h-[400px] md:h-[700px] w-full rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl shadow-black">
            
            {/* The Map Filter (Makes the map look dark/cool until you hover) */}
            <div className="absolute inset-0 bg-slate-900/20 z-10 pointer-events-none mix-blend-overlay" />

            {/* Google Map Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51825.06822471617!2d-5.834458957827827!3d35.77533866297357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sus!4v1705600000000!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="md:grayscale hover:grayscale-0 transition-all duration-500 "
            ></iframe>

            {/* Floating 'Get Directions' Sticker */}
            <div className="absolute bottom-6 right-6 z-20">
                <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Bd+Mohamed+V,+Tanger" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
               <div className="bg-white text-black font-black px-6 py-3 rounded-full shadow-xl hover:scale-105 transition transform cursor-pointer">
                  📍 GET DIRECTIONS
               </div>
               </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}