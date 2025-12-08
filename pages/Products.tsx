import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.imageUrl);

  // Combine main image and gallery images for the thumbnail list
  const allImages = [product.imageUrl, ...(product.galleryImages || [])];

  return (
    <div className="flex flex-col bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      <div className="h-64 overflow-hidden relative">
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-steel-800 mb-2">{product.name}</h3>
        <p className="text-steel-600 mb-4 flex-1 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Image Gallery Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  activeImage === img ? 'border-brand-orange ring-1 ring-brand-orange' : 'border-steel-200 hover:border-steel-400'
                }`}
              >
                <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="mb-6 space-y-2">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-steel-500">
              <Check size={16} className="text-brand-blue mr-2 shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="w-full block text-center bg-steel-100 text-steel-800 font-bold py-3 rounded hover:bg-steel-800 hover:text-white transition-colors"
        >
          Enquire Price
        </Link>
      </div>
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <div className="w-full pt-20 relative min-h-screen bg-steel-50">
      {/* Fixed Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/d/1M988rtDIV14qpMiLmwPZ8_ff5HBjVyqQ" 
          alt="Products Background" 
          className="w-full h-full object-cover fixed top-0 left-0 opacity-30" 
        />
      </div>

      <div className="relative z-10">
        <div className="bg-steel-900 py-16 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-steel-300 max-w-2xl">
              Comprehensive range of ISI certified steel products for all construction and industrial needs.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bulk Order Banner */}
          <div className="mt-20 bg-brand-blue rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h2 className="text-3xl font-bold mb-2">Need Bulk Quantities?</h2>
              <p className="text-blue-100">We offer special pricing for bulk orders and large-scale infrastructure projects.</p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-brand-blue px-8 py-3 rounded font-bold uppercase hover:bg-brand-orange hover:text-white transition-colors whitespace-nowrap"
            >
              Get Commercial Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};