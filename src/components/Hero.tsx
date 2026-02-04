import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden" aria-label="Hero">
      {/* Aurora background effect */}
      <div className="aurora" style={{ top: '-50%', left: '-50%' }} />

      {/* Animated gradient orbs - main layer */}
      <div className="gradient-orb gradient-orb-1" style={{ top: '10%', left: '15%' }} />
      <div className="gradient-orb gradient-orb-2" style={{ top: '60%', right: '10%' }} />
      <div className="gradient-orb gradient-orb-3" style={{ bottom: '20%', left: '5%' }} />
      <div className="gradient-orb gradient-orb-4" style={{ top: '30%', right: '20%' }} />

      {/* Secondary accent orbs - smaller, adds depth */}
      <div className="accent-orb accent-orb-1" />
      <div className="accent-orb accent-orb-2" />
      <div className="accent-orb accent-orb-3" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Central radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)'
        }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.4em] mb-8 hero-gradient-text">
          STRATEXIM
        </h1>

        <p className="text-xs md:text-sm tracking-[0.4em] text-white/40 mb-10 uppercase">
          {t('hero.tagline')}
        </p>

        <div className="w-32 h-px gradient-line mx-auto mb-10" />

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-relaxed">
          {t('hero.title')}
        </h2>

        <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="group relative inline-block px-10 py-4 bg-transparent overflow-hidden transition-all duration-500 gradient-border-animated rounded-full"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
          <span className="relative text-sm tracking-[0.25em] group-hover:text-white transition-colors duration-500">
            {t('hero.cta')}
          </span>
        </a>
      </div>

      <a
        href="#about"
        onClick={(e) => handleNavClick(e, 'about')}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 hover:text-indigo-400 transition-all duration-500 animate-float group"
        aria-label="Scroll to About section"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
          <ChevronDown className="w-8 h-8 relative" aria-hidden="true" />
        </div>
      </a>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </section>
  );
}
