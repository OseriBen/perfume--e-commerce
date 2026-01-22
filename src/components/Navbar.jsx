import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiX } from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import CartSidebar from './CartSidebar'; 
import { useCart } from '../context/CartContext'; 

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const navigate = useNavigate(); 

  // Function to handle search submission
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== "") {
      setIsSearchOpen(false); 
      // Navigate to products page with search query
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Reset query
    }
  };

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md text-black border-b border-neutral-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/">
            <motion.h1 
              whileHover={{ x: 2 }}
              className="text-2xl font-serif tracking-tighter font-bold uppercase"
            >
              Scent by Somori
            </motion.h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-semibold text-black/70">
            {['Home', 'Collections', 'Products', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  hover:text-red-700 transition-colors duration-300 relative group
                  ${isActive ? 'text-black' : ''}
                `}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-700 transition-all group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-6">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(true)}
            >
               <FiSearch className="w-5 h-5 cursor-pointer hover:text-red-700 transition-colors" />
            </motion.div>

            <Link to="/login">
              <motion.div 
                whileHover={{ scale: 1.1, color: "#b91c1c" }} 
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <FiUser className="w-5 h-5 transition-colors" />
              </motion.div>
            </Link>
            
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsCartOpen(true)}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiShoppingBag className="w-5 h-5 group-hover:text-red-700 transition-colors" />
              </motion.div>
              
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center px-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 p-4 hover:rotate-90 transition-transform duration-300"
            >
              <FiX className="w-8 h-8 text-neutral-400" />
            </button>

            <div className="w-full max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.5em] text-red-700 font-bold mb-8 text-center">
                Search the Somori Library
              </p>
              <div className="relative border-b border-neutral-200">
                <input 
                  autoFocus
                  type="text"
                  placeholder="SEARCH SCENTS, NOTES, COLLECTIONS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch} // ✅ Listen for Enter key
                  className="w-full bg-transparent text-2xl md:text-4xl font-serif italic py-6 outline-none placeholder:text-neutral-200 uppercase tracking-tight"
                />
                <FiSearch className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-neutral-100" />
              </div>
              
              {/* Quick Suggestion Links */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {['Oud', 'Midnight', 'Floral', 'Lagos'].map((suggestion) => (
                  <button 
                    key={suggestion}
                    onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/products?search=${suggestion.toLowerCase()}`);
                    }}
                    className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;