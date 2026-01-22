import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="flex-grow flex items-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 w-full"
      >
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-[1px] bg-red-700"></div>
            <span className="text-red-700 text-[10px] uppercase tracking-[0.5em] font-bold italic">
              L'Art de Vivre
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 variants={itemVariants} className="text-6xl md:text-[6.5rem] font-serif leading-[1.05] mb-8 text-black tracking-tighter">
            Invisible to the <br />
            <span className="flex items-center italic font-light">
              eye
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mx-6 h-[1px] bg-black/20 inline-block"
              ></motion.span>
              <span className="text-red-700 not-italic font-serif">Unforgettable</span> 
            </span>
            <span className="block italic">to the soul</span>
          </motion.h2>

          {/* Paragraph Text */}
          <motion.p variants={itemVariants} className="text-neutral-500 max-w-md mb-12 text-lg leading-relaxed font-light">
            Crafted in the heart of fragrance tradition, <span className="text-black font-medium">Somori</span> transcends the visual to leave a signature that lingers in memory.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex items-center space-x-8">
            {/* "Shop Now" leading to Collections Page */}
            <Link to="/collections">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-12 py-5 rounded-full flex items-center group transition-all hover:bg-red-800 shadow-xl shadow-black/10"
              >
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold">
                  Shop Collection
                </span>
                <span className="ml-4 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </motion.button>
            </Link>
            
            <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/20 pb-1 hover:border-red-700 transition-all">
              The Journal
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;