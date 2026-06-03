import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 sm:px-12 lg:px-24 preserve-3d text-center">
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full blur-[180px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 20, z: -100 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 flex flex-col items-center relative z-20 max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 border border-white/5 bg-brand-800/50 backdrop-blur-sm rounded-full text-xs tracking-wider uppercase font-medium text-brand-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            Creative Strategy & Vision
          </div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-[8.5rem] font-display font-bold leading-[1.05] tracking-tight drop-shadow-2xl">
            {personalInfo.name.split(' ')[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-100 via-brand-100 to-brand-100/50">
              {personalInfo.name.split(' ')[1]}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-brand-100/70 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-6 w-full sm:w-auto mx-auto">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-brand-100 text-brand-900 px-8 py-4 text-sm font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 rounded-full gap-3 group"
            >
              Start Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
