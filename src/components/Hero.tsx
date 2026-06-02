import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-10 pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="inline-block border border-accent-gold/40 bg-accent-gold/5 rounded-sm px-4 py-1.5 text-sm tracking-widest text-accent-gold uppercase font-bold">
            Creative Portfolio
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-brand-900 leading-tight tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-brand-800/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-brand-900 text-brand-50 px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-brand-800 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
            >
              Get In Touch
            </a>
            <a 
              href="/Radhika_Sudhakaran_Resume.pdf"
              download="Radhika_Sudhakaran_Resume.pdf"
              className="inline-flex items-center justify-center bg-transparent border-2 border-brand-900 text-brand-900 px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-brand-900 hover:text-brand-50 hover:-translate-y-1 hover:shadow-xl gap-2 group w-full sm:w-auto"
            >
              <FileDown size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
