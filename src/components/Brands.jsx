import React from 'react';

const Brands = () => {
  const logos = ['Dior', 'TOM FORD', 'CHANEL', 'Calvin Klein', 'CLINIQUE', 'D&G'];

  return (
    <div className="bg-neutral-950 py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="text-center text-[9px] tracking-[0.4em] text-gray-600 uppercase mb-12 font-bold">
          Our Global Partners
        </p>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8">
          {logos.map((logo) => (
            <span 
              key={logo} 
              className="text-white text-lg md:text-xl font-serif font-bold tracking-[0.2em] opacity-30 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:text-red-600 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;