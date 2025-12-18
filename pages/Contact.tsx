import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { PHONE, EMAIL, GSTIN } from '../constants';
import { MapPin, Phone as PhoneIcon, Mail, Clock, FileText, ExternalLink, Smartphone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-steel-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-steel-900 pt-16 pb-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-steel-300 max-w-2xl">
            Have a requirement or need a price quote? We’d be happy to assist you.
          </p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        
        {/* Quick Contact Cards - Overlapping the hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           {/* Phone Card */}
           <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-brand-orange hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4 mx-auto">
               <PhoneIcon size={24} />
             </div>
             <h3 className="text-xl font-bold text-steel-800 text-center mb-4">Contact Numbers</h3>
             <div className="text-center space-y-3 text-steel-600 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-steel-900 flex items-center justify-center gap-2"><Smartphone size={16}/> Mobile</span>
                  {PHONE.split(',').map((num, i) => <span key={i} className="text-base">{num.trim()}</span>)}
                </div>
                <div className="w-2/3 h-px bg-steel-100 mx-auto my-2"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-steel-900 flex items-center justify-center gap-2"><PhoneIcon size={16}/> Landline</span>
                  <span>080-41242343</span>
                  <span>080-48354720</span>
                </div>
             </div>
           </div>

           {/* Email & GST Card */}
           <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-brand-blue hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4 mx-auto">
               <Mail size={24} />
             </div>
             <h3 className="text-xl font-bold text-steel-800 text-center mb-4">Email & GST</h3>
             <div className="text-center space-y-4 text-steel-600 text-sm">
                <div>
                  <span className="block font-bold text-steel-900 mb-1">Email Address</span>
                  <a href={`mailto:${EMAIL}`} className="text-base hover:text-brand-orange transition-colors break-all font-medium">{EMAIL}</a>
                </div>
                <div className="w-2/3 h-px bg-steel-100 mx-auto"></div>
                <div>
                  <span className="block font-bold text-steel-900 mb-2 flex items-center justify-center gap-2"><FileText size={16}/> GSTIN</span>
                  <span className="font-mono bg-steel-100 px-3 py-1.5 rounded text-steel-800 tracking-wider">{GSTIN}</span>
                </div>
             </div>
           </div>

           {/* Hours Card */}
           <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-brand-orange hover:-translate-y-1 transition-transform">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4 mx-auto">
               <Clock size={24} />
             </div>
             <h3 className="text-xl font-bold text-steel-800 text-center mb-4">Business Hours</h3>
             <div className="text-center space-y-3 text-steel-600 text-sm">
                <div>
                  <span className="font-bold text-steel-900 block mb-1">Monday - Saturday</span>
                  <span className="text-base">09:30 AM - 06:30 PM</span>
                </div>
                <div className="w-2/3 h-px bg-steel-100 mx-auto my-2"></div>
                <div>
                  <span className="font-bold text-brand-orange block mb-1">Sunday</span>
                  <span className="text-base">Closed</span>
                </div>
             </div>
           </div>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          
          {/* Left Side: Locations */}
          <div className="xl:col-span-7 space-y-10">
            <div className="flex items-center gap-4 mb-2">
               <div className="h-8 w-1.5 bg-brand-orange rounded-full"></div>
               <h2 className="text-3xl font-bold text-steel-900">Visit Our Locations</h2>
            </div>
            
            {/* Unit 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-steel-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
               <div className="p-8 border-b border-steel-100 bg-gradient-to-r from-white to-steel-50/50">
                  <div className="flex items-start gap-5">
                     <div className="bg-brand-orange text-white p-3 rounded-xl shadow-md shrink-0 mt-1">
                        <MapPin size={28} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-steel-900 mb-3">UNIT-1</h3>
                        <div className="text-steel-600 text-sm md:text-base uppercase font-medium space-y-1.5 leading-relaxed">
                           <p className="text-brand-blue font-bold text-lg">SHREE DADA STEEL TRADERS</p>
                           <p>#309/1, MARIYAPPA COMPLEX, 8TH CROSS, 4TH PHASE,</p>
                           <p>NEAR MARIYAPPA KALYANA MANTAPA,</p>
                           <p>PEENYA INDUSTRIAL AREA, BANGALORE - 560058</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="h-[400px] w-full relative group">
                  <iframe 
                    src="https://maps.google.com/maps?q=13.02127997642718,77.51581177044903&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Unit-1 Map"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                   <a 
                    href="https://www.google.com/maps/search/?api=1&query=13.02127997642718,77.51581177044903" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-brand-blue px-4 py-2.5 rounded-lg shadow-lg font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 opacity-90 hover:opacity-100"
                  >
                    <ExternalLink size={16} /> Open in Google Maps
                  </a>
               </div>
            </div>

            {/* Unit 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-steel-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
               <div className="p-8 border-b border-steel-100 bg-gradient-to-r from-white to-steel-50/50">
                  <div className="flex items-start gap-5">
                     <div className="bg-brand-blue text-white p-3 rounded-xl shadow-md shrink-0 mt-1">
                        <MapPin size={28} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-steel-900 mb-3">UNIT-2</h3>
                        <div className="text-steel-600 text-sm md:text-base uppercase font-medium space-y-1.5 leading-relaxed">
                           <p className="text-brand-blue font-bold text-lg">SHREE DADA STEEL TRADERS</p>
                           <p>UNIT 2 MUNICIPAL NO 385 & 386</p>
                           <p>10TH CROSS, 4TH PHASE PEENYA INDUSTRIAL AREA,</p>
                           <p>BANGALORE-560058</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="h-[400px] w-full relative group">
                  <iframe 
                    src="https://maps.google.com/maps?q=13.021127548752265,77.51152088008072&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Unit-2 Map"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=13.021127548752265,77.51152088008072" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-brand-blue px-4 py-2.5 rounded-lg shadow-lg font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 opacity-90 hover:opacity-100"
                  >
                    <ExternalLink size={16} /> Open in Google Maps
                  </a>
               </div>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="xl:col-span-5">
             <div className="sticky top-28 space-y-8">
               <div className="flex items-center gap-4 mb-2 xl:hidden">
                  <div className="h-8 w-1.5 bg-brand-blue rounded-full"></div>
                  <h2 className="text-3xl font-bold text-steel-900">Send Enquiry</h2>
               </div>
               
               <ContactForm />
               
               {/* Logo Branding */}
               <div className="flex justify-center py-4">
                 <div className="relative group cursor-pointer">
                    <div className="absolute -inset-8 bg-brand-blue/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img 
                       src="https://lh3.googleusercontent.com/d/1P5s2pb63hyG9mfeGZRh0pQthq3X0YdAu" 
                       alt="Shree Dada Steel Traders Logo" 
                       className="relative w-48 h-48 lg:w-56 lg:h-56 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};