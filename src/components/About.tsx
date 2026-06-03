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
        <div className="pt-12 lg:pt-0 grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-[1000px]">
          
          {coreCompetencies.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, z: -50, rotateX: -10 }}
              whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.1}
              className="group bg-brand-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-accent-primary/50 transition-all transform-gpu cursor-grab active:cursor-grabbing flex flex-col justify-between aspect-square"
            >
              <div className="flex justify-end">
                <ArrowUpRight className="w-5 h-5 text-brand-100/30 group-hover:text-accent-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <span className="text-xl sm:text-2xl font-display font-medium text-brand-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-primary group-hover:to-accent-secondary transition-all">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
