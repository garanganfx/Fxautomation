const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full px-margin-desktop pt-space-xl pb-space-2xl bg-surface-container-lowest overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* PROTOCOL BADGE */}
          <div className="inline-flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 mb-space-md text-primary font-label-caps text-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span>NEXUS QUANT LABS • v3.8 ALGORITHMIC TRADING</span>
            <span className="w-1.5 h-1.5 bg-primary ml-1"></span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface max-w-2xl uppercase tracking-tight mb-space-md">
            Automate Your <span className="text-primary underline decoration-primary-container decoration-4 underline-offset-8">Forex Trading</span>.
          </h1>
          <p className="font-headline-sm text-headline-sm text-on-surface max-w-xl mb-space-sm leading-snug">
            Sistem Trading Otomatis Berdisiplin Tinggi Tanpa Stress Memantau Chart 24/5.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
            Algoritma trading kuantitatif berbasis Multi-Timeframe Analysis, dynamic spread filter & risk management terverifikasi Myfxbook untuk MT4 & MT5.
          </p>
          {/* CTA INTERFACES */}
          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto mb-space-xl">
            <a 
              className="relative group px-space-xl py-space-md bg-secondary-container text-surface-container-lowest font-headline-sm text-headline-sm font-bold uppercase transition-all duration-150 shadow-[0_0_24px_rgba(3,245,155,0.4)] hover:shadow-[0_0_36px_rgba(3,245,155,0.7)] active:translate-y-0.5 flex items-center gap-space-xs" 
              href="#performance-panel"
              onClick={(e) => { e.preventDefault(); scrollToSection('performance-panel'); }}
            >
              <span>Lihat Performa Live</span>
              <span className="material-symbols-outlined text-[20px]">query_stats</span>
            </a>
            <a 
              className="px-space-xl py-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline-sm text-headline-sm uppercase transition-colors flex items-center gap-space-xs" 
              href="#ea-products"
              onClick={(e) => { e.preventDefault(); scrollToSection('ea-products'); }}
            >
              <span>Beli EA Sekarang</span>
              <span className="material-symbols-outlined text-[18px]">shopping_cart_checkout</span>
            </a>
            <a 
              className="px-space-md py-space-md text-primary font-label-caps text-label-caps uppercase hover:underline flex items-center gap-1" 
              href="#risk-calculator"
              onClick={(e) => { e.preventDefault(); scrollToSection('risk-calculator'); }}
            >
              <span>Buka Akun Demo</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
          {/* TRUST METRICS TICKER */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full pt-space-md bg-surface-container-low/40 p-space-sm">
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">CERTIFICATION</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                MT4/MT5
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">BACKTEST FIDELITY</span>
              <span className="font-headline-sm text-headline-sm text-primary font-semibold">99.9% Model</span>
            </div>
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">INFRASTRUCTURE</span>
              <span className="font-headline-sm text-headline-sm text-secondary-fixed-dim font-semibold">24/5 VPS Ready</span>
            </div>
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">ACTIVE TRADERS</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">1,450+ Desk</span>
            </div>
          </div>
        </div>
        {/* RIGHT VISUAL TELEMETRY MODULE */}
        <div className="lg:col-span-5 flex flex-col gap-space-sm relative">
          <div className="bg-surface-container p-space-md shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary animate-pulse"></span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface">CORE ORCHESTRATION TERMINAL</span>
              </div>
              <span className="font-code-telemetry text-code-telemetry bg-surface-container-lowest px-1.5 py-0.5 text-secondary-fixed-dim">STATUS: RUNNING</span>
            </div>
            <div className="relative h-60 w-full bg-surface-container-lowest p-space-sm flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between font-code-telemetry text-code-telemetry text-on-surface-variant">
                <span>XAUUSD_M15 // ORDER_FLOW_AGGREGATOR</span>
                <span>L: 2642.18 / A: 2642.34</span>
              </div>
              {/* CANDLESTICK/ALGO TICK PATTERN VISUALIZER */}
              <div className="relative w-full h-36 flex items-end justify-between gap-1 pt-4">
                <div className="w-full h-full flex items-end justify-between px-2 gap-1.5">
                  <div className="w-1.5 h-16 bg-secondary-container relative group">
                    <div className="w-0.5 h-24 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-20 bg-secondary-container relative group">
                    <div className="w-0.5 h-28 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-12 bg-error relative group">
                    <div className="w-0.5 h-20 bg-error/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-24 bg-secondary-container relative group">
                    <div className="w-0.5 h-32 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-18 bg-secondary-container relative group">
                    <div className="w-0.5 h-26 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-8 bg-error relative group">
                    <div className="w-0.5 h-14 bg-error/50 absolute left-1/2 -translate-x-1/2 -top-3"></div>
                  </div>
                  <div className="w-1.5 h-28 bg-secondary-container relative group">
                    <div className="w-0.5 h-36 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-22 bg-secondary-container relative group">
                    <div className="w-0.5 h-30 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-32 bg-secondary-container relative group">
                    <div className="w-0.5 h-40 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-30 bg-secondary-container relative group">
                    <div className="w-0.5 h-38 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-16 bg-error relative group">
                    <div className="w-0.5 h-24 bg-error/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                  <div className="w-1.5 h-36 bg-secondary-container relative group">
                    <div className="w-0.5 h-44 bg-secondary-container/50 absolute left-1/2 -translate-x-1/2 -top-4"></div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 h-0.5 bg-primary/40"></div>
                <div className="absolute right-4 bottom-8 bg-primary text-surface-container-lowest font-code-telemetry text-code-telemetry px-1 py-0.5 font-bold">
                  BUY 1.20 LOT @ 2638.10
                </div>
              </div>
              <div className="flex items-center justify-between font-code-telemetry text-code-telemetry text-on-surface-variant pt-2 border-t border-surface-container-high/40">
                <span className="text-secondary-fixed-dim flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary-fixed-dim"></span>
                  TELEMETRY: VERIFIED MYFXBOOK SYNC
                </span>
                <span>PING: 1.1ms</span>
              </div>
            </div>
            {/* RECENT ALGORITHMIC FILLS */}
            <div className="mt-space-sm grid grid-cols-3 gap-space-xs font-code-telemetry text-code-telemetry">
              <div className="bg-surface-container-lowest p-2">
                <div className="text-on-surface-variant">LAST GAIN</div>
                <div className="text-secondary-fixed-dim font-bold text-body-md">+$412.80</div>
              </div>
              <div className="bg-surface-container-lowest p-2">
                <div className="text-on-surface-variant">DAILY PIP</div>
                <div className="text-primary font-bold text-body-md">+68.4 PIPS</div>
              </div>
              <div className="bg-surface-container-lowest p-2">
                <div className="text-on-surface-variant">ACTIVE EXPOSURE</div>
                <div className="text-on-surface font-bold text-body-md">0.00 LOT</div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-space-sm flex items-center justify-between font-code-telemetry text-code-telemetry text-on-surface-variant">
            <span>INSTITUTIONAL ALGO POOL #094</span>
            <span className="text-primary font-bold">REAL-TIME RISK GUARD: ENGAGED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;