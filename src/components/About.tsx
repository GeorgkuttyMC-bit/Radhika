import { motion } from 'motion/react';
import { personalInfo, coreCompetencies } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-5 relative">
            <h2 className="text-4xl font-serif text-brand-900 mb-6">Professional Summary</h2>
            <div className="w-12 h-1 bg-accent-gold mb-8"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-10">
            <p className="text-lg text-brand-800/80 leading-relaxed">
              {personalInfo.about}
            </p>
            
            <div>
              <h3 className="text-xl font-serif text-brand-900 mb-6 font-medium">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {coreCompetencies.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-brand-50 border border-brand-100 text-brand-800 text-sm tracking-wide rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
