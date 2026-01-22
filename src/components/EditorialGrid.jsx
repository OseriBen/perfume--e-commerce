import React from 'react';
import { Link } from 'react-router-dom'; 
import FormenImg from "../assets/Formen.jpg";
import ForwomenImg from "../assets/Forwomen.jpg";
import UnisexImg from "../assets/Unisex.jpg";
import bgImg from "../assets/background.png";

const EditorialGrid = () => {
  const sections = [
    { title: "FOR MEN", img: FormenImg, subtitle: "Bold & Timeless" },
    { title: "FOR WOMEN", img: ForwomenImg, subtitle: "Elegant & Floral" },
    { title: "UNISEX", img: UnisexImg, subtitle: "Pure & Balanced" },
  ];

  return (
    <section
      className="relative w-full py-24 bg-neutral-950 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-serif tracking-tighter mb-4">
            Curated Collections
          </h2>
          <div className="w-20 h-[1px] bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            
            <Link 
              to="/collections" 
              key={section.title}
              className="relative group cursor-pointer overflow-hidden rounded-sm h-[500px] shadow-2xl transition-all duration-700 hover:shadow-red-900/20 block"
            >
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-4">
                <p className="text-red-500 text-[10px] tracking-[0.3em] uppercase mb-2 font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {section.subtitle}
                </p>
                <h3 className="text-white text-3xl font-serif tracking-widest mb-6">
                  {section.title}
                </h3>
                
                {/* Visual Button */}
                <div className="relative overflow-hidden border border-white/20 px-8 py-3 text-[10px] text-white uppercase tracking-[0.2em] font-bold backdrop-blur-md transition-all duration-300 group-hover:bg-red-700 group-hover:border-red-700">
                  Explore Now
                </div>
              </div>

              <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGrid;