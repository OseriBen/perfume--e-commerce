import React from 'react';
import { Link } from 'react-router-dom';

const POPULAR_DATA = [
  { id: 1, name: "Somori Classic Black", volume: "EDP 100ml", price: 145, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=500" },
  { id: 2, name: "Somori Club De Nuit", volume: "EDP 105ml", price: 135, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=500" },
  { id: 3, name: "Somori Sauvage", volume: "EDP 100ml", price: 165, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500" },
  { id: 4, name: "Somori Bentley Luxury", volume: "EDP 100ml", price: 155, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=500" },
];

const PopularProducts = () => {
  return (
    <section className="relative bg-neutral-950 py-32 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-red-600 text-[10px] tracking-[0.6em] uppercase font-bold mb-4">Highly Coveted</span>
          <h2 className="text-white text-5xl md:text-6xl font-serif mb-8 tracking-tighter italic">Most Popular</h2>
          <div className="w-16 h-[1px] bg-white/10"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {POPULAR_DATA.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Wrapped Image in Link */}
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-10 bg-neutral-900/50 overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-red-600/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                   <button className="w-full bg-white text-black py-4 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-red-700 hover:text-white transition-colors duration-300">
                     View Details
                   </button>
                </div>
              </Link>

              <div className="flex flex-col items-start">
                <p className="text-red-500 text-[9px] tracking-[0.4em] uppercase font-semibold mb-3">{product.volume}</p>
                {/* Wrapped Title in Link */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-white text-xl font-serif tracking-tight mb-4 group-hover:text-red-500 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <div className="h-[1px] w-full bg-white/5 mb-4 group-hover:bg-red-900/30 transition-colors"></div>
                <p className="text-white/40 text-sm font-serif italic tracking-widest">
                  Price <span className="text-white ml-2 not-italic font-sans text-base">${product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;