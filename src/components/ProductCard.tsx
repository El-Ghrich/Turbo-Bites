export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative group">
      {/* Card background with glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-flame-500 to-accent rounded-lg opacity-0 group-hover:opacity-75 blur transition duration-300 group-hover:duration-200" />

      {/* Main card */}
      <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden">
        {/* Image container with overlay */}
        <div className="relative h-56 overflow-hidden bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Badge if present */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-flame-500 to-flame-400 text-black px-3 py-1 font-bold text-xs uppercase tracking-wider rounded-none">
              {product.badge}
            </div>
          )}

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight group-hover:text-flame-400 transition-colors">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-sm text-slate-400 mb-3 line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Price and CTA row */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <div className="text-2xl font-black text-accent">
              {product.price.toFixed(2)}DH
            </div>
            
          </div>
        </div>

        {/* Reflection effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-flame-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}
