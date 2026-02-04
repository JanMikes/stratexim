import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="section-orb section-orb-indigo w-[200px] h-[200px] opacity-20" style={{ bottom: '-50%', left: '50%', transform: 'translateX(-50%)' }} />

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm tracking-[0.25em] font-medium hero-gradient-text">
            STRATEXIM
          </div>

          <div className="text-white/40 text-sm text-center tracking-wide">
            &copy; {currentYear} {t('footer.company')} {t('footer.rights')}
          </div>

          {/* Decorative gradient dots */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40" />
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30" />
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
