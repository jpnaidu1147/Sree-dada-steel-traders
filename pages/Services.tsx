import React from 'react';
import { SERVICES, INDUSTRIES_SERVED } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-20 relative min-h-screen">
      {/* Fixed Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/12a-4pUzHgniwQe0zMg9QMElGAXOBqIFH" 
          alt="Services Background" 
          className="w-full h-full object-cover opacity-30 fixed top-0 left-0" 
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="relative z-10">
        {/* Header - Transparent to show background */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4">Services</h1>
            <p className="text-xl text-steel-700 max-w-2xl font-medium">
              Empowering various sectors with robust steel supply chain solutions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`bg-white/80 backdrop-blur-sm flex gap-6 p-6 rounded-xl hover:bg-white/90 transition-colors shadow-sm ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-steel-900 rounded-lg flex items-center justify-center text-brand-orange shadow-lg">
                    <service.icon size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-steel-800 mb-3">{service.title}</h3>
                  <p className="text-steel-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
             <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-steel-900 mb-4">Industries We Serve</h2>
               <p className="text-steel-600">Each sector trusts us for consistent quality, timely delivery, and technical support.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {INDUSTRIES_SERVED.map((industry, idx) => (
                 <div key={idx} className="bg-white/50 border border-steel-200 p-6 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                   <CheckCircle2 className="text-brand-orange w-6 h-6 shrink-0" />
                   <span className="font-semibold text-steel-800 text-lg">{industry}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};