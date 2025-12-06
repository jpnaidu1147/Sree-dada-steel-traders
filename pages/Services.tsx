import React from 'react';
import { SERVICES, INDUSTRIES_SERVED } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Header with Background Image */}
      <div className="relative py-24 bg-steel-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1OVREfNl83reqBsHw3uSHBizRpWMXvUP8" 
            alt="Steel Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-steel-900/90 to-steel-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-steel-200 max-w-2xl">
            Empowering various sectors with robust steel supply chain solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex gap-6 p-6 rounded-xl hover:bg-steel-50 transition-colors ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
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

        <div className="mt-20 border-t border-steel-200 pt-20">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-steel-900 mb-4">Industries We Serve</h2>
             <p className="text-steel-600">Each sector trusts us for consistent quality, timely delivery, and technical support.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {INDUSTRIES_SERVED.map((industry, idx) => (
               <div key={idx} className="bg-white border border-steel-200 p-6 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                 <CheckCircle2 className="text-brand-orange w-6 h-6 shrink-0" />
                 <span className="font-semibold text-steel-800 text-lg">{industry}</span>
               </div>
             ))}
           </div>
        </div>
        
        <div className="mt-20 border-t border-steel-200 pt-20">
           <h2 className="text-3xl font-bold text-center text-steel-900 mb-12">Project Gallery</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://images.unsplash.com/photo-1590059390047-58fa6c17e18e?auto=format&fit=crop&q=80&w=600" alt="Project 1" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity" />
             <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600" alt="Project 2" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity" />
             <img src="https://images.unsplash.com/photo-1533062618-9752d5a06c83?auto=format&fit=crop&q=80&w=600" alt="Project 3" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity" />
             <img src="https://images.unsplash.com/photo-1605218427306-6354432cb244?auto=format&fit=crop&q=80&w=600" alt="Project 4" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity" />
           </div>
        </div>
      </div>
    </div>
  );
};