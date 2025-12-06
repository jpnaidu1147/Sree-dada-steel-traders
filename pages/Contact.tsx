import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { ADDRESS, PHONE, EMAIL, GSTIN } from '../constants';
import { MapPin, Phone as PhoneIcon, Mail, Clock, FileText, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="w-full pt-20">
       <div className="bg-steel-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-steel-300 max-w-2xl">
            Have a requirement or need a price quote? We’d be happy to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold text-steel-800 mb-8">Reach Out to Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Location</h3>
                  <p className="text-steel-600 max-w-xs">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">GSTIN</h3>
                  <p className="text-steel-600 font-mono">{GSTIN}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <PhoneIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Phone</h3>
                  <p className="text-steel-600">{PHONE}</p>
                  <p className="text-steel-500 text-sm">Mon-Sat 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Email</h3>
                  <p className="text-steel-600">{EMAIL}</p>
                </div>
              </div>
               
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-steel-900">Business Hours</h3>
                  <p className="text-steel-600">Monday - Saturday: 09:00 AM - 07:00 PM</p>
                  <p className="text-steel-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 bg-steel-200 h-64 rounded-lg overflow-hidden relative group shadow-inner border border-steel-300">
              <iframe 
                src="https://maps.google.com/maps?q=Shree%20Dada%20Steel%20Traders%2C%20Peenya%20Industrial%20Area%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/k6EcvzVzM4QRzhMw6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-brand-blue px-4 py-2 rounded shadow-lg font-bold text-sm hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 opacity-90 hover:opacity-100"
              >
                <ExternalLink size={16} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};