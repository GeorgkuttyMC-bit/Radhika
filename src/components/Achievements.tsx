import { motion } from 'motion/react';
import { keyAchievements, education, awards } from '../data';
import { Award, GraduationCap, Star } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-24 bg-brand-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Star className="w-6 h-6 text-accent-gold" />
              <h2 className="text-3xl font-serif">Key Achievements</h2>
            </div>
            <ul className="space-y-6">
              {keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-white/80 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 mr-4 flex-shrink-0"></div>
                  <p>{achievement}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-6 h-6 text-accent-gold" />
                <h2 className="text-3xl font-serif">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-white/10 pl-6">
                    <h3 className="text-lg font-medium">{edu.degree}</h3>
                    <p className="text-white/60 mt-1">{edu.institution}</p>
                    <p className="text-sm text-accent-gold mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-6 h-6 text-accent-gold" />
                <h2 className="text-3xl font-serif">Awards</h2>
              </div>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="border-l-2 border-white/10 pl-6">
                    <h3 className="text-lg font-medium">{award.title}</h3>
                    <p className="text-white/60 mt-1">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
