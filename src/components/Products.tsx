import { Package, Shield, Layers, User } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Products() {
  const { t } = useLanguage();
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: cardsRef, isRevealed: cardsRevealed } = useScrollReveal({ threshold: 0.05 });

  const products = [
    {
      icon: User,
      title: t('products.uniforms'),
      description: t('products.uniforms.desc'),
      color: 'blue',
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
      iconHover: 'group-hover:text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/40',
      glow: 'bg-blue-500/30',
    },
    {
      icon: Shield,
      title: t('products.tactical'),
      description: t('products.tactical.desc'),
      color: 'emerald',
      gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      iconHover: 'group-hover:text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40',
      glow: 'bg-emerald-500/30',
    },
    {
      icon: Layers,
      title: t('products.fabrics'),
      description: t('products.fabrics.desc'),
      color: 'amber',
      gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
      iconHover: 'group-hover:text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40',
      glow: 'bg-amber-500/30',
    },
    {
      icon: Package,
      title: t('products.cbrn'),
      description: t('products.cbrn.desc'),
      color: 'red',
      gradient: 'from-red-500/20 via-red-500/5 to-transparent',
      iconHover: 'group-hover:text-red-400 group-hover:bg-red-500/20 group-hover:border-red-500/40',
      glow: 'bg-red-500/30',
    },
  ];

  return (
    <section id="products" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="section-orb section-orb-blue w-[350px] h-[350px]" style={{ top: '5%', right: '-8%' }} />
      <div className="section-orb section-orb-emerald w-[300px] h-[300px]" style={{ bottom: '10%', left: '-5%' }} />

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight hero-gradient-text">
            {t('products.title')}
          </h2>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-6 lg:gap-8 scroll-reveal-stagger ${cardsRevealed ? 'revealed' : ''}`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${product.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />

              {/* Card content */}
              <div className="relative p-8 lg:p-10 bg-white/[0.02] border border-white/[0.05] rounded-2xl group-hover:border-white/[0.15] group-hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className={`icon-glow w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${product.iconHover}`}>
                      <product.icon className="w-6 h-6 text-white/60 transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 tracking-wide group-hover:text-white transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${product.gradient} rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
