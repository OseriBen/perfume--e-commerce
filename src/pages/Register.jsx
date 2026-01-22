import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import registerImg from '../assets/perfume.png'; 

const Register = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row bg-white"
    >
      {/* Left Side: Editorial Image */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <img 
          src={registerImg} 
          alt="Somori Craftsmanship" 
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-12 left-12 text-black z-10">
          <h2 className="text-4xl font-serif italic mb-2">The Registry</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold">Join the Somori Legacy</p>
        </div>
      </div>

      {/* Right Side: Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif mb-4 uppercase tracking-tighter text-red-700">Create Account</h1>
            <p className="text-neutral-500 text-sm font-light">Join our inner circle for a personalized fragrance journey.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b border-neutral-200 focus-within:border-black transition-colors py-2">
                <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">First Name</label>
                <input type="text" className="w-full bg-transparent outline-none text-sm font-light py-1" />
              </div>
              <div className="border-b border-neutral-200 focus-within:border-black transition-colors py-2">
                <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Last Name</label>
                <input type="text" className="w-full bg-transparent outline-none text-sm font-light py-1" />
              </div>
            </div>

            <div className="border-b border-neutral-200 focus-within:border-black transition-colors py-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Email Address</label>
              <input type="email" className="w-full bg-transparent outline-none text-sm font-light py-1" />
            </div>

            <div className="border-b border-neutral-200 focus-within:border-black transition-colors py-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Password</label>
              <input type="password" className="w-full bg-transparent outline-none text-sm font-light py-1" />
            </div>

            <div className="pt-4">
              <button className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-red-800 transition-all">
                Become a Member
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-xs text-neutral-500 font-light italic">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-bold uppercase tracking-widest border-b border-black/10 hover:border-red-700 ml-2 pb-1 transition-all">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;