import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/30' : 'bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/30'
    }`}>
      <div className="h-16 w-full px-margin-desktop flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-lg">
          <a className="flex items-center gap-space-sm" data-path="homepage" href="#home">
            <img 
              alt="NEXUS FX ALGO Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1VssqEEKY4bXRaaFfsjsfnBGMwGP0-Gx9e4UGsQRcRGWOC8I-0_W-smRahRUg69XgdedOoCSEjFznJgLk2Ihwlba2_or9pqwquaU9T3dh-ahJ9fGZjQbckJdE21r1rgEWul1ch9ZXkmwXCrA_Yj7LYh19Dwp8KQwu9jCGnuIQrK489TlutgjI7dEfM5xl0nvmUt1RWf6J6YJUmA_NVjKvG_DzC5Qrkt4eJhfiF0-I6R6OByTk587-v_P3s"
            />
            <span className="font-headline-sm text-headline-sm uppercase text-primary tracking-wider">
              NEXUS<span className="text-on-surface">FX</span>
            </span>
          </a>
          <div className="hidden 2xl:flex items-center gap-space-md border-l border-outline-variant/40 pl-space-md font-code-telemetry text-code-telemetry">
            <span className="flex items-center gap-space-xs text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
              FEED: LIVE
            </span>
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-xs py-0.5">
              <span className="text-on-surface-variant">EURUSD</span>
              <span className="text-secondary-fixed-dim font-metric-lg text-body-sm font-semibold">+0.32%</span>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-xs py-0.5">
              <span className="text-on-surface-variant">XAUUSD</span>
              <span className="text-secondary-fixed-dim font-metric-lg text-body-sm font-semibold">+1.28%</span>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-xs py-0.5">
              <span className="text-on-surface-variant">GBPUSD</span>
              <span className="text-error font-metric-lg text-body-sm font-semibold">-0.15%</span>
            </div>
          </div>
        </div>
        <nav className="hidden xl:flex items-center gap-space-lg h-full" data-active-classes="text-primary font-semibold border-b-2 border-primary">
          <a aria-current="page" className="transition-colors py-space-sm uppercase text-primary font-semibold border-b-2 border-primary" data-path="homepage" href="#home">Homepage</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors py-space-sm font-label-caps text-label-caps uppercase" data-path="expert-advisors" href="#ea-products">Expert Advisors</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors py-space-sm font-label-caps text-label-caps uppercase" data-path="performance" href="#performance-panel">Performance</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors py-space-sm font-label-caps text-label-caps uppercase" data-path="backtest" href="#">Backtest</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors py-space-sm font-label-caps text-label-caps uppercase" data-path="risk-tools" href="#risk-calculator">Risk Tools</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors py-space-sm font-label-caps text-label-caps uppercase" data-path="pricing" href="#">Pricing</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors py-space-sm font-label-caps text-label-caps uppercase" data-path="academy" href="#">Academy</a>
        </nav>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center bg-surface-container-low border border-outline-variant/40 p-0.5">
            <button className="px-space-xs py-0.5 font-label-caps text-label-caps bg-surface-container text-primary uppercase">EN</button>
            <button className="px-space-xs py-0.5 font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface uppercase">ID</button>
          </div>
          <a className="flex items-center gap-space-sm bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/50 hover:border-primary/50 px-space-md py-1.5 transition-all" data-path="member-portal" href="#">
            <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(3,245,155,0.6)]"></span>
            <div className="flex flex-col text-left">
              <span className="font-label-caps text-label-caps text-on-surface leading-none">HERU</span>
              <span className="font-code-telemetry text-code-telemetry text-primary leading-none mt-0.5">PRO TRADER</span>
            </div>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;