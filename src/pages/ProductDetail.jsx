import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiPlus, FiMinus, FiShoppingBag, FiCheck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { ALL_PERFUMES } from '../data/perfumes.js'; // ✅ Import your perfumes dataset

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Find the product by ID
  const productData = ALL_PERFUMES.find(p => p.id === parseInt(id));

  // If product not found, return a fallback
  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(productData, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#FBFBFB] pt-12"
    >
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/collections"
          className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-black transition-colors mb-12"
        >
          <FiChevronLeft className="mr-2" /> Back to Library
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: Product Image */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden bg-neutral-100 rounded-sm"
            >
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </motion.div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 pb-20">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <span className="text-red-700 text-[10px] uppercase tracking-[0.5em] font-bold">
                № {productData.id} Exclusive
              </span>

              <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-6 italic tracking-tight text-black">
                {productData.name.split(' ').slice(0, 2).join(' ')} <br />
                {productData.name.split(' ').slice(2).join(' ')}
              </h1>

              <p className="text-2xl font-serif text-neutral-800 mb-10">
                ${productData.price.toFixed(2)}
              </p>

              <div className="h-[1px] w-full bg-neutral-200 mb-10"></div>

              <p className="text-neutral-500 leading-relaxed font-light mb-12 text-lg">
                An olfactory journey through the ancient forests of the East. {productData.name} captures the essence of midnight air—woody, smoky, and dangerously elegant.
              </p>

              {/* Scent Architecture */}
              <div className="space-y-10 mb-16">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-black border-b border-black/10 pb-4">
                  The Scent Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-red-700 font-bold block mb-2">Top Notes</span>
                    <p className="text-sm font-serif italic text-neutral-800">Saffron, Bergamot</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-red-700 font-bold block mb-2">Heart Notes</span>
                    <p className="text-sm font-serif italic text-neutral-800">Bulgarian Rose, Amber</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-red-700 font-bold block mb-2">Base Notes</span>
                    <p className="text-sm font-serif italic text-neutral-800">White Musk, Leather</p>
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex items-center border border-neutral-200 px-6 py-4 space-x-8 rounded-full">
                  <FiMinus
                    className="cursor-pointer hover:text-red-700"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  />
                  <span className="text-sm font-medium w-4 text-center">{quantity}</span>
                  <FiPlus
                    className="cursor-pointer hover:text-red-700"
                    onClick={() => setQuantity(q => q + 1)}
                  />
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-grow w-full py-5 px-10 rounded-full flex items-center justify-between group overflow-hidden relative transition-colors duration-500 ${isAdded ? 'bg-red-800' : 'bg-black'} text-white`}
                >
                  <span className="uppercase tracking-[0.3em] text-[10px] font-bold relative z-10">
                    {isAdded ? 'Added to Collection' : 'Add to Collection'}
                  </span>
                  {isAdded ? (
                    <FiCheck className="relative z-10" />
                  ) : (
                    <FiShoppingBag className="relative z-10 group-hover:rotate-12 transition-transform" />
                  )}

                  {!isAdded && (
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </button>
              </div>

              <p className="mt-8 text-[10px] text-center text-neutral-400 uppercase tracking-widest">
                Complimentary Shipping on all orders over $150
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;