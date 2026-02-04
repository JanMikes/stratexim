import { useLanguage } from '../i18n/LanguageContext';
import { useState, useEffect } from 'react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      {/* Gradient border line when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full h-px section-divider transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div
          className="text-base font-medium tracking-[0.35em] cursor-pointer hero-gradient-text hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          STRATEXIM
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { id: 'about', label: t('nav.about') },
            { id: 'products', label: t('nav.products') },
            { id: 'team', label: t('nav.team') },
            { id: 'contact', label: t('nav.contact') },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wider animated-underline"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={() => setLanguage('en')}
            className={`transition-all duration-300 px-3 py-1.5 rounded-md ${
              language === 'en'
                ? 'text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            EN
          </button>
          <span className="text-white/20">/</span>
          <button
            onClick={() => setLanguage('cz')}
            className={`transition-all duration-300 px-3 py-1.5 rounded-md ${
              language === 'cz'
                ? 'text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            CZ
          </button>
        </div>
      </div>
    </header>
  );
}
