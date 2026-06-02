import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans bg-brand-50 selection:bg-accent-gold/20 scroll-smooth">
      {/* Top Contact Bar */}
      <div className="bg-brand-900 text-brand-50 py-2.5 px-6 sm:px-12 text-xs font-medium tracking-wider flex flex-col sm:flex-row justify-center sm:justify-between items-center z-50 relative gap-2 sm:gap-0">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
            <Mail size={14} /> {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone}`} className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
            <Phone size={14} /> +91 {personalInfo.phone}
          </a>
        </div>
        <div className="flex items-center gap-1.5 opacity-80">
          <MapPin size={14} /> {personalInfo.location}
        </div>
      </div>

      <nav 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          <a href="#" className="text-xl font-serif font-bold text-brand-900 tracking-wide">
            {personalInfo.name.split(' ')[0]}<span className="text-accent-gold">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-brand-800 hover:text-accent-gold transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 10 }}
            style={{ transformPerspective: 1000 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-32 px-6 md:hidden text-center"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-brand-900 hover:text-accent-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {/* Global Floating 3D Decor */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: '1000px' }}>
          <motion.div 
            animate={{ 
                rotateX: [0, 360], 
                rotateY: [0, -360],
                y: [-20, 20, -20]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] left-[5%] w-32 h-32 border border-accent-gold/20 rounded-2xl backdrop-blur-[2px]"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div 
            animate={{ 
                rotateX: [360, 0], 
                rotateY: [0, 360],
                y: [20, -20, 20]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[5%] w-48 h-48 border border-brand-900/10 rounded-full backdrop-blur-[2px]"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
        
        {children}
      </main>
    </div>
  );
}
