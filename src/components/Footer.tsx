import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 relative overflow-hidden" role="contentinfo">
      {/* Subtle gradient orb */}
      <div className="section-orb section-orb-indigo w-[200px] h-[200px] opacity-20" style={{ bottom: '-50%', left: '50%', transform: 'translateX(-50%)' }} aria-hidden="true" />

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm tracking-[0.25em] font-medium hero-gradient-text hover:opacity-80 transition-opacity"
            aria-label="Stratexim - Back to top"
          >
            STRATEXIM
          </a>

          <p className="text-white/40 text-sm text-center tracking-wide">
            <span>&copy; {currentYear} {t('footer.company')}</span>
            {' '}
            <span>{t('footer.rights')}</span>
          </p>

          {/* Decorative gradient dots */}
          <div className="hidden md:flex items-center gap-2" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-800/40 to-blue-600/40" />
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600/30 to-sky-500/30" />
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-700/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
