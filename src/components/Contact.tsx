import { Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const { t } = useLanguage();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="section-orb section-orb-indigo w-[400px] h-[400px]" style={{ bottom: '10%', left: '10%' }} />
      <div className="section-orb section-orb-purple w-[350px] h-[350px]" style={{ top: '20%', right: '5%' }} />

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)'
        }}
      />

      <div
        ref={contentRef}
        className={`container mx-auto max-w-2xl text-center relative z-10 scroll-reveal ${contentRevealed ? 'revealed' : ''}`}
      >
        <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight hero-gradient-text">
          {t('contact.title')}
        </h2>

        <p className="text-white/50 mb-14 leading-relaxed text-lg">
          {t('contact.subtitle')}
        </p>

        <a
          href="mailto:info@stratexim.com"
          className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden transition-all duration-500"
        >
          {/* Animated gradient border */}
          <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute inset-[1px] rounded-full bg-black" />
          </span>

          {/* Hover fill */}
          <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30" />

          {/* Content */}
          <Mail className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10" />
          <span className="text-sm tracking-[0.15em] text-white/80 group-hover:text-white transition-colors duration-300 relative z-10">
            info@stratexim.com
          </span>
          <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 relative z-10" />
        </a>
      </div>
    </section>
  );
}
