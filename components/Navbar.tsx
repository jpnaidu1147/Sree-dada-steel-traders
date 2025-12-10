import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
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

  // Check if we are on the home page
  const isHome = location.pathname === '/';
  
  // Navbar is transparent only on Home page when not scrolled and menu is closed
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  // Navbar Background
  const navBackground = isTransparent 
    ? 'bg-transparent py-4'
    : 'bg-steel-900/95 backdrop-blur-md shadow-md py-3 md:py-4';

  // Helper for link classes
  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    
    return isActive 
        ? 'text-brand-orange' 
        : 'text-gray-100 hover:text-white hover:scale-105';
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-full min-h-[60px]">
          {/* Brand Area - Absolute & Overflowing Logo */}
          <Link 
            to="/" 
            className="absolute top-0 left-4 md:left-8 z-50 group" 
            onClick={closeMobileMenu}
          >
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl bg-white overflow-hidden transition-transform duration-300 group-hover:scale-105 mt-2">
              <img 
                src="https://lh3.googleusercontent.com/d/1wQIhasjAyEeBE5rPSpMb2qffIcxCCWkJ" 
                alt="Shree Dada Steel Traders Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Company Name Text - Positioned to clear the logo */}
          <div className="flex items-center ml-32 md:ml-52 z-40">
            <Link to="/" onClick={closeMobileMenu} className="flex flex-col group">
              <span className="text-white font-extrabold text-lg md:text-3xl uppercase tracking-wider leading-none drop-shadow-md group-hover:text-steel-100 transition-colors">
                Shree Dada
              </span>
              <span className="text-brand-orange font-bold text-xs md:text-sm uppercase tracking-[0.2em] leading-tight group-hover:text-orange-400 transition-colors">
                Steel Traders
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm md:text-base font-bold uppercase tracking-wide transition-all ${getLinkClasses(link.path)}`}
                >
                  {link.label}
                </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-orange text-white px-6 py-2.5 rounded shadow-lg font-bold uppercase text-xs tracking-wider hover:bg-orange-700 transition-all hover:shadow-orange-900/20 transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 rounded-md transition-colors text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-steel-900 shadow-xl border-t border-steel-800 animate-slide-down">
          <div className="flex flex-col p-6 space-y-6 items-end text-right">
             {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`text-lg font-bold uppercase tracking-wide ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="bg-brand-orange text-white px-5 py-3 rounded text-center font-bold uppercase tracking-wider w-full"
            >
              Get a Quote
            </Link>
            <a href="tel:+919876543210" className="flex items-center justify-end gap-2 text-steel-400 pt-4 border-t border-steel-800 hover:text-white w-full">
              <Phone size={18} /> <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};