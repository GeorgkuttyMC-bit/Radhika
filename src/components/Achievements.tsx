import { motion } from 'motion/react';
import { keyAchievements, education, awards } from '../data';
import { Award, GraduationCap, Star, Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-serif text-brand-900 mb-6 tracking-tight">Milestones & Education</h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min" style={{ perspective: '1200px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ scale: 1.01, rotateY: 2, rotateX: -1, z: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="md:col-span-8 bg-brand-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 pointer-events-none">
              <Trophy className="w-48 h-48 text-accent-gold" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-3xl font-serif">Key Achievements</h2>
              </div>
              <ul className="space-y-6">
                {keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-white/90 leading-relaxed text-lg bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-accent-gold mr-4 mt-1 block shrink-0 font-bold">✦</span>
                    <p>{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ scale: 1.02, rotateY: -3, rotateX: 2, z: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 shadow-xl hover:shadow-2xl hover:border-accent-gold/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100">
                  <Award className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-2xl font-serif text-brand-900">Awards</h2>
              </div>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="group">
                    <h3 className="text-lg font-bold text-brand-900 group-hover:text-accent-gold transition-colors">{award.title}</h3>
                    <p className="text-brand-800/60 mt-1 font-medium">{award.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ scale: 1.02, rotateY: -3, rotateX: 2, z: 20, y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-accent-gold text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-serif">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="p-4 bg-black/10 rounded-xl border border-white/10 hover:bg-black/20 transition-colors">
                    <h3 className="text-lg font-bold leading-snug">{edu.degree}</h3>
                    <p className="text-white/80 mt-2 font-medium">{edu.institution}</p>
                    <div className="inline-block px-2 py-1 bg-white text-accent-gold text-xs font-bold uppercase tracking-widest rounded mt-3">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
