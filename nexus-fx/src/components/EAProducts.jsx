const EAProducts = () => {
  const products = [
    {
      id: 'gold-buster',
      name: 'EA XAUUSD (Gold Buster)',
      tag: 'MOST POPULAR • COMMODITY',
      tagColor: 'bg-primary/20 text-primary',
      platform: 'MT5 EXCLUSIVE',
      platformColor: 'text-secondary-fixed-dim',
      description: 'Dirancang khusus untuk dinamika pergerakan emas ber-volatilitas tinggi dengan proteksi spread otomatis.',
      specs: [
        { label: 'PRIMARY PAIR:', value: 'XAUUSD (Gold)', valueColor: 'text-on-surface font-bold' },
        { label: 'TIMEFRAME:', value: 'M15 (Execution)', valueColor: 'text-on-surface' },
        { label: 'STRATEGY:', value: 'Trend Pullback & Volatility Breakout', valueColor: 'text-on-surface' },
        { label: 'RISK TIER:', value: 'MEDIUM', valueColor: 'text-primary font-bold' },
        { label: 'MINIMUM DEPOSIT:', value: '$500 USD', valueColor: 'text-secondary-fixed-dim font-bold' },
      ],
      price: '$299',
      license: 'LIFETIME LICENSE',
      includes: '1 MT5 ACCOUNT INCLUDED',
      buttonColor: 'bg-primary text-surface-container-lowest font-bold hover:bg-primary-fixed-dim',
      buttonText: 'Beli EA',
      borderColor: 'bg-primary',
    },
    {
      id: 'scalper-pro',
      name: 'EA Scalper Pro',
      tag: 'HIGH FREQUENCY • LOW SPREAD',
      tagColor: 'bg-secondary-container/20 text-secondary-fixed-dim',
      platform: 'MT4 & MT5',
      platformColor: 'text-on-surface',
      description: 'Optimal pada sesi likuiditas Tokyo & London awal. Mengincar rentang micro-pips dengan dynamic take-profit.',
      specs: [
        { label: 'PRIMARY PAIR:', value: 'EURUSD / GBPUSD', valueColor: 'text-on-surface font-bold' },
        { label: 'TIMEFRAME:', value: 'M5 (Ultra-Fast)', valueColor: 'text-on-surface' },
        { label: 'STRATEGY:', value: 'Asian Session Micro-Scalper', valueColor: 'text-on-surface' },
        { label: 'RISK TIER:', value: 'LOW - MEDIUM', valueColor: 'text-secondary-fixed-dim font-bold' },
        { label: 'MINIMUM DEPOSIT:', value: '$200 USD', valueColor: 'text-secondary-fixed-dim font-bold' },
      ],
      price: '$249',
      license: 'LIFETIME LICENSE',
      includes: 'MT4/MT5 COMPATIBLE',
      buttonColor: 'bg-secondary-container text-surface-container-lowest font-bold hover:bg-secondary-fixed',
      buttonText: 'Beli EA',
      borderColor: 'bg-secondary-container',
    },
    {
      id: 'institutional-titan',
      name: 'EA Institutional Titan',
      tag: 'INSTITUTIONAL GRADE • SMC',
      tagColor: 'bg-tertiary/20 text-tertiary',
      platform: 'MULTI-ASSET',
      platformColor: 'text-tertiary',
      description: 'Mendeteksi jejak liquidity pools perbankan besar. Rasio profit tinggi dengan trailing stop adaptif cerdas.',
      specs: [
        { label: 'PRIMARY PAIR:', value: 'Multi-Pair (Major 5)', valueColor: 'text-on-surface font-bold' },
        { label: 'TIMEFRAME:', value: 'H1 (Swing Precision)', valueColor: 'text-on-surface' },
        { label: 'STRATEGY:', value: 'Smart Money Concepts & Order Flow', valueColor: 'text-on-surface' },
        { label: 'RISK TIER:', value: 'CONSERVATIVE', valueColor: 'text-secondary-fixed-dim font-bold' },
        { label: 'MINIMUM DEPOSIT:', value: '$1,000 USD', valueColor: 'text-secondary-fixed-dim font-bold' },
      ],
      price: '$499',
      license: 'LIFETIME LICENSE',
      includes: 'VIP DESK ACCESS',
      buttonColor: 'bg-tertiary text-surface-container-lowest font-bold hover:bg-tertiary-fixed',
      buttonText: 'Beli EA',
      borderColor: 'bg-tertiary',
    },
  ];

  const comparisonData = [
    {
      capability: 'High-Impact News Filter (Auto-Pause)',
      goldBuster: 'ENABLED (30m Before/After)',
      scalperPro: 'ENABLED (Asian Session Only)',
      institutionalTitan: 'AI FORECAST FILTERED',
    },
    {
      capability: 'Dynamic Lot Sizing (Equity-Based)',
      goldBuster: 'YES (0.01 per $500)',
      scalperPro: 'YES (Fixed or Risk %)',
      institutionalTitan: 'YES (Portfolio Sizing)',
    },
    {
      capability: 'VPS Latency Optimizer',
      goldBuster: '< 5ms Protocol',
      scalperPro: '< 2ms Protocol',
      institutionalTitan: '< 10ms Acceptable',
    },
    {
      capability: 'Automatic Recovery Algorithm',
      goldBuster: 'Soft Averaging (No Martingale)',
      scalperPro: 'Disabled (Strict SL)',
      institutionalTitan: 'Hedge Grid Counter',
      goldBusterColor: 'text-primary',
      scalperProColor: 'text-on-surface-variant',
      institutionalTitanColor: 'text-primary',
    },
    {
      capability: 'DD Shield & Hard Equity Stop',
      goldBuster: 'HARD STOP 10% EQUITY',
      scalperPro: 'HARD STOP 5% DAILY',
      institutionalTitan: 'MULTI-TIER DD SHIELD',
    },
  ];

  return (
    <section className="w-full px-margin-desktop py-space-xl bg-surface-container-lowest" id="ea-products">
      <div className="flex flex-col mb-space-xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-caps text-label-caps text-primary uppercase">ALGORITHMIC REPERTOIRE</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Flagship Expert Advisors</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Algoritma siap pakai yang telah dioptimasi untuk berbagai profil resiko dan instrumen spesifik. Kode C++ MQL berkecepatan tinggi.
        </p>
      </div>

      {/* 3 PRODUCT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
        {products.map((product) => (
          <div key={product.id} className="bg-surface-container flex flex-col justify-between p-space-lg hover:bg-surface-container-high transition-all group relative">
            <div className={`absolute top-0 left-0 right-0 h-1 ${product.borderColor}`}></div>
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className={`font-label-caps text-label-caps px-2 py-0.5 ${product.tagColor}`}>{product.tag}</span>
                <span className={`font-code-telemetry text-code-telemetry ${product.platformColor}`}>{product.platform}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight mb-space-xs">
                {product.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                {product.description}
              </p>
              <div className="bg-surface-container-lowest p-space-sm flex flex-col gap-space-xs font-code-telemetry text-code-telemetry mb-space-md">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-1 border-b border-surface-container/50">
                    <span className="text-on-surface-variant">{spec.label}</span>
                    <span className={spec.valueColor}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-space-md pt-space-xs">
                <div>
                  <span className="font-code-telemetry text-code-telemetry text-on-surface-variant block">{product.license}</span>
                  <span className="font-metric-xl text-metric-xl text-on-surface font-bold">{product.price}</span>
                </div>
                <span className="font-code-telemetry text-code-telemetry text-secondary-container">{product.includes}</span>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-headline-sm text-headline-sm uppercase">
                <button className="bg-surface-container-high hover:bg-surface-bright text-on-surface py-2 text-center transition-colors">
                  Detail Specs
                </button>
                <button className={`${product.buttonColor} py-2 text-center transition-colors`}>
                  {product.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* COMPARISON MATRIX QUICK GLANCE TABLE */}
      <div className="bg-surface-container p-space-md">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-caps text-label-caps text-on-surface uppercase">FEATURE MATRIX SNAPSHOT</span>
          <span className="font-code-telemetry text-code-telemetry text-on-surface-variant">100% HARD-CODED SAFETY CONTROLS</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-code-telemetry text-code-telemetry">
            <thead>
              <tr className="bg-surface-container-lowest text-on-surface-variant uppercase">
                <th className="p-3">PROTOCOL CAPABILITY</th>
                <th className="p-3">GOLD BUSTER</th>
                <th className="p-3">SCALPER PRO</th>
                <th className="p-3">INSTITUTIONAL TITAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high/40">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-surface-container-low">
                  <td className="p-3 text-on-surface font-semibold">{row.capability}</td>
                  <td className={`p-3 ${row.goldBusterColor || 'text-secondary-fixed-dim'}`}>{row.goldBuster}</td>
                  <td className={`p-3 ${row.scalperProColor || 'text-secondary-fixed-dim'}`}>{row.scalperPro}</td>
                  <td className={`p-3 ${row.institutionalTitanColor || 'text-secondary-fixed-dim'}`}>{row.institutionalTitan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EAProducts;