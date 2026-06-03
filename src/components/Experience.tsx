import { motion } from 'motion/react';
import { experience } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 border-b border-white/5 relative preserve-3d">
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column - Title sticky */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 lg:sticky lg:top-32 h-fit transform-gpu"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-xs font-medium uppercase tracking-wider mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse"></span>
             Experience
          </div>
          <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-8">
            Select<br />History
          </div>
          <p className="text-brand-100/60 font-sans leading-relaxed mb-12">
            A track record of leading high-impact campaigns, reshaping brands, and driving strategic growth across global markets.
          </p>
          
          <div className="hidden lg:block relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
             <div className="absolute inset-0 bg-accent-secondary/10 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0 duration-700"></div>
             <img src="/image.png" alt="Experience Visual" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-[0.16,1,0.3,1]" />
          </div>
        </motion.div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-8 flex flex-col pt-8 lg:pt-0 perspective-[1200px]">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ scale: 1.02, x: 10, rotateY: -3 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="group bg-brand-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8 hover:border-accent-primary/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform-gpu relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 relative z-10">
                <h3 className="text-2xl font-display font-medium text-brand-100 mb-2 md:mb-0">
                  {job.role}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-100/10 border border-brand-100/20 font-sans text-xs uppercase tracking-wider text-brand-100/80 whitespace-nowrap">
                  {job.date}
                </div>
              </div>
              
              <div className="relative z-10">
                <p className="text-lg text-brand-100/90 font-bold mb-6 font-sans text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">{job.company}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {job.details.map((detail, i) => (
                    <div key={i} className="text-brand-100/60 leading-relaxed font-sans font-light flex items-start gap-2 text-sm">
                      <span className="text-accent-primary/50 mt-1">▹</span>
                      {detail}
                    </div>
                  ))}
                </div>

                {"accountsList" in job && job.accountsList && (
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                    {job.accountsList.map((account, i) => (
                      <a
                        key={i}
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-accent-primary/50 bg-brand-900/50 hover:bg-brand-900 text-brand-100/80 hover:text-accent-primary text-sm font-sans tracking-wide transition-all duration-300 rounded-lg backdrop-blur-sm"
                      >
                        {account.name}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
