
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        scrolled
          ? "py-3 bg-white/90 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple to-teal rounded-md animate-pulse-slow"></div>
            <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
              <span className="text-xl font-bold text-gradient">G</span>
            </div>
          </div>
          <span className="text-xl font-poppins font-bold">Gamifievents</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className="nav-link">Features</a>
          <a href="#use-cases" className="nav-link">Use Cases</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#resources" className="nav-link">Resources</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="btn px-4 py-2">Login</Link>
          <a href="#cta" className="btn btn-primary px-5 py-2 rounded-md">Get Started</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            <a href="#features" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#use-cases" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Use Cases</a>
            <a href="#pricing" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#resources" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Resources</a>
          </nav>
          <div className="flex flex-col gap-3 pt-2 border-t">
            <Link to="/login" className="btn py-2 w-full text-center" onClick={() => setIsOpen(false)}>Login</Link>
            <a href="#cta" className="btn btn-primary py-2 w-full text-center" onClick={() => setIsOpen(false)}>Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
