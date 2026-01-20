import Link from "next/link";
const menuCategories = [
  {
    category: "Loaded Fries", // SMALL (3 items) - Should try to fill a gap
    items: [
      { id: "f1", name: "Nitrous Fries", price: 30, description: "Cheese sauce, bacon bits, jalapeños.", badge: "NEW" },
      { id: "f2", name: "Chili Cheese", price: 35, description: "Topped with spicy beef chili." },
      { id: "f3", name: "Truffle Parm", price: 35, description: "Truffle oil, parmesan dust." },
    ],
  },
  {
    category: "Signature Burgers", // WIDE (5 items)
    items: [
      { id: "b1", name: "The Inferno", price: 65, description: "Double beef, ghost pepper sauce, molten cheddar.", badge: "HOT" },
      { id: "b2", name: "Turbo Stack", price: 85, description: "Triple smashed patty, smoked brisket, onion rings.", badge: "BESTSELLER" },
      { id: "b3", name: "Voltage Classic", price: 45, description: "Standard beef, pickles, american cheese, turbo sauce." },
      { id: "b4", name: "Crispy Thunder", price: 50, description: "Fried chicken thigh, spicy slaw, chipotle mayo." },
      { id: "b5", name: "Truffle Racer", price: 70, description: "Sautéed mushrooms, swiss cheese, truffle aioli." },
    ],
  },
  {
    category: "Turbo Wings", // WIDE (4 items)
    items: [
      { id: "w1", name: "Buffalo Blast", price: 40, description: "Classic spicy buffalo sauce, blue cheese dip." },
      { id: "w2", name: "Honey Glaze", price: 40, description: "Sweet sticky honey garlic sauce." },
      { id: "w3", name: "Nuclear Heat", price: 45, description: "Carolina Reaper dust. Waiver required.", badge: "DANGER" },
      { id: "w4", name: "BBQ Pit", price: 40, description: "Smokey BBQ sauce, scallions." },
    ],
  },
  {
    category: "Dips & Sauces", // SMALL (3 items)
    items: [
      { id: "dp1", name: "Turbo Sauce", price: 5, description: "Our secret spicy mayo." },
      { id: "dp2", name: "Garlic Aioli", price: 5, description: "Roasted garlic cream." },
      { id: "dp3", name: "Cheese Dip", price: 8, description: "Warm cheddar sauce." },
    ],
  },
  {
    category: "Neapolitan Pizza", // WIDE (4 items)
    items: [
      { id: "p1", name: "Margherita", price: 50, description: "San Marzano tomato, mozzarella, basil." },
      { id: "p2", name: "Double Pepperoni", price: 65, description: "Crispy pepperoni cups, hot honey.", badge: "POPULAR" },
      { id: "p3", name: "BBQ Chicken", price: 70, description: "Grilled chicken, red onions, cilantro." },
      { id: "p4", name: "Vegetarian", price: 60, description: "Mushrooms, peppers, onions, olives." },
    ],
  },
  {
    category: "Pit Crew Packs", // SMALL (2 items) - Very small box
    items: [
      { id: "pk1", name: "Duo Racer", price: 120, description: "2 Burgers, 2 Fries, 2 Drinks." },
      { id: "pk2", name: "Family Circuit", price: 250, description: "4 Burgers, 4 Fries, 4 Drinks, Onion Rings." },
    ],
  },
  
  
  {
    category: "Cold Drinks", // SMALL (3 items)
    items: [
      { id: "dr1", name: "Vanilla Shake", price: 30, description: "Real Madagascan vanilla bean." },
      { id: "dr2", name: "Oreo Crash", price: 35, description: "Crushed Oreos, chocolate syrup." },
      { id: "dr3", name: "Craft Soda", price: 20, description: "Cola, Orange, or Lemon-Lime." },
    ],
  },
  {
    category: "Desserts", // WIDE (4 items)
    items: [
      { id: "d1", name: "Skillet Cookie", price: 40, description: "Baked fresh, served with ice cream." },
      { id: "d2", name: "Lava Cake", price: 45, description: "Molten chocolate center.", badge: "HOT" },
      { id: "d3", name: "NY Cheesecake", price: 40, description: "Berry compote topping." },
      { id: "d4", name: "Churros", price: 35, description: "Cinnamon sugar, caramel dip." },
    ],
  },
];
export default function Menu() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-flame-500 selection:text-black">
      
      {/* Header */}
      <div className="pt-32 pb-16 text-center px-6">
        <Link href="/" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 inline-block transition-colors ">
          ← Back to Base
        </Link>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
          The <span className="text-flame-500">Menu</span>
        </h1>
        <p className="text-slate-400 font-light">Select your fuel.</p>
      </div>

      {/* --- BENTO GRID CONTAINER --- */}
      {/* grid-cols-1 (Mobile) -> grid-cols-3 (Desktop) */}
      {/* dense: Packs items tightly so there are no gaps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min grid-flow-dense">
        
        {menuCategories.map((section) => {
          // --- LOGIC: DYNAMIC SIZING ---
          // If items > 3, use 'col-span-2' (Wide). Otherwise 'col-span-1' (Standard).
          const isLarge = section.items.length > 3;
          
          return (
            <div 
              key={section.category} 
              // Apply the calculated class here
              className={`group relative bg-slate-900/40 border border-white/5 rounded-3xl p-6 sm:p-8 overflow-hidden hover:bg-slate-900/80 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] ${
                isLarge ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              
              {/* --- HOVER GLOW EFFECT (The "Cool" Part) --- */}
              {/* An invisible gradient that lights up behind the border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-flame-500/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
              <div className="absolute -inset-px bg-gradient-to-br from-flame-500/0 via-flame-500/0 to-flame-500/0 group-hover:from-flame-500/10 group-hover:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl pointer-events-none" />

              {/* Title Section */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-flame-500 transition-colors">
                  {section.category}
                </h2>
                <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-slate-400 group-hover:bg-flame-500 group-hover:text-black transition-colors">
                  {section.items.length}
                </span>
              </div>

              {/* Items List */}
              <div className={`grid gap-x-8 gap-y-6 ${isLarge ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                {section.items.map((item) => (
                  <div key={item.id} className="relative pl-4 border-l border-white/10 group-hover:border-flame-500/50 transition-colors duration-300">
                    
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-200 group-hover:text-white transition-colors text-sm sm:text-base">
                        {item.name}
                      </h3>
                      <span className="text-flame-500 font-bold text-sm">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 group-hover:text-slate-400 transition-colors">
                      {item.description}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}