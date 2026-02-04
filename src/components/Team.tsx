import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Team() {
  const { t } = useLanguage();
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: cardsRef, isRevealed: cardsRevealed } = useScrollReveal({ threshold: 0.1 });

  const team = [
    {
      name: "Tomáš Boniatti",
      bio: t('team.tomas.bio'),
      initials: "TB",
      color: 'indigo',
    },
    {
      name: "Myron Mahurskyj",
      bio: t('team.myron.bio'),
      initials: "MM",
      color: 'purple',
    },
  ];

  const colorClasses = {
    indigo: {
      gradient: 'from-indigo-500/30 via-indigo-500/10 to-transparent',
      border: 'group-hover:border-indigo-500/40',
      glow: 'bg-indigo-500/20',
      text: 'group-hover:text-indigo-300',
    },
    purple: {
      gradient: 'from-purple-500/30 via-purple-500/10 to-transparent',
      border: 'group-hover:border-purple-500/40',
      glow: 'bg-purple-500/20',
      text: 'group-hover:text-purple-300',
    },
  };

  return (
    <section id="team" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="section-orb section-orb-indigo w-[350px] h-[350px]" style={{ top: '20%', left: '-10%' }} />
      <div className="section-orb section-orb-purple w-[300px] h-[300px]" style={{ bottom: '15%', right: '-8%' }} />

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          ref={headerRef}
          className={`scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <div className="text-center mb-6">
            <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight hero-gradient-text">
              {t('team.title')}
            </h2>
          </div>

          <p className="text-white/40 text-center mb-16 text-sm tracking-wider flex items-center justify-center gap-3">
            <span className="w-12 h-px gradient-line" />
            {t('team.experience')}
            <span className="w-12 h-px gradient-line" />
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 scroll-reveal-stagger ${cardsRevealed ? 'revealed' : ''}`}
        >
          {team.map((member, index) => {
            const colors = colorClasses[member.color as keyof typeof colorClasses];
            return (
              <div key={index} className="group text-center">
                {/* Avatar with enhanced glow effect */}
                <div className="relative w-36 h-36 mx-auto mb-8">
                  {/* Outer glow ring */}
                  <div className={`absolute inset-0 rounded-full ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-125`} />

                  {/* Gradient ring animation */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-b ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Main avatar */}
                  <div className={`relative w-full h-full rounded-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.1] ${colors.border} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}>
                    <span className={`text-3xl font-light text-white/50 tracking-widest ${colors.text} transition-colors duration-500`}>
                      {member.initials}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 tracking-wide group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm max-w-xs mx-auto group-hover:text-white/70 transition-colors duration-500">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
