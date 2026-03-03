import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import loginImg from '../assets/perfume.png'; 

const Login = () => {
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
          src={loginImg} 
          alt="Somori Luxury" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-12 left-12 text-white z-10">
          <h2 className="text-4xl font-serif italic mb-2">The Somori Circle</h2>
          <p className="text-sm tracking-[0.2em] uppercase opacity-80">Access exclusive collections</p>
        </div>
      </div>

      {/* Right Side: Minimalist Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif mb-4 uppercase tracking-tighter">Sign In</h1>
            <p className="text-neutral-500 text-sm font-light">Enter your details to continue your journey.</p>
          </div>

          <form className="space-y-8">
            <div className="relative border-b border-neutral-200 focus-within:border-red-700 transition-colors py-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent outline-none text-sm font-light py-1"
                placeholder="email@example.com"
              />
            </div>

            <div className="relative border-b border-neutral-200 focus-within:border-red-700 transition-colors py-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Password</label>
              <input 
                type="password" 
                className="w-full bg-transparent outline-none text-sm font-light py-1"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-between items-center text-[10px] tracking-widest uppercase font-bold">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 accent-black" />
                Remember Me
              </label>
              <a href="#" className="text-red-700 hover:text-black transition-colors">Forgot Password?</a>
            </div>

            <button className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-red-800 transition-all shadow-lg">
              Enter the House
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-xs text-neutral-500 font-light">
              Don't have an account?{' '}
              <Link to="/register" className="text-black font-bold uppercase tracking-widest border-b border-black/10 hover:border-red-700 ml-2 pb-1 transition-all">
                Create Account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;