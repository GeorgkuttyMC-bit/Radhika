import { motion } from 'motion/react';
import { personalInfo, coreCompetencies } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 border-b border-white/5 relative preserve-3d">
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start perspective-[1200px]">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="transform-gpu"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-medium uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>
            The Mission
          </div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium leading-[1.2] tracking-tight">
            Building campaigns that cut through the noise and command attention.
          </div>
          
          <div className="mt-12 h-px w-full bg-gradient-to-r from-accent-primary/50 to-transparent"></div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="mt-12 p-8 rounded-2xl bg-brand-800/20 backdrop-blur-sm border border-white/5 hover:border-accent-primary/30 transition-all group"
          >
            <p className="text-lg lg:text-xl text-brand-100/70 font-sans font-light leading-relaxed group-hover:text-brand-100 transition-colors">
              {personalInfo.about}
            </p>
          </motion.div>
        </motion.div>
        
        {/* Right Column - Skills List */}
        <div className="pt-12 lg:pt-0 grid grid-cols-2 gap-4 perspective-[1200px] h-fit">
          {coreCompetencies.map((skill, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, scale: 0.8, rotateX: 15, y: 30 }}
               whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
               whileHover={{ scale: 1.05, z: 30, y: -5, rotateY: 5 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.6 }}
               drag
               dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
               dragElastic={0.15}
               className="group relative backdrop-blur-md bg-brand-800/40 border border-white/10 rounded-2xl p-6 hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] hover:border-amber-400/40 transition-colors transform-gpu cursor-grab active:cursor-grabbing flex flex-col justify-center items-center text-center overflow-hidden shadow-xl aspect-square"
             >
               {/* Shiny golden gradient overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-amber-400/50 group-hover:bg-amber-400/10 transition-all duration-300 relative z-10 mb-4">
                  <div className="w-3 h-3 rounded-full bg-brand-100/30 group-hover:bg-amber-400 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-all"></div>
               </div>
               <span className="text-sm sm:text-lg font-sans font-bold text-brand-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-amber-500 transition-all relative z-10 tracking-wide">
                 {skill}
               </span>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
