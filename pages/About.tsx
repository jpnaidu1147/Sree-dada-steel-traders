import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Header */}
      <div className="bg-steel-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4">About Us</h1>
          <p className="text-xl text-steel-600 max-w-2xl">Who We Are</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-steel-800 mb-6">Our Story</h2>
            <p className="text-steel-600 mb-6 leading-relaxed">
              Sree Dada Steel Traders is a leading steel trading and distribution company based in Bangalore, India. Established with a vision to deliver high-quality steel products to industries and builders, we have grown to become one of the most trusted suppliers in the region.
            </p>
            <p className="text-steel-600 mb-6 leading-relaxed">
              With over two decades of experience, we understand the needs of modern construction and industrial projects. Our inventory, customer service, and delivery capabilities make us a preferred choice for businesses of all sizes.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://lh3.googleusercontent.com/d/1aMM2PT8Z4vL1nXAdMlboKo8CIeKeQ0QI" 
              alt="Sree Dada Steel Traders Team" 
              className="rounded-lg shadow-xl w-full h-auto object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white p-8 shadow-lg border-t-4 border-brand-blue rounded">
            <h3 className="text-2xl font-bold text-steel-900 mb-4">Our Vision</h3>
            <p className="text-steel-600">
              To be Karnataka’s most reliable and customer-focused steel trading company, delivering strength and value to every structure.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg border-t-4 border-brand-orange rounded">
            <h3 className="text-2xl font-bold text-steel-900 mb-4">Our Mission</h3>
            <ul className="list-disc list-inside text-steel-600 space-y-2">
              <li>To supply premium-grade steel with consistency</li>
              <li>To build long-term relationships based on trust and service</li>
              <li>To ensure competitive pricing and timely delivery</li>
              <li>To support industries with reliable material availability</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-steel-800 mb-10 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-steel-50 p-6 rounded border-l-4 border-brand-blue hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl mb-2 text-steel-900">Integrity</h4>
              <p className="text-steel-600 text-sm">Fair, transparent, and responsible operations.</p>
            </div>
            <div className="bg-steel-50 p-6 rounded border-l-4 border-brand-blue hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl mb-2 text-steel-900">Commitment</h4>
              <p className="text-steel-600 text-sm">Delivering on promises without compromise.</p>
            </div>
             <div className="bg-steel-50 p-6 rounded border-l-4 border-brand-blue hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl mb-2 text-steel-900">Quality</h4>
              <p className="text-steel-600 text-sm">Steel products that meet industry standards.</p>
            </div>
             <div className="bg-steel-50 p-6 rounded border-l-4 border-brand-blue hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl mb-2 text-steel-900">Innovation</h4>
              <p className="text-steel-600 text-sm">Modern logistics and customer-friendly service.</p>
            </div>
          </div>
        </div>

        {/* Leadership & Team Section */}
        <div className="mt-24">
            <h2 className="text-3xl font-bold text-steel-800 mb-12 text-center">Leadership & Team</h2>
            
            {/* Director Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1 relative">
                    <div className="absolute -inset-4 bg-steel-100 rounded-lg -z-10 transform -rotate-2"></div>
                    <img 
                      src="https://lh3.googleusercontent.com/d/1Qs6REp1I-vGBt7YArg8zb15NTX2FtraD" 
                      alt="Director at Sree Dada Steel Traders" 
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover object-top"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-steel-800 mb-4">Visionary Leadership</h3>
                    <p className="text-steel-600 leading-relaxed mb-6">
                      Our leadership is defined by decades of industry expertise and a steadfast commitment to ethical business practices. The director of Sree Dada Steel Traders ensures that every strategic decision aligns with our core mission of quality and reliability, fostering a culture of excellence that permeates every level of the organization.
                    </p>
                    <div className="flex gap-2">
                       <div className="h-2 w-16 bg-brand-orange rounded-full"></div>
                       <div className="h-2 w-4 bg-brand-blue rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Team/Reception Block */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-2xl font-bold text-steel-800 mb-4">Dedicated Customer Support</h3>
                    <p className="text-steel-600 leading-relaxed mb-6">
                      Our front-office and logistics teams are the backbone of our customer service. We pride ourselves on creating a welcoming and professional environment where your queries are addressed promptly. From the initial consultation to final delivery, our staff ensures a seamless and hassle-free experience.
                    </p>
                     <ul className="space-y-3 text-steel-700 font-medium">
                       <li className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                         Professional Consultation
                       </li>
                       <li className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                         Real-time Order Tracking support
                       </li>
                       <li className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                         Prompt query resolution
                       </li>
                     </ul>
                </div>
                <div className="relative">
                     <div className="absolute -inset-4 bg-steel-100 rounded-lg -z-10 transform rotate-2"></div>
                    <img 
                      src="https://lh3.googleusercontent.com/d/1nD76JwzZrbUsKxxUEypVhUEr7nG5Pmub" 
                      alt="Sree Dada Steel Traders Office Environment" 
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>

        {/* Infrastructure Highlights */}
        <div className="mt-24 bg-steel-900 rounded-2xl p-8 md:p-12 text-white">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Robust Infrastructure</h2>
                <p className="text-steel-300 mb-6 leading-relaxed">
                  We have invested significantly in building a robust infrastructure that supports our large-scale operations. Our warehousing and logistics capabilities are designed to handle bulk requirements efficiently.
                </p>
                 <div className="grid grid-cols-2 gap-4">
                     <div className="bg-steel-800 p-4 rounded border border-steel-700">
                        <h4 className="font-bold text-brand-orange mb-1">Stockyard</h4>
                        <p className="text-xs text-steel-400">Large capacity indoor storage</p>
                     </div>
                     <div className="bg-steel-800 p-4 rounded border border-steel-700">
                        <h4 className="font-bold text-brand-orange mb-1">Fleet</h4>
                        <p className="text-xs text-steel-400">Dedicated vehicles for transport</p>
                     </div>
                 </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                    <span className="block text-4xl font-bold text-brand-orange mb-2">25+</span>
                    <span className="text-sm text-steel-300 uppercase tracking-wide">Years Exp.</span>
                 </div>
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                    <span className="block text-4xl font-bold text-brand-orange mb-2">500+</span>
                    <span className="text-sm text-steel-300 uppercase tracking-wide">Projects</span>
                 </div>
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                    <span className="block text-4xl font-bold text-brand-orange mb-2">100%</span>
                    <span className="text-sm text-steel-300 uppercase tracking-wide">Quality</span>
                 </div>
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                    <span className="block text-4xl font-bold text-brand-orange mb-2">24/7</span>
                    <span className="text-sm text-steel-300 uppercase tracking-wide">Support</span>
                 </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};