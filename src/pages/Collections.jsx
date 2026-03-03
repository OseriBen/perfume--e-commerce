import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";



const perfumeImages = Object.values(
  import.meta.glob("../assets/perfume*.jpg", { eager: true })
).map((module) => module.default);

// Data for 20 Perfumes
const ALL_PERFUMES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Somori Fragrance №${i + 1}`,
  volume: "EDP 100ml",
  price: 120 + i * 5,
  category:
    i % 3 === 0 ? "Men" : i % 3 === 1 ? "Women" : "Unisex",
  image: perfumeImages[i],
}));

const Collections = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    { name: "All", count: 20 },
    { name: "Men", count: 7 },
    { name: "Women", count: 7 },
    { name: "Unisex", count: 6 },
  ];

  const filteredProducts =
    filter === "All"
      ? ALL_PERFUMES
      : ALL_PERFUMES.filter(
          (p) => p.category === filter
        );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-serif mb-3 italic">
            The Library
          </h1>
          <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px] font-bold">
            Explore Our Full Range
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-12 mb-12 border-b border-neutral-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className="group relative flex flex-col items-center"
            >
              <span
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
                  filter === cat.name
                    ? "text-red-700"
                    : "text-neutral-400 group-hover:text-black"
                }`}
              >
                {cat.name === "All"
                  ? cat.name
                  : `For ${cat.name}`}
              </span>

              <span className="text-[9px] text-neutral-300 mt-1">
                {cat.count} Scent(s)
              </span>

              {filter === cat.name && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-[25px] w-1 h-1 bg-red-700 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-24 flex flex-col items-center">
          <div className="h-[1px] w-16 bg-neutral-100 mb-8"></div>

          <div className="flex items-center space-x-6">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 cursor-pointer hover:text-black transition-colors">
              Prev
            </span>

            <div className="flex items-center space-x-2">
              {[1, 2, 3, "...", 9].map((num, i) => (
                <button
                  key={i}
                  className={`text-[10px] font-bold w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                    num === 1
                      ? "bg-black text-white rounded-full"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <span className="text-[10px] uppercase tracking-widest text-neutral-400 cursor-pointer hover:text-black transition-colors">
              Next
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Collections;
