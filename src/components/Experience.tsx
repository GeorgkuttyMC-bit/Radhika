import { motion } from 'motion/react';
import { experience } from '../data';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-serif text-brand-900 mb-6 tracking-tight">Professional Experience</h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto"></div>
        </motion.div>

        <div className="space-y-8" style={{ perspective: '1200px' }}>
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.01, 
                rotateX: 2, 
                rotateY: -1,
                y: -5,
                z: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/80 backdrop-blur-sm border border-brand-100 p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:border-accent-gold/20 transition-colors duration-300 group relative z-10"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-1/3 shrink-0">
                  <div className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold rounded-full text-xs font-bold tracking-widest uppercase mb-4 group-hover:bg-accent-gold group-hover:text-white transition-colors">
                    {job.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-900 mb-2 leading-tight">{job.role}</h3>
                  <p className="text-brand-800/60 font-medium">{job.company}</p>
                </div>
                
                <div className="lg:w-2/3">
                  <ul className="space-y-4 mb-8">
                    {job.details.map((detail, i) => (
                      <li key={i} className="text-brand-800/80 leading-relaxed flex items-start text-lg">
                        <span className="text-accent-gold mr-4 mt-1.5 opacity-100 block shrink-0">❖</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {"accountsList" in job && job.accountsList && (
                    <div className="pt-6 border-t border-brand-100 border-dashed">
                      <p className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-4">Key Accounts</p>
                      <div className="flex flex-wrap gap-2.5">
                        {job.accountsList.map((account, i) => (
                          <a
                            key={i}
                            href={account.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-50 border border-brand-100 hover:border-accent-gold hover:bg-accent-gold hover:text-white text-brand-800 text-sm font-medium rounded-full transition-all duration-300"
                          >
                            {account.name}
                            <ExternalLink size={14} className="opacity-70" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
