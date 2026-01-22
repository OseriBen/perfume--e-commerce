import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="group cursor-pointer">
    {/* Wrapped Image Box in Link */}
    <Link to={`/product/${product.id}`}>
      <div className="relative aspect-[3/4] bg-[#f9f9f9] mb-6 overflow-hidden flex items-center justify-center p-12">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
          <div className="bg-white p-3 shadow-xl rounded-full hover:bg-black hover:text-white transition-colors">
            <FiShoppingBag />
          </div>
        </div>
      </div>
    </Link>

    {/* Metadata wrapped in Link */}
    <Link to={`/product/${product.id}`}>
      <h3 className="text-sm uppercase tracking-tight font-medium mb-1 hover:text-red-700 transition-colors">{product.name}</h3>
    </Link>
    <p className="text-gray-400 text-sm font-serif italic">${product.price}</p>
  </div> 
);

export default ProductCard;