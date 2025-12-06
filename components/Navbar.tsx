import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkType } from '../types';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" onClick={closeMobileMenu}>
            <div className={`relative transition-all duration-300 ${isScrolled ? 'h-16 w-16' : 'h-24 w-24 md:h-28 md:w-28'}`}>
              <img 
                src="https://lh3.googleusercontent.com/d/1EJqa4_Z1WioEz9qJfCqYI273-Jr31jbA" 
                alt="Sree Dada Steel Traders Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className={`font-bold text-xl md:text-2xl uppercase tracking-tighter ${isScrolled || isMobileMenuOpen ? 'text-steel-900' : 'text-white'} group-hover:text-brand-orange transition-colors`}>
              {COMPANY_NAME}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-orange ${
                  location.pathname === link.path 
                    ? 'text-brand-orange' 
                    : (isScrolled ? 'text-steel-700' : 'text-steel-100')
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-orange text-white px-5 py-2 rounded-sm font-bold uppercase text-xs tracking-wider hover:bg-orange-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-orange"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-steel-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-steel-100 animate-slide-down">
          <div className="flex flex-col p-4 space-y-4">
             {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-steel-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919876543210" className="flex items-center gap-2 text-steel-600 pt-4 border-t border-steel-100">
              <Phone size={18} /> <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};