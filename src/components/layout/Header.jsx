import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Trinelogosketch1.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-container py-4 transition-all duration-300 ${isScrolled ? 'bg-black/90' : 'bg-black/70'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="TRINE AI Music Label" className="h-12 mr-3" />
          <span className="trine-logo-text text-2xl text-white">TRINE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-accent trine-subtitle">Home</Link>
          <Link to="/artists" className="text-white hover:text-accent trine-subtitle">Artists</Link>
          <Link to="/releases" className="text-white hover:text-accent trine-subtitle">Releases</Link>
          <Link to="/about" className="text-white hover:text-accent trine-subtitle">About</Link>
          <Link to="/contact" className="text-white hover:text-accent trine-subtitle">Contact</Link>
          <Link to="/submit" className="trine-button">Submit</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black/90 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-accent trine-subtitle" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/artists" className="text-white hover:text-accent trine-subtitle" onClick={() => setIsMobileMenuOpen(false)}>Artists</Link>
            <Link to="/releases" className="text-white hover:text-accent trine-subtitle" onClick={() => setIsMobileMenuOpen(false)}>Releases</Link>
            <Link to="/about" className="text-white hover:text-accent trine-subtitle" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-white hover:text-accent trine-subtitle" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/submit" className="trine-button inline-block text-center" onClick={() => setIsMobileMenuOpen(false)}>Submit</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

