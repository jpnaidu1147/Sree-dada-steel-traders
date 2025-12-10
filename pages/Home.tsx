import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CORE_VALUES, COMPANY_NAME } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  const inventoryImages = [
    { src: "https://lh3.googleusercontent.com/d/1nY7MJoDNbxR7Cew-N4R7AKcgpBHUi2dy", label: "Comprehensive Warehouse Facility" },
    { src: "https://lh3.googleusercontent.com/d/1RHSGASzhrkuHVRfPqHCV1k-wY1079pd0", label: "Structural Steel Inventory" },
    { src: "https://lh3.googleusercontent.com/d/1j7HpCebagYV2g99YxJETngaRUUGRM6Ws", label: "High-Quality Pipes" },
    { src: "https://lh3.googleusercontent.com/d/1RguWHuPS-Jtub1h5xoGpK_UDAIgqHiJx", label: "Industrial Piping Stock" },
    { src: "https://lh3.googleusercontent.com/d/1_qNPicg5V1E6rVMOm4hm62BCaa8WzLYf", label: "Heavy Structural Sections" },
    { src: "https://lh3.googleusercontent.com/d/1nacljezK7vsQPxoRmwaED49raPvF1ckc", label: "Large Diameter Tubes" },
    { src: "https://lh3.googleusercontent.com/d/1_CEnKeQzzsWWceTPIrUHv-K-cvYzJtU_", label: "Steel Plates & Sheets" },
  ];

  const brandLogos = [
    "https://lh3.googleusercontent.com/d/1Bevz1jB_5KzyT2wUIsM6MuxpXxVm9bzX",
    "https://lh3.googleusercontent.com/d/1_qCkSQ623Tcgd0OhkhE4XCpMkHmpiEDq",
    "https://lh3.googleusercontent.com/d/1FBfDMWBiAucCmvlsrBK0jNir7B9FWdRG",
    "https://lh3.googleusercontent.com/d/1K4jK_KbvHfCQxVTPlmI6NQFK2cwSO_MR",
    "https://lh3.googleusercontent.com/d/1QeVw4UZz1-FjET2ffybFMD1xdY4lDW4j",
    "https://lh3.googleusercontent.com/d/19-pVgSHq3fxEnCXM0q6Nmh1ym7EBLb_i",
    "https://lh3.googleusercontent.com/d/1I7kRTCWSjwTfaCUcfsVtp0h-LFiRMsEK",
    "https://lh3.googleusercontent.com/d/18cp5RPICoq4bAi9BFQzDvFp228sYQ-q7",
    "https://lh3.googleusercontent.com/d/1qZRCboAUwtmrDRswEV0Gs_QOsQMatUql"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1J2-MxbfEbD0wssPIvtwz4KHAwCn5R3wu"
            alt="Sree Dada Steel Traders Warehouse Entrance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-steel-900/60 bg-blend-multiply"></div>
          {/* Steel Texture Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-orange font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in-up">
            {COMPANY_NAME}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up delay-100">
            Strength That <span className="text-brand-blue">Builds</span> The Future
          </h1>
          <p className="text-lg md:text-2xl text-steel-200 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200 font-light">
            Premium quality steel products delivered with reliability, precision, and trust.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
             <Link 
              to="/contact"
              className="metal-shine bg-brand-blue text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50"
            >
              Get a Quote
            </Link>
            <Link 
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-steel-900 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-brand-orange"></div>
                <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Since 1998</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-6">25+ Years of Excellence</h2>
              <p className="text-steel-600 mb-6 leading-relaxed">
                Sree Dada Steel Traders is one of Bangalore’s trusted names in steel trading and distribution. With over 25 years of industry expertise, we supply high-quality steel materials to construction companies, fabricators, infrastructure developers, and commercial projects across Karnataka.
              </p>
              <p className="text-steel-800 font-medium mb-8">
                 Our commitment is simple — Quality Products. Timely Delivery. Competitive Pricing.
              </p>
              <Link to="/about" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Read More About Us <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 translate-y-8">
                  <img src="https://lh3.googleusercontent.com/d/1I-ary1WpwrtM9ePi7-et7zhlfw2PMZJB" alt="Steel Inventory" className="rounded-lg shadow-lg w-full h-40 object-cover" />
                  <img src="https://lh3.googleusercontent.com/d/16FnJ3hLg5ork_d_bU5xdEjUtlwf95uZz" alt="Steel Operations" className="rounded-lg shadow-lg w-full h-40 object-cover" />
               </div>
               <div>
                  <img src="https://lh3.googleusercontent.com/d/122EJmpQKOhlcoo5iht-cxxRJfFZW70A8" alt="Logistics and Delivery" className="rounded-lg shadow-lg w-full h-full min-h-[300px] object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 bg-steel-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">Our Product Range</h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-steel-600">A one-stop hub for all steel materials required in construction and fabrication.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-steel-800 mb-2">{product.name}</h3>
                  <p className="text-steel-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <Link to="/products" className="text-brand-orange font-semibold text-sm hover:underline">View Specifications</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-block border border-steel-800 text-steel-800 px-8 py-3 rounded font-bold uppercase hover:bg-steel-800 hover:text-white transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Inventory & Warehouse Section */}
      <section className="py-20 relative bg-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1jOgfd1jjkPlOXhblTYxz9WPizuQ27AP0=w600-h600" 
            alt="Warehouse Background" 
            className="w-full h-full object-cover opacity-30" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Our Stock</span>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mt-2 mb-4">Massive Inventory & Warehouse</h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
            <p className="text-steel-600 max-w-2xl mx-auto">
              We maintain a large, diverse inventory of steel products in our indoor warehouse, ensuring immediate availability and protection from weather elements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* First item spans 2 columns on large screens to break grid monotony */}
             <div className="group overflow-hidden rounded-lg shadow-lg relative lg:col-span-2">
                <img src={inventoryImages[0].src} alt={inventoryImages[0].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xl font-semibold tracking-wide border-l-4 border-brand-orange pl-3">{inventoryImages[0].label}</span>
                </div>
             </div>

             {inventoryImages.slice(1).map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-lg shadow-lg relative">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold tracking-wide border-l-4 border-brand-orange pl-3">{img.label}</span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Authorized Distributor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mt-2 mb-4">Our Brands</h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Text Content */}
            <div className="lg:w-1/2 text-steel-700 space-y-4">
              <p className="leading-relaxed">
                Shree Dada Steel Traders is a trusted steel distribution and supply company serving the construction, infrastructure, and industrial sectors. As a multi-brand distributor, the company deals with India’s leading steel manufacturers including <span className="font-semibold text-steel-900">JSW, SAIL, JSPL, Tata Steel, AMNS, Posco, Apollo, Nezone, and Vizag Steel (RINL)</span> — ensuring consistent quality, reliability, and genuine materials for every client requirement.
              </p>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-blue shadow-sm my-6">
                <p className="font-bold text-steel-900 mb-3">
                  With a comprehensive product portfolio, we operate as a one-stop solution for all steel needs, offering:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>TMT Bars (all grades and diameters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Structural Steel — Angles, Channels, Beams, Flats, Rounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Pipes & Tubes — MS pipes, Square/Rectangular hollow sections, Stainless steel pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Sheets, Plates, Coils, and other raw materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Industrial and fabrication steel supplies</span>
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed">
                Backed by strong brand partnerships, efficient logistics, and customer-centric service, the company supports builders, contractors, fabricators, and industrial clients with timely deliveries and competitive pricing.
              </p>
              <p className="leading-relaxed font-bold text-steel-800 italic">
                 "Shree Dada Steel Traders continues to grow as a dependable steel distribution partner, offering high-quality materials, a wide product range, and seamless supply for projects of any scale."
              </p>
            </div>

            {/* Logo Grid */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-steel-100">
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {brandLogos.map((logo, index) => (
                      <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 h-32 group">
                        <img 
                          src={logo} 
                          alt={`Partner Brand ${index + 1}`} 
                          className="max-w-full max-h-full object-contain transition-transform duration-300 transform group-hover:scale-90" 
                        />
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-steel-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Our Strength</span>
             <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose Shree Dada Steel?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="bg-steel-800 p-6 rounded-lg border border-steel-700 hover:border-brand-orange transition-colors">
                <val.icon className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="text-lg font-bold mb-3">{val.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for reliable steel suppliers in Bangalore?</h2>
          <p className="text-blue-100 text-xl mb-8">Get in touch with our team for pricing, availability, and technical support.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-blue px-10 py-4 rounded font-bold text-lg hover:bg-brand-orange hover:text-white transition-all shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};