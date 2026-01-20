import Link from "next/link";
import { ProductCard, type Product } from "./ProductCard";
import { ZigZagBreak } from "./SectionBreak";

const BEST_SELLERS: Product[] = [
  {
    id: "1",
    name: "The Inferno",
    price: 55,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",
    description: "Double beef, hot sauce, fire on fire",
    badge: "BESTSELLER",
  },
  {
    id: "2",
    name: "Turbo Stack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=500&fit=crop",
    description: "Triple patty monster with extra power",
    badge: "HOT",
  },
  {
    id: "3",
    name: "Crispy Thunder",
    price: 69.99,
    image: "/burger01.jpeg",
    description: "Fried chicken, aggressive toppings",
  },
  {
    id: "4",
    name: "The Molten",
    price: 59.99,
    image: "/hello.jpeg",
    description: "Melted cheese overload, spicy mayo",
    badge: "NEW",
  },
  {
    id: "5",
    name: "Street King",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",
    description: "Premium beef, everything loaded",
  },
  {
    id: "6",
    name: "King Burger",
    price: 54.99,
    image: "/burger03.jpeg",
    description: "Premium beef, Extra cheese, Special Sauce ",
  },
];

export function BestSellers() {
  return (
    <>
    <section className="relative py-20 sm:py-32 bg-black grain-overlay overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-flame-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div className="mb-16 sm:mb-24 text-center items-center flex flex-col">
          <div className="inline-block mb-4">
            <span className="text-sm font-black uppercase tracking-widest text-flame-400">
              ⚡ DESTRUCTION GUARANTEED
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black leading-tight mb-4 tracking-tighter">
            <span className="block mb-2">BEST</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-400 via-accent to-flame-500">
              SELLERS
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl font-light leading-relaxed">
            Our most ordered items. Fast, aggressive, and absolutely delicious.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BEST_SELLERS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <Link href="/menu" >
          <button className="btn-aggressive bg-gradient-to-br from-flame-500 to-flame-600 hover:from-flame-400 hover:to-flame-500 shadow-lg shadow-flame-500/50">
            EXPLORE FULL MENU
          </button>
          </Link>
        </div>
      </div>
    </section>
  
    </>
  );
}
