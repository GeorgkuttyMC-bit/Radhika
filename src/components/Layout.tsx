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
    <div className="min-h-screen font-sans bg-brand-900 text-brand-100 selection:bg-accent-primary/30 scroll-smooth relative">
      {/* 3D Floating Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 perspective-[1000px]">
        <motion.div
           animate={{
             rotateX: [0, 180, 360],
             rotateY: [0, 360, 180],
             translateZ: [0, 100, 0]
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
           animate={{
             rotateX: [360, 180, 0],
             rotateY: [180, 360, 0],
             translateZ: [-50, 50, -50]
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-accent-secondary/10 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      <nav 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-brand-900/40 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center relative z-10">
          <a href="#" className="flex items-center gap-2 text-2xl font-display font-bold text-brand-100 tracking-tight group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:opacity-80 transition-opacity">
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              {personalInfo.name.split(' ')[1]}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center bg-brand-800/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-md px-8 py-3 rounded-full border border-white/5 text-sm font-sans tracking-wide font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-100/70 hover:text-brand-100 relative group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-100 hover:text-accent-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-900 pt-32 px-6 md:hidden text-center flex flex-col justify-center items-center pb-20"
          >
            <div className="flex flex-col gap-10 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold text-brand-100 hover:text-accent-primary transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 w-full overflow-hidden perspective-[1000px] transform-gpu">
        {/* Subtle noise overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"></div>
        {children}
      </main>
    </div>
  );
}
