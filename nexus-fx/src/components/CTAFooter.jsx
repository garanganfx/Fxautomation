const CTAFooter = () => {
  return (
    <section className="w-full px-margin-desktop py-space-2xl bg-surface-container-low relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 text-primary font-label-caps text-label-caps uppercase mb-space-md">
          <span className="w-2 h-2 bg-primary"></span>
          INSTITUTIONAL ACCESS & VIP DESK
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight mb-space-md">
          Mulai Trading Algoritmik Hari Ini
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
          Dapatkan lisensi instan, panduan setup VPS 15 menit, serta akses langsung ke grup sinyal & update berkala komunitas trader kuantitatif NEXUS FX.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md w-full sm:w-auto">
          <a 
            className="px-space-xl py-space-md bg-secondary-container text-surface-container-lowest font-headline-sm text-headline-sm font-bold uppercase transition-all shadow-[0_0_24px_rgba(3,245,155,0.3)] hover:shadow-[0_0_36px_rgba(3,245,155,0.6)] flex items-center gap-space-xs" 
            href="https://wa.me/" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Hubungi WhatsApp VIP Desk</span>
          </a>
          <a 
            className="px-space-xl py-space-md bg-surface-container-highest hover:bg-surface-bright text-on-surface font-headline-sm text-headline-sm uppercase transition-colors flex items-center gap-space-xs" 
            href="https://t.me/" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Gabung Telegram Community</span>
          </a>
        </div>
        <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-lg font-code-telemetry text-code-telemetry text-on-surface-variant">
          <span>⚡ INSTANT LICENSE GENERATION</span>
          <span>•</span>
          <span>🛡️ 30-DAY PERFORMANCE AUDIT ASSURANCE</span>
          <span>•</span>
          <span>💻 FREE VPS MIGRATION ASSISTANCE</span>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;