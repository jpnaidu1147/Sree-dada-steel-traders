import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { ADDRESS, PHONE, EMAIL, GSTIN } from '../constants';
import { MapPin, Phone as PhoneIcon, Smartphone, Mail, Clock, FileText, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="w-full pt-20">
       <div className="bg-steel-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-end text-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-steel-300 max-w-2xl">
            Have a requirement or need a price quote? We’d be happy to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side - Left */}
          <div className="text-left">
            {/* Logo Placement - Aligned Left */}
            <div className="mb-12 flex justify-center lg:justify-start">
               <div className="relative group">
                 {/* Decorative Glow */}
                 <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                 
                 {/* Image Container */}
                 <div className="relative">
                   <img 
                     src="https://lh3.googleusercontent.com/d/1P5s2pb63hyG9mfeGZRh0pQthq3X0YdAu" 
                     alt="Shree Dada Steel Traders Official Logo" 
                     className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                   />
                 </div>
               </div>
            </div>

            <h2 className="text-3xl font-bold text-steel-800 mb-8">Reach Out to Us</h2>
            
            <div className="space-y-12 flex flex-col items-start w-full">
              
              {/* Unit 1 Section */}
              <div className="flex flex-col w-full gap-6">
                <div className="flex items-start justify-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-steel-900 mb-1">UNIT-1</h3>
                    <div className="text-steel-600 max-w-sm space-y-1 text-sm md:text-base uppercase">
                      <p className="font-bold text-steel-800">SHREE DADA STEEL TRADERS</p>
                      <p>#309/1, MARIYAPPA COMPLEX, 8TH CROSS, 4TH PHASE,</p>
                      <p>NEAR MARIYAPPA KALYANA MANTAPA,</p>
                      <p>PEENYA INDUSTRIAL AREA, BANGALORE - 560058</p>
                    </div>
                  </div>
                </div>
                {/* Unit 1 Map */}
                <div className="w-full h-80 rounded-lg overflow-hidden relative group shadow-lg border border-steel-300 md:ml-16">
                  <iframe 
                    src="https://maps.google.com/maps?q=13.02127997642718,77.51581177044903&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Dada Steel Traders Unit-1 Location"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=13.02127997642718,77.51581177044903" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 bg-white text-brand-blue px-4 py-2 rounded shadow-lg font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 opacity-90 hover:opacity-100"
                  >
                    <ExternalLink size={16} /> Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Unit 2 Section */}
              <div className="flex flex-col w-full gap-6">
                <div className="flex items-start justify-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-steel-900 mb-1">UNIT-2</h3>
                    <div className="text-steel-600 max-w-sm space-y-1 text-sm md:text-base uppercase">
                      <p className="font-bold text-steel-800">SHREE DADA STEEL TRADERS</p>
                      <p>UNIT 2 MUNICIPAL NO 385 & 386</p>
                      <p>10TH CROSS, 4TH PHASE PEENYA INDUSTRIAL AREA,</p>
                      <p>BANGALORE-560058</p>
                    </div>
                  </div>
                </div>
                {/* Unit 2 Map */}
                <div className="w-full h-80 rounded-lg overflow-hidden relative group shadow-lg border border-steel-300 md:ml-16">
                  <iframe 
                    src="https://maps.google.com/maps?q=13.021127548752265,77.51152088008072&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Dada Steel Traders Unit-2 Location"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=13.021127548752265,77.51152088008072" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 bg-white text-brand-blue px-4 py-2 rounded shadow-lg font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 opacity-90 hover:opacity-100"
                  >
                    <ExternalLink size={16} /> Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                   <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">GSTIN</h3>
                  <p className="text-steel-600 font-mono">{GSTIN}</p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Phone (Mobile)</h3>
                  {PHONE.split(',').map((num, index) => (
                    <p key={index} className="text-steel-600">{num.trim()}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <PhoneIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Landline</h3>
                  <p className="text-steel-600">080-41242343</p>
                  <p className="text-steel-600">080-48354720</p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Email</h3>
                  <p className="text-steel-600">{EMAIL}</p>
                </div>
              </div>
               
              <div className="flex items-start justify-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Business Hours</h3>
                  <p className="text-steel-600">Monday - Saturday: 09:30 AM - 06:30 PM</p>
                  <p className="text-steel-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Old Map Container Removed */}
          </div>

          {/* Form Side - Right */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};