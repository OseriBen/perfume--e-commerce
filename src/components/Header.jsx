import Hero from "./Hero";
import perfumeBg from "../assets/perfume.png";

const Header = () => {
  return (
    <header className="relative min-h-screen overflow-hidden bg-white">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${perfumeBg})` }}
      />

      {/* Subtle gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        <Hero />
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5"></div>
    </header>
  );
};

export default Header;