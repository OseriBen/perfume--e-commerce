import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiPlus, FiX } from 'react-icons/fi'; 
import { useCart } from '../context/CartContext';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

const Products = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  
  //  Get search query from URL (?search=oud)
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search')?.toLowerCase() || "";

  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  const allProducts = [
    { id: '1', name: "Oud Mystique", price: 185, category: "Woody", intensity: "Strong", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000" },
    { id: '2', name: "Lagos Bloom", price: 150, category: "Floral", intensity: "Medium", image: "https://images.unsplash.com/photo-1594035910387-fea47734265f?q=80&w=1000" },
    { id: '3', name: "Midnight Ash", price: 210, category: "Spicy", intensity: "Strong", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000" },
    { id: '4', name: "Oceanic Salt", price: 135, category: "Fresh", intensity: "Light", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000" },
  ];

  const categories = ["All", "Woody", "Floral", "Spicy", "Fresh"];

  // Multi-layered
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = filter === 'All' || product.category === filter;
    const matchesSearch = searchTerm === "" || 
      product.name.toLowerCase().includes(searchTerm) || 
      product.category.toLowerCase().includes(searchTerm);
    
    return matchesCategory && matchesSearch;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0; // Featured (default)
  });

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white pt-6 px-6">
      <div className="max-w-[1440px] mx-auto pb-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="lg:pt-4">
            <span className="text-red-700 text-[10px] uppercase tracking-[0.5em] font-bold">
              {searchTerm ? `Results for "${searchTerm}"` : "The Catalog"}
            </span>
            <div className="flex items-center gap-4 mt-1">
              <h1 className="text-4xl md:text-5xl font-serif italic tracking-tighter">
                {searchTerm ? "Search Results" : "All Creations"}
              </h1>
              {searchTerm && (
                <button 
                  onClick={() => navigate('/products')}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                  title="Clear Search"
                >
                  <FiX className="w-5 h-5 text-neutral-400" />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-8 border-b border-neutral-100 pb-2 w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">Sort By</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-[10px] uppercase tracking-[0.2em] font-bold outline-none cursor-pointer"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-10 lg:sticky lg:top-24 h-fit">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-2">
                <FiFilter className="text-red-700" /> Scent Profile
              </h3>
              <div className="space-y-4">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={filter === cat}
                      onChange={() => setFilter(cat)}
                      className="accent-red-700 w-3 h-3" 
                    />
                    <span className={`text-[11px] uppercase tracking-widest transition-all ${filter === cat ? 'text-black font-bold' : 'text-neutral-400 group-hover:text-black'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-neutral-100">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Intensity</h3>
              <div className="space-y-4">
                {["Light", "Medium", "Strong"].map(level => (
                  <div key={level} className="flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-500 hover:text-black cursor-pointer group">
                    <span>{level}</span>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${level === 'Strong' ? 'bg-red-700' : 'bg-neutral-200 group-hover:bg-neutral-400'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <main className="flex-grow">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                <AnimatePresence mode='popLayout'>
                  {sortedProducts.map((product) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={product.id} 
                      className="group"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-neutral-50 mb-6 relative rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-500">
                        <Link to={`/product/${product.id}`}>
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out"
                          />
                        </Link>
                        
                        <motion.button 
                          onClick={() => addToCart(product, 1)}
                          whileTap={{ scale: 0.9 }}
                          className="absolute bottom-6 left-6 right-6 bg-black text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-full flex items-center justify-center gap-2 hover:bg-red-800"
                        >
                          <FiPlus className="text-sm" /> Quick Add
                        </motion.button>
                      </div>

                      <div className="text-center">
                        <p className="text-[9px] uppercase tracking-[0.4em] text-red-700 mb-2 font-bold">{product.category}</p>
                        <h3 className="font-serif italic text-2xl mb-1">{product.name}</h3>
                        <p className="text-neutral-400 font-light text-sm">${product.price.toFixed(2)}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              /* No Results State */
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="h-96 flex flex-col items-center justify-center text-center"
              >
                <p className="font-serif italic text-2xl text-neutral-300 mb-6">No scents found matching your request.</p>
                <button 
                  onClick={() => navigate('/products')}
                  className="text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-red-700 hover:border-red-700 transition-all"
                >
                  Explore Entire Library
                </button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;