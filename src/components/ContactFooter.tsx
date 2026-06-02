import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-brand-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-brand-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-brand-800/60 max-w-2xl mx-auto">
            Open for new opportunities, collaborations, and discussions on strategic communications and project management.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-accent-gold/10">
              <Mail className="w-6 h-6 text-brand-900 group-hover:text-accent-gold transition-colors" />
            </div>
            <span className="font-medium text-brand-900 mb-1">Email</span>
            <span className="text-sm text-brand-800/60">{personalInfo.email}</span>
          </a>

          <a href={`tel:${personalInfo.phone}`} className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-accent-gold/10">
              <Phone className="w-6 h-6 text-brand-900 group-hover:text-accent-gold transition-colors" />
            </div>
            <span className="font-medium text-brand-900 mb-1">Phone</span>
            <span className="text-sm text-brand-800/60">+91 {personalInfo.phone}</span>
          </a>

          <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-accent-gold/10">
              <Linkedin className="w-6 h-6 text-brand-900 group-hover:text-accent-gold transition-colors" />
            </div>
            <span className="font-medium text-brand-900 mb-1">LinkedIn</span>
            <span className="text-sm text-brand-800/60 truncate w-full text-center px-4">{personalInfo.linkedin}</span>
          </a>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-accent-gold/10">
              <MapPin className="w-6 h-6 text-brand-900 group-hover:text-accent-gold transition-colors" />
            </div>
            <span className="font-medium text-brand-900 mb-1">Location</span>
            <span className="text-sm text-brand-800/60">{personalInfo.location}</span>
          </div>
        </motion.div>

        <div className="text-center pt-8 border-t border-brand-100">
          <p className="text-sm text-brand-800/40">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
