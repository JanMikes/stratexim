import { Target, Shield, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { t } = useLanguage();
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: cardsRef, isRevealed: cardsRevealed } = useScrollReveal({ threshold: 0.05 });

  const pillars = [
    {
      icon: Target,
      title: t('about.precision'),
      description: t('about.precision.desc'),
    },
    {
      icon: Shield,
      title: t('about.durability'),
      description: t('about.durability.desc'),
    },
    {
      icon: Layers,
      title: t('about.innovation'),
      description: t('about.innovation.desc'),
    },
  ];


  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-blue-950/30 via-black to-blue-950/30">
      {/* Background gradient orbs */}
      <div className="section-orb section-orb-indigo w-[400px] h-[400px]" style={{ top: '10%', left: '-10%' }} />
      <div className="section-orb section-orb-blue w-[300px] h-[300px]" style={{ bottom: '20%', right: '-5%' }} />

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight hero-gradient-text">
            {t('about.title')}
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto leading-relaxed text-lg">
            {t('about.description')}
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 lg:gap-12 scroll-reveal-stagger ${cardsRevealed ? 'revealed' : ''}`}
        >
          {pillars.map((pillar, index) => {
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl card-gradient-border"
              >
                <div className="relative">
                  <div className="icon-glow w-16 h-16 mb-8 rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-white/70 group-hover:text-sky-400 transition-colors duration-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-400">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
