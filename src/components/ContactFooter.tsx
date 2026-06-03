import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-24 px-6 sm:px-12 lg:px-24 border-t border-white/5 relative preserve-3d overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-4xl max-h-4xl bg-gradient-to-t from-accent-primary/20 to-transparent rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center perspective-[1000px]">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
           whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, type: "spring", bounce: 0.4 }}
           className="transform-gpu flex flex-col items-center"
        >
          <motion.h2 
            drag
            dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}
            dragElastic={0.2}
            className="text-5xl sm:text-7xl lg:text-[7rem] font-display font-bold leading-[1] tracking-tighter uppercase whitespace-normal mb-8 text-brand-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent-primary hover:to-accent-secondary transition-colors duration-700 cursor-grab active:cursor-grabbing"
          >
            Let's<br />Collaborate
          </motion.h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-brand-100/60 font-sans font-light max-w-2xl mx-auto mb-16"
        >
          Open for new opportunities, collaborations, and discussions on strategic communications and brand management.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-24"
        >
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-3 px-8 py-4 bg-brand-100 text-brand-900 border border-brand-100 uppercase font-bold tracking-[0.1em] text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
            Email Me <ArrowUpRight size={18} />
          </a>
          <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-800/40 backdrop-blur-md border border-white/10 text-brand-100 hover:border-accent-secondary hover:text-accent-secondary uppercase font-bold tracking-[0.1em] text-sm rounded-full transition-all duration-300 hover:-translate-y-1">
            LinkedIn <ArrowUpRight size={18} />
          </a>
          <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-3 px-8 py-4 bg-brand-800/40 backdrop-blur-md border border-white/10 text-brand-100 hover:border-accent-secondary hover:text-accent-secondary uppercase font-bold tracking-[0.1em] text-sm rounded-full transition-all duration-300 hover:-translate-y-1">
            Voice <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 font-sans text-sm text-brand-100/40 uppercase tracking-widest font-bold">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="mt-4 sm:mt-0">
             {personalInfo.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
