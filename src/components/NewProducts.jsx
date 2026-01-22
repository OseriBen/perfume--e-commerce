import React from 'react';
import { Link } from 'react-router-dom';

const NEW_ARRIVALS = [
  { id: 101, name: "Somori Genial Attitude", volume: "EDP 100ml", price: 145, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=500" },
  { id: 102, name: "Somori Sheer Beauty", volume: "EDT 100ml", price: 125, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=500" },
  { id: 103, name: "Somori Bleu Intense", volume: "EDP 100ml", price: 165, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500" },
  { id: 104, name: "Somori Classic Gold", volume: "EDT 100ml", price: 115, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=500" },
];

const NewProducts = () => {
  return (
    <section className="relative bg-neutral-950 py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <span className="text-red-600 text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Just Arrived</span>
          <h2 className="text-white text-5xl md:text-6xl font-serif mb-6 tracking-tighter italic">New Collections</h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-white/20"></div>
            <div className="w-2 h-2 rounded-full border border-red-600"></div>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {NEW_ARRIVALS.map((product) => (
            <div key={product.id} className="group flex flex-col items-center">
              <Link to={`/product/${product.id}`} className="relative w-full aspect-[4/5] mb-8 bg-neutral-900 overflow-hidden rounded-sm border border-white/5 group-hover:border-red-600/30 transition-all duration-700">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <button className="bg-white text-black px-6 py-3 text-[10px] uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     Quick View
                   </button>
                </div>
              </Link>

              <div className="text-center w-full">
                <p className="text-gray-500 text-[9px] tracking-[0.3em] uppercase mb-2">{product.volume}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-white text-lg font-serif tracking-wide mb-3 group-hover:text-red-500 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-white/40 text-xs font-light tracking-widest uppercase">From</span>
                  <span className="text-red-600 text-xl font-serif italic">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/collections" className="inline-block border-b border-white/20 pb-2 text-white text-xs uppercase tracking-[0.4em] font-medium hover:border-red-600 hover:text-red-500 transition-all duration-300">
            View All Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;