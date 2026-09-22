import { useState } from 'react';

const PerformancePanel = () => {
  const [activeTf, setActiveTf] = useState('all');

  const timeframes = [
    { id: 'd', label: 'DAILY' },
    { id: 'w', label: 'WEEKLY' },
    { id: 'm', label: 'MONTHLY' },
    { id: 'all', label: 'ALL-TIME' },
  ];

  const switchTf = (tf) => {
    setActiveTf(tf);
    const line = document.getElementById('equity-line');
    if (!line) return;

    const paths = {
      d: 'M0,200 L120,180 L250,190 L400,160 L600,140 L800,90 L1000,40',
      w: 'M0,230 L200,210 L400,170 L600,150 L800,90 L1000,30',
      m: 'M0,240 L250,220 L500,180 L750,110 L1000,25',
      all: 'M0,250 L70,240 L140,225 L210,210 L280,200 L350,175 L400,195 L440,165 L520,140 L600,120 L680,95 L750,85 L820,60 L900,45 L1000,20',
    };
    
    line.setAttribute('d', paths[tf]);
  };

  const stats = [
    {
      label: 'NET PROFIT',
      value: '+348.5%',
      detail: '$10,000 → $44,850',
      badge: '▲ REAL ACCOUNT',
      badgeColor: 'text-secondary-container',
      valueColor: 'text-secondary-fixed-dim',
    },
    {
      label: 'WIN RATE',
      value: '74.8%',
      detail: '3,280 Trades Executed',
      badge: 'STP FILLED',
      badgeColor: 'text-on-surface-variant',
      valueColor: 'text-on-surface',
    },
    {
      label: 'PROFIT FACTOR',
      value: '2.34',
      detail: 'Gross P: $68.2k / L: $23.3k',
      badge: 'OPTIMIZED ALPHA',
      badgeColor: 'text-primary',
      valueColor: 'text-primary',
    },
    {
      label: 'MAX DRAWDOWN',
      value: '7.2%',
      detail: 'Institutional Safeguard',
      badge: 'LOW EXPOSURE',
      badgeColor: 'text-secondary-fixed-dim',
      valueColor: 'text-on-surface',
    },
    {
      label: 'MONTHLY AVERAGE',
      value: '+8.4%',
      detail: 'Compounded Horizon',
      badge: '36 MONTH ROLLING',
      badgeColor: 'text-on-surface-variant',
      valueColor: 'text-secondary-fixed-dim',
    },
    {
      label: 'SHARPE RATIO',
      value: '2.81',
      detail: 'Risk-Adjusted Alpha',
      badge: 'TIER 1 BENCHMARK',
      badgeColor: 'text-primary',
      valueColor: 'text-primary',
    },
  ];

  return (
    <section className="w-full px-margin-desktop py-space-xl bg-surface-container-lowest" id="performance-panel">
      <div className="bg-surface-container p-space-lg shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-secondary-container"></span>
              <span className="font-label-caps text-label-caps text-secondary-container uppercase">AUDITED PERFORMANCE METRICS</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Live Execution Telemetry</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Verified by Myfxbook & FXBlue Institutional Audits. Direct broker STP/ECN feed data.</p>
          </div>
          {/* TIMEFRAME PILLS & PAIRS SELECTOR */}
          <div className="flex flex-wrap items-center gap-space-sm font-label-caps text-label-caps">
            <div className="flex items-center bg-surface-container-lowest p-1">
              {timeframes.map((tf) => (
                <button
                  key={tf.id}
                  className={`px-3 py-1 transition-colors ${activeTf === tf.id 
                    ? 'bg-primary text-surface-container-lowest font-bold' 
                    : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  onClick={() => switchTf(tf.id)}
                >
                  {tf.label}
                </button>
              ))}
            </div>
            <div className="bg-surface-container-low px-space-sm py-1.5 text-on-surface flex items-center gap-2">
              <span className="text-on-surface-variant">PAIRS:</span>
              <span className="text-primary font-semibold">XAUUSD, EURUSD, GBPUSD</span>
              <span className="text-on-surface-variant">• TF: M15, M5</span>
            </div>
          </div>
        </div>

        {/* KEY STATS GRID (6 TILES) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-xs mb-space-lg">
          {stats.map((stat, index) => (
            <div key={index} className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">{stat.label}</span>
              <div className="my-1">
                <div className={`font-metric-xl text-metric-xl ${stat.valueColor} font-bold tracking-tight`}>{stat.value}</div>
                <div className="font-code-telemetry text-code-telemetry text-on-surface-variant">{stat.detail}</div>
              </div>
              <span className={`font-label-caps text-label-caps ${stat.badgeColor}`}>{stat.badge}</span>
            </div>
          ))}
        </div>

        {/* EQUITY CURVE VISUAL TELEMETRY WIDGET */}
        <div className="bg-surface-container-lowest p-space-md relative overflow-hidden">
          <div className="flex items-center justify-between mb-space-sm font-code-telemetry text-code-telemetry">
            <div className="flex items-center gap-space-sm">
              <span className="text-on-surface font-bold">EQUITY & BALANCE TRAJECTORY (ALL-TIME AUDIT)</span>
              <span className="text-secondary-fixed-dim">• LIVE POOL VALUE: $44,850.40</span>
            </div>
            <div className="flex items-center gap-space-md text-on-surface-variant">
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-secondary-container"></span> Equity</span>
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-primary"></span> Balance</span>
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-error/60"></span> Drawdown Peak</span>
            </div>
          </div>
          {/* SVG CHART AREA */}
          <div className="w-full h-72 relative">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 280">
              <defs>
                <linearGradient id="equityGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#03f59b" stopOpacity="0.25"></stop>
                  <stop offset="100%" stopColor="#03f59b" stopOpacity="0.0"></stop>
                </linearGradient>
              </defs>
              {/* HORIZONTAL GRID LINES */}
              <line stroke="#31353f" strokeDasharray="2 4" strokeWidth="0.75" x1="0" x2="1000" y1="40" y2="40"></line>
              <line stroke="#31353f" strokeDasharray="2 4" strokeWidth="0.75" x1="0" x2="1000" y1="100" y2="100"></line>
              <line stroke="#31353f" strokeDasharray="2 4" strokeWidth="0.75" x1="0" x2="1000" y1="160" y2="160"></line>
              <line stroke="#31353f" strokeDasharray="2 4" strokeWidth="0.75" x1="0" x2="1000" y1="220" y2="220"></line>
              {/* RECOVERY & DRAWDOWN SHADES */}
              <rect fill="#93000a" fillOpacity="0.08" height="240" width="60" x="380" y="40"></rect>
              <text className="font-code-telemetry" fill="#ffb4ab" fontSize="8" x="385" y="55">MAX DD 7.2%</text>
              {/* GRADIENT FILL */}
              <path d="M0,250 L70,240 L140,225 L210,210 L280,200 L350,175 L400,195 L440,165 L520,140 L600,120 L680,95 L750,85 L820,60 L900,45 L1000,20 L1000,280 L0,280 Z" fill="url(#equityGrad)"></path>
              {/* BALANCE LINE (AMBER) */}
              <path d="M0,255 L70,245 L140,230 L210,215 L280,205 L350,180 L400,180 L440,170 L520,145 L600,125 L680,100 L750,90 L820,65 L900,50 L1000,25" stroke="#f59e0b" strokeLinecap="square" strokeWidth="1.5"></path>
              {/* EQUITY CURVE (GREEN SHARP SLOPING UP) */}
              <path 
                id="equity-line" 
                d="M0,250 L70,240 L140,225 L210,210 L280,200 L350,175 L400,195 L440,165 L520,140 L600,120 L680,95 L750,85 L820,60 L900,45 L1000,20" 
                stroke="#03f59b" 
                strokeLinecap="square" 
                strokeWidth="2.5"
              ></path>
              {/* DATA POINTS */}
              <circle cx="350" cy="175" fill="#03f59b" r="3"></circle>
              <circle cx="400" cy="195" fill="#ffb4ab" r="3"></circle>
              <circle cx="750" cy="85" fill="#03f59b" r="3"></circle>
              <circle cx="1000" cy="20" fill="#03f59b" r="4"></circle>
            </svg>
            {/* AXIS LABELS */}
            <div className="absolute bottom-1 left-2 font-code-telemetry text-code-telemetry text-on-surface-variant">JAN (M1)</div>
            <div className="absolute bottom-1 left-1/4 font-code-telemetry text-code-telemetry text-on-surface-variant">APR (M4)</div>
            <div className="absolute bottom-1 left-2/4 font-code-telemetry text-code-telemetry text-on-surface-variant">JUL (M7)</div>
            <div className="absolute bottom-1 left-3/4 font-code-telemetry text-code-telemetry text-on-surface-variant">OCT (M10)</div>
            <div className="absolute bottom-1 right-2 font-code-telemetry text-code-telemetry text-secondary-container font-bold">CURRENT: $44.8K</div>
          </div>
          <div className="flex flex-wrap items-center justify-between pt-space-sm mt-space-sm border-t border-surface-container-high/60 font-code-telemetry text-code-telemetry text-on-surface-variant">
            <div>DATA AUDIT: #MYFX-98214-INSTITUTIONAL • REAL TICK SPREAD INCLUDED</div>
            <div className="text-primary font-bold">SMOOTH CURVE ALGORITHM v4.2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePanel;