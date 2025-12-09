import React, { useState, useEffect } from 'react';
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

  // Check if we are on the home page
  const isHome = location.pathname === '/';
  
  // Navbar is transparent only on Home page when not scrolled and menu is closed
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  // Navbar Background
  const navBackground = isTransparent 
    ? 'bg-transparent py-6' 
    : 'bg-white/95 backdrop-blur-md shadow-md py-3 md:py-4';

  // Element Colors based on state
  const logoColor = isTransparent ? 'text-white' : 'text-steel-900';
  const menuButtonColor = isTransparent ? 'text-white' : 'text-steel-900';

  // Helper for link classes
  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    
    if (isTransparent) {
        return isActive 
            ? 'text-brand-orange' 
            : 'text-white/90 hover:text-white hover:scale-105';
    }
    
    // Solid background state
    return isActive 
        ? 'text-brand-orange' 
        : 'text-steel-700 hover:text-brand-orange';
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Text Only */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
            <div className={`font-extrabold text-xl md:text-2xl uppercase tracking-tighter transition-colors ${logoColor} group-hover:text-brand-orange`}>
              {COMPANY_NAME}
            </div>
          </Link>

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
            className={`md:hidden p-1 rounded-md transition-colors ${menuButtonColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-steel-100 animate-slide-down">
          <div className="flex flex-col p-6 space-y-6">
             {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`text-lg font-bold uppercase tracking-wide ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-steel-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="bg-brand-orange text-white px-5 py-3 rounded text-center font-bold uppercase tracking-wider"
            >
              Get a Quote
            </Link>
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-steel-600 pt-4 border-t border-steel-100">
              <Phone size={18} /> <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};