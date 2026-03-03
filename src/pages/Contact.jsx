import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "concierge@somori.com" },
    { icon: <FiPhone />, label: "Phone", value: "+234 800 SOMORI" },
    { icon: <FiMapPin />, label: "Atelier", value: "Victoria Island, Lagos" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setIsSuccess(true);
          setIsSending(false);
          e.target.reset();
          setTimeout(() => setIsSuccess(false), 5000);
      }, (error) => {
          console.log(error.text);
          setIsSending(false);
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      className="min-h-[calc(100vh-80px)] bg-white pt-12 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Brand Story & Info */}
          <div className="space-y-10 lg:pt-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-700 text-[10px] uppercase tracking-[0.5em] font-bold">Inquiries</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mt-2 mb-6 tracking-tighter leading-tight">
                Let's start a <br /> conversation.
              </h1>
              <p className="text-neutral-500 font-light leading-relaxed max-w-md">
                Whether you're seeking a signature scent or interested in a bespoke olfactory experience, our team is here to assist you.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-red-700 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">{info.label}</p>
                    <p className="font-serif text-base">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-neutral-100">
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">Follow the Scent</p>
              <a href="#" className="inline-flex items-center space-x-2 hover:text-red-700 transition-colors">
                <FiInstagram />
                <span className="font-serif italic text-lg">@ScentBySomori</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-50 p-8 md:p-12 rounded-sm relative overflow-hidden"
          >
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-6"
              >
                <FiCheckCircle className="text-red-700 w-12 h-12 mb-4" />
                <h3 className="font-serif text-2xl italic">Message Received</h3>
                <p className="text-neutral-500 text-sm mt-2">The concierge will reach out to you shortly.</p>
              </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">First Name</label>
                  <input name="first_name" required type="text" className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Last Name</label>
                  <input name="last_name" required type="text" className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                <input name="user_email" required type="email" className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Subject</label>
                <select name="subject" className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black outline-none transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Bespoke Services</option>
                  <option>Order Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-black outline-none transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-black text-white py-5 rounded-full uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-red-800 transition-all disabled:bg-neutral-400"
              >
                {isSending ? "Dispatching..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;