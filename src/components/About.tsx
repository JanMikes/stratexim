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
      color: 'indigo',
    },
    {
      icon: Shield,
      title: t('about.durability'),
      description: t('about.durability.desc'),
      color: 'purple',
    },
    {
      icon: Layers,
      title: t('about.innovation'),
      description: t('about.innovation.desc'),
      color: 'blue',
    },
  ];

  const colorClasses = {
    indigo: {
      iconBg: 'group-hover:bg-indigo-500/20',
      iconBorder: 'group-hover:border-indigo-500/40',
      iconColor: 'group-hover:text-indigo-400',
      glow: 'bg-indigo-500/20',
    },
    purple: {
      iconBg: 'group-hover:bg-purple-500/20',
      iconBorder: 'group-hover:border-purple-500/40',
      iconColor: 'group-hover:text-purple-400',
      glow: 'bg-purple-500/20',
    },
    blue: {
      iconBg: 'group-hover:bg-blue-500/20',
      iconBorder: 'group-hover:border-blue-500/40',
      iconColor: 'group-hover:text-blue-400',
      glow: 'bg-blue-500/20',
    },
  };

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="section-orb section-orb-indigo w-[400px] h-[400px]" style={{ top: '10%', left: '-10%' }} />
      <div className="section-orb section-orb-purple w-[300px] h-[300px]" style={{ bottom: '20%', right: '-5%' }} />

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
            const colors = colorClasses[pillar.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl card-gradient-border"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl ${colors.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className={`icon-glow w-16 h-16 mb-8 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center ${colors.iconBg} ${colors.iconBorder} transition-all duration-500`}>
                    <pillar.icon className={`w-7 h-7 text-white/60 ${colors.iconColor} transition-colors duration-500`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
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
