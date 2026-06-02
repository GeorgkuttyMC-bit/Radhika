import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { MousePointerClick, TrendingUp, Presentation } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotateX: [0, 20, 0], rotateY: [0, 30, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="absolute top-1/4 left-[10%] w-48 h-48 bg-accent-gold/15 rounded-3xl blur-2xl"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotateX: [0, -30, 0], rotateY: [0, -20, 0] }} 
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-brand-900/10 rounded-full blur-2xl"
      />
      
      <motion.div 
        animate={{ rotateZ: [0, 360], rotateX: [0, 45, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-[20%] hidden lg:block opacity-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <TrendingUp className="w-16 h-16 text-accent-gold" strokeWidth={1} />
      </motion.div>
      <motion.div 
        animate={{ rotateZ: [360, 0], rotateY: [0, 45, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-[20%] hidden lg:block opacity-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Presentation className="w-16 h-16 text-brand-900" strokeWidth={1} />
      </motion.div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 mt-12" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 border border-accent-gold/40 bg-accent-gold/5 rounded-full px-5 py-2 text-sm tracking-widest text-brand-900 uppercase font-bold shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
            Strategic Communications
          </div>
          <motion.h1 
            initial={{ opacity: 0, rotateX: 45, y: 40, z: -100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="text-6xl sm:text-7xl lg:text-[7rem] font-serif text-brand-900 leading-[1.1] tracking-tighter"
          >
            {personalInfo.name.split(' ')[0]} <span className="text-accent-gold italic">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl text-brand-800/80 font-medium leading-relaxed max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/60 shadow-sm"
          >
            {personalInfo.title}
          </motion.p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-brand-900 text-brand-50 px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-accent-gold hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-gold/20 gap-2 group w-full sm:w-auto rounded-xl"
            >
              Get In Touch
              <MousePointerClick size={16} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
