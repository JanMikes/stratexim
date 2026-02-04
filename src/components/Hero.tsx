import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Aurora background effect */}
      <div className="aurora" style={{ top: '-50%', left: '-50%' }} />

      {/* Animated gradient orbs */}
      <div className="gradient-orb gradient-orb-1" style={{ top: '10%', left: '15%' }} />
      <div className="gradient-orb gradient-orb-2" style={{ top: '60%', right: '10%' }} />
      <div className="gradient-orb gradient-orb-3" style={{ bottom: '20%', left: '5%' }} />
      <div className="gradient-orb gradient-orb-4" style={{ top: '30%', right: '20%' }} />

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

      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 gradient-line opacity-60" />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.4em] mb-8 hero-gradient-text">
            STRATEXIM
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <p className="text-xs md:text-sm tracking-[0.4em] text-white/40 mb-10 uppercase">
            {t('hero.tagline')}
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <div className="w-32 h-px gradient-line mx-auto mb-10" />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-relaxed">
            {t('hero.title')}
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
          <button
            onClick={scrollToContact}
            className="group relative px-10 py-4 bg-transparent overflow-hidden transition-all duration-500 gradient-border-animated"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative text-sm tracking-[0.25em] group-hover:text-white transition-colors duration-500">
              {t('hero.cta')}
            </span>
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 hover:text-indigo-400 transition-all duration-500 animate-float group"
        aria-label="Scroll down"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
          <ChevronDown className="w-8 h-8 relative" />
        </div>
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </section>
  );
}
