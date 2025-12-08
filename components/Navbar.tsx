import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Determine Navbar Background
  // Home: Transparent at top, White when scrolled or mobile menu open
  // Inner Pages: Always White
  const navBackground = (isHome && !isMobileMenuOpen)
    ? (isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4')
    : 'bg-white/95 backdrop-blur-sm shadow-md py-2';

  // Determine Text Color for Logo & Mobile Menu Icon
  // Home Top: White
  // Scrolled / Inner Pages / Mobile Menu Open: Dark Steel
  const baseTextColor = (isHome && !isScrolled && !isMobileMenuOpen) 
    ? 'text-white' 
    : 'text-steel-900';

  // Determine Logo Size
  // Home Top: Large
  // Scrolled / Inner Pages / Mobile Menu Open: Compact
  const logoSizeClass = (isHome && !isScrolled && !isMobileMenuOpen)
    ? 'h-32 w-32 md:h-40 md:w-40'
    : 'h-20 w-20';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" onClick={closeMobileMenu}>
            <div className={`relative transition-all duration-300 ${logoSizeClass}`}>
              <img 
                src="https://lh3.googleusercontent.com/d/1AyBQb0GKqO2xUSB8XO7eD7-rAwxEo8wG" 
                alt="Sree Dada Steel Traders Logo" 
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
            <div className={`font-bold text-xl md:text-2xl uppercase tracking-tighter transition-colors group-hover:text-brand-orange ${baseTextColor}`}>
              {COMPANY_NAME}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              // Link Color Logic:
              // Active: Orange
              // Home Top (Inactive): White
              // Scrolled or Inner Page (Inactive): Dark Gray
              let linkColorClass = '';
              
              if (isActive) {
                linkColorClass = 'text-brand-orange';
              } else if (isHome && !isScrolled) {
                linkColorClass = 'text-steel-100';
              } else {
                linkColorClass = 'text-steel-700';
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-orange ${linkColorClass}`}
                >
                  {link.label}
                </Link>
              );
            })}
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
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={baseTextColor} />}
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