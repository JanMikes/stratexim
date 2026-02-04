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
    },
    {
      icon: Shield,
      title: t('products.tactical'),
      description: t('products.tactical.desc'),
    },
    {
      icon: Layers,
      title: t('products.fabrics'),
      description: t('products.fabrics.desc'),
    },
    {
      icon: Package,
      title: t('products.cbrn'),
      description: t('products.cbrn.desc'),
    },
  ];

  return (
    <section id="products" className="py-32 px-6 relative overflow-hidden bg-black">
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
              className="group relative p-8 lg:p-10 rounded-2xl card-gradient-border"
            >
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="icon-glow w-14 h-14 rounded-xl flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-white/70 group-hover:text-sky-400 transition-colors duration-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 tracking-wide">
                      {product.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-400">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
