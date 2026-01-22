import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; 

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, addToCart, cartCount, cartTotal } = useCart(); // from cloud

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Sidebar Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif italic">Your Collection</h2>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">
                  {cartCount} {cartCount === 1 ? 'Item' : 'Items'} Selected
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-8">
              {cartItems.length === 0 ? (
                /* Empty State */
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
                    <FiShoppingBag className="w-8 h-8 text-neutral-300" />
                  </div>
                  <p className="font-serif italic text-neutral-500 mb-8">Your bag is currently empty.</p>
                  <button 
                    onClick={onClose}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-red-700 transition-all"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : (
                /* Items List */
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-6 items-start">
                      <div className="w-24 h-32 bg-neutral-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif italic text-lg">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-700 transition-colors">
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">${item.price}</p>
                        
                        <div className="flex items-center mt-6 space-x-4">
                          <div className="flex items-center border border-neutral-100 rounded-full px-3 py-1 space-x-4">
                            <FiMinus 
                              className="w-3 h-3 cursor-pointer hover:text-red-700" 
                              onClick={() => item.quantity > 1 && addToCart(item, -1)} 
                            />
                            <span className="text-xs font-medium">{item.quantity}</span>
                            <FiPlus 
                              className="w-3 h-3 cursor-pointer hover:text-red-700" 
                              onClick={() => addToCart(item, 1)} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-8 border-t border-neutral-100 space-y-6 bg-neutral-50/50">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">Subtotal</span>
                  <span className="text-xl font-serif">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-full uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-red-800 transition-all shadow-lg shadow-black/10">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;