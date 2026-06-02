import { motion } from 'motion/react';
import { personalInfo, coreCompetencies } from '../data';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 border-y border-brand-100 bg-brand-900 text-brand-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-serif text-white mb-6 tracking-tight">Professional Summary</h2>
              <div className="w-16 h-1 bg-accent-gold"></div>
            </div>
            
            <p className="text-xl text-brand-50/80 leading-relaxed font-light">
              {personalInfo.about}
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{ scale: 1.02, rotateY: -2, rotateX: 1, z: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
            className="bg-brand-800/40 p-10 rounded-3xl border border-brand-50/10 backdrop-blur-sm shadow-2xl hover:border-accent-gold/30 hover:bg-brand-800/60 transition-all duration-500"
          >
            <h3 className="text-2xl font-serif text-white mb-8 font-medium">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreCompetencies.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-brand-900/50 hover:bg-accent-gold hover:text-white transition-all duration-300 group cursor-default"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-gold group-hover:text-white shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-snug">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
