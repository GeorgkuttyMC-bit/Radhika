import { motion } from 'motion/react';
import { keyAchievements, education, awards } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-24 border-b border-white/5 relative preserve-3d">
      <div className="max-w-7xl mx-auto w-full relative z-10 perspective-[1200px]">
        
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-medium uppercase tracking-wider mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>
             Metrics
          </div>
          <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            Impact by<br />the numbers
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Key Achievements leading with big borders */}
          {keyAchievements.map((achievement, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, z: -50, rotateX: 10 }}
               whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
               whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, z: 20 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 * index, type: "spring" }}
               drag
               dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
               dragElastic={0.1}
               className="bg-brand-800/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-accent-primary/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform-gpu cursor-grab active:cursor-grabbing"
             >
               <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, originX: 0 }}
                  className="text-sm font-sans font-bold text-accent-primary mb-4 tracking-[0.1em]"
               >
                  {`0${index + 1}`}
               </motion.div>
               <p className="text-xl font-display font-medium text-brand-100 leading-tight">
                 {achievement}
               </p>
             </motion.div>
          ))}
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mt-24 pt-24 border-t border-white/10">
          
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-light text-brand-100/50 mb-10 pb-6 border-b border-white/5">Recognition</h3>
            <div className="space-y-10">
              {awards.map((award, index) => (
                <div key={index} className="group cursor-default">
                  <h4 className="text-lg font-sans font-bold text-brand-100 uppercase tracking-wide group-hover:text-accent-secondary transition-colors">{award.title}</h4>
                  <p className="text-brand-100/60 mt-2 font-sans">{award.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
             <h3 className="text-3xl font-display font-light text-brand-100/50 mb-10 pb-6 border-b border-white/5">Education</h3>
             <div className="space-y-10">
                {education.map((edu, index) => (
                  <div key={index} className="group flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-lg font-sans font-bold text-brand-100 leading-tight">{edu.degree}</h4>
                      <p className="text-brand-100/60 mt-2 font-sans font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-sm font-sans font-bold text-brand-100 bg-brand-800 border border-white/10 px-3 py-1 group-hover:bg-accent-secondary group-hover:text-brand-900 transition-colors tracking-widest uppercase rounded-full">
                      {edu.year}
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
