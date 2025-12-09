import React, { useState } from 'react';
import { COMPANY_NAME, ADDRESS, PHONE, EMAIL, NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone as PhoneIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-steel-900 text-steel-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-6 flex flex-col items-start gap-4">
               <div className="bg-white p-3 rounded-xl inline-block shadow-lg">
                  <img src="https://lh3.googleusercontent.com/d/1iZq8BKGkVomyi5s32Qp6AN5V-8MjNGML" alt="Sree Dada Steel Traders Logo" className="h-20 w-auto object-contain" />
               </div>
               <h3 className="text-white text-lg font-bold uppercase tracking-wider">{COMPANY_NAME}</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-steel-400">
              Your trusted partner for quality steel supply in Bangalore. We cater to construction, infrastructure, and industrial fabrication needs with precision and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h3>
             <ul className="space-y-4 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin className="text-brand-orange shrink-0" size={18} />
                 <span>{ADDRESS}</span>
               </li>
               <li className="flex items-center gap-3">
                 <PhoneIcon className="text-brand-orange shrink-0" size={18} />
                 <a href={`tel:${PHONE.replace(/\s/g,'')}`} className="hover:text-white">{PHONE}</a>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="text-brand-orange shrink-0" size={18} />
                 <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-steel-800 mt-12 pt-8 text-center text-xs text-steel-500">
          <p>&copy; 2025 {COMPANY_NAME}. All Rights Reserved.</p>
          <p className="mt-1">Your trusted partner for quality steel supply in Bangalore.</p>
        </div>
      </div>
    </footer>
  );
};