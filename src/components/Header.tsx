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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      {/* Gradient border line when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full h-px section-divider transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="text-base font-medium tracking-[0.35em] hero-gradient-text hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '/');
          }}
          aria-label="Stratexim - Back to top"
        >
          STRATEXIM
        </a>

        <nav className="hidden md:flex items-center gap-10" role="navigation" aria-label="Main navigation">
          {[
            { id: 'about', label: t('nav.about') },
            { id: 'products', label: t('nav.products') },
            { id: 'team', label: t('nav.team') },
            { id: 'contact', label: t('nav.contact') },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wider animated-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm" role="group" aria-label="Language selection">
          <button
            onClick={() => setLanguage('en')}
            className={`transition-all duration-300 px-3 py-1.5 rounded-md ${
              language === 'en'
                ? 'text-white bg-gradient-to-r from-blue-800/20 to-blue-600/20 border border-blue-700/30'
                : 'text-white/40 hover:text-white/70'
            }`}
            aria-label="Switch to English"
            aria-pressed={language === 'en'}
            lang="en"
          >
            EN
          </button>
          <span className="text-white/20" aria-hidden="true">/</span>
          <button
            onClick={() => setLanguage('cz')}
            className={`transition-all duration-300 px-3 py-1.5 rounded-md ${
              language === 'cz'
                ? 'text-white bg-gradient-to-r from-blue-800/20 to-blue-600/20 border border-blue-700/30'
                : 'text-white/40 hover:text-white/70'
            }`}
            aria-label="Přepnout na češtinu"
            aria-pressed={language === 'cz'}
            lang="cs"
          >
            CZ
          </button>
        </div>
      </div>
    </header>
  );
}
