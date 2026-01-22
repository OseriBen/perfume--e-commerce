import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-serif italic mb-6">Join the Somori Circle</h2>
            <p className="text-gray-500 text-sm max-w-sm mb-8 font-light leading-relaxed">
              Subscribe to receive exclusive access to new collection launches, 
              private events, and the art of scent-making.
            </p>
            <form className="flex border-b border-white/20 pb-2 focus-within:border-red-600 transition-colors duration-500">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-[10px] tracking-widest w-full focus:ring-0 outline-none placeholder:text-gray-700"
              />
              <button className="text-[10px] tracking-[0.3em] font-bold text-red-600 hover:text-white transition-colors">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase">Collections</span>
              {['For Men', 'For Women', 'Unisex', 'New Arrivals'].map(link => (
                <a key={link} href="#" className="text-xs hover:text-red-500 transition-colors font-light">{link}</a>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase">The House</span>
              {['Our Story', 'Craftsmanship', 'Sustainability', 'Journal'].map(link => (
                <a key={link} href="#" className="text-xs hover:text-red-500 transition-colors font-light">{link}</a>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase">Support</span>
              {['Contact', 'Shipping', 'Returns', 'FAQ'].map(link => (
                <a key={link} href="#" className="text-xs hover:text-red-500 transition-colors font-light">{link}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Logo */}
        <div className="py-16 border-y border-white/5 text-center relative overflow-hidden group">
          <h1 className="text-[12vw] font-serif tracking-tighter leading-none opacity-5 transition-all duration-700 group-hover:opacity-10 group-hover:tracking-widest cursor-default select-none">
            SOMORI
          </h1>
          <button 
            onClick={scrollToTop}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 border border-white/10 p-4 rounded-full hover:bg-red-700 hover:border-red-700 transition-all duration-500"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Section: Legal & Social */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] tracking-[0.2em] text-gray-600">
          <div className="flex space-x-8 uppercase font-medium">
            <p>© {new Date().getFullYear()} SOMORI PARFUMS</p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="flex space-x-6">
            {[FiInstagram, FiTwitter, FiFacebook].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-red-600 transition-colors duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;