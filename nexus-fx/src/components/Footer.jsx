const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl mt-space-2xl">
      <div className="w-full px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-md font-code-telemetry text-code-telemetry text-on-surface-variant">
        <div className="flex items-center gap-space-md">
          <span>NEXUS FX ALGORITHMIC TRADING SYSTEMS © 2025</span>
          <span className="text-outline-variant">|</span>
          <span>LATENCY: 1.2MS</span>
          <span className="text-outline-variant">|</span>
          <span>ENGINE: QUANT-CORE V4.8</span>
        </div>
        <div className="flex items-center gap-space-lg">
          <a className="hover:text-on-surface transition-colors uppercase" data-path="risk-tools" href="#">Risk Disclosure</a>
          <a className="hover:text-on-surface transition-colors uppercase" data-path="pricing" href="#">SLA Tier 1</a>
          <span className="text-secondary-fixed-dim flex items-center gap-space-xs">
            <span className="w-1.5 h-1.5 bg-secondary-fixed-dim"></span>
            SOCKET: CONNECTED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;