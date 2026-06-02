import { motion } from 'motion/react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif text-brand-900 mb-6">Professional Experience</h2>
          <div className="w-12 h-1 bg-accent-gold"></div>
        </motion.div>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 group"
            >
              <div className="lg:col-span-4 lg:text-right pt-1">
                <div className="text-sm font-medium tracking-widest uppercase text-accent-gold mb-2">
                  {job.date}
                </div>
                <h3 className="text-xl font-medium text-brand-900">{job.role}</h3>
                <p className="text-brand-800/60 mt-1">{job.company}</p>
              </div>
              
              <div className="lg:col-span-8 relative">
                <div className="hidden lg:block absolute -left-[30px] top-2 w-[1px] h-full bg-brand-100 group-last:h-0"></div>
                <div className="hidden lg:block absolute -left-[34px] top-2 w-[9px] h-[9px] rounded-full bg-brand-200 border-2 border-brand-50"></div>
                
                {job.accounts && (
                  <div className="mb-4">
                    <span className="text-sm font-medium text-brand-900">Accounts: </span>
                    <span className="text-sm text-brand-800/80">{job.accounts}</span>
                  </div>
                )}
                
                <ul className="space-y-3">
                  {job.details.map((detail, i) => (
                    <li key={i} className="text-brand-800/80 leading-relaxed flex items-start">
                      <span className="text-accent-gold mr-3 mt-1.5 opacity-60">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
