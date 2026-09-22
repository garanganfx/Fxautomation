import { useState } from 'react';

const RiskCalculator = () => {
  const [balance, setBalance] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1.5);
  const [pair, setPair] = useState('XAUUSD');
  const [slPips, setSlPips] = useState(30);

  const recalc = () => {
    const riskAmount = (balance * (riskPercent / 100));
    let pipValuePerLot = 10; // Standard FX pairs EURUSD GBPUSD $10/pip/lot
    if (pair === 'XAUUSD') {
      pipValuePerLot = 10; // 0.10 move on standard 100oz = $10
    }
    const calculatedLot = riskAmount / (slPips * pipValuePerLot);
    const sanitizedLot = Math.max(0.01, calculatedLot).toFixed(2);

    return {
      lot: sanitizedLot + ' LOT',
      loss: '$' + riskAmount.toFixed(2),
      reward: '+$' + (riskAmount * 2.5).toFixed(2),
    };
  };

  const results = recalc();

  return (
    <section className="w-full px-margin-desktop py-space-xl bg-surface-container-lowest" id="risk-calculator">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* CALCULATOR INPUT TERMINAL */}
        <div className="lg:col-span-7 bg-surface-container p-space-lg shadow-xl">
          <div className="flex items-center gap-2 mb-space-xs">
            <span className="w-2 h-2 bg-secondary-container"></span>
            <span className="font-label-caps text-label-caps text-secondary-container uppercase">PRECISION SIZING ENGINE</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-space-sm">
            Interactive Risk & Lot Calculator
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
            Kalkulasi alokasi volume transaksi otomatis sesuai manajemen risiko modal institusi sebelum eksekusi order.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-lg font-code-telemetry text-code-telemetry">
            <div className="flex flex-col">
              <label className="text-on-surface-variant mb-1 uppercase font-semibold">Account Capital / Balance ($)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-on-surface-variant">$</span>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface pl-8 pr-3 py-2 border-0 outline-none focus:ring-1 focus:ring-primary font-bold text-body-lg"
                  id="calc-balance"
                  type="number"
                  value={balance}
                  onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-on-surface-variant mb-1 uppercase font-semibold">Risk Percentage Per Trade (%)</label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-lowest text-on-surface pl-3 pr-8 py-2 border-0 outline-none focus:ring-1 focus:ring-primary font-bold text-body-lg"
                  id="calc-risk"
                  step="0.1"
                  type="number"
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(parseFloat(e.target.value) || 0)}
                />
                <span className="absolute right-3 top-2.5 text-on-surface-variant">%</span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-on-surface-variant mb-1 uppercase font-semibold">Trading Instrument / Pair</label>
              <select
                className="w-full bg-surface-container-lowest text-on-surface px-3 py-2.5 border-0 outline-none focus:ring-1 focus:ring-primary font-bold text-body-lg"
                id="calc-pair"
                value={pair}
                onChange={(e) => setPair(e.target.value)}
              >
                <option value="XAUUSD">XAUUSD (Gold 100oz)</option>
                <option value="EURUSD">EURUSD (Standard 100k)</option>
                <option value="GBPUSD">GBPUSD (Standard 100k)</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-on-surface-variant mb-1 uppercase font-semibold">Stop Loss Distance (Pips)</label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-lowest text-on-surface pl-3 pr-12 py-2 border-0 outline-none focus:ring-1 focus:ring-primary font-bold text-body-lg"
                  id="calc-sl"
                  type="number"
                  value={slPips}
                  onChange={(e) => setSlPips(parseFloat(e.target.value) || 1)}
                />
                <span className="absolute right-3 top-2.5 text-on-surface-variant">PIPS</span>
              </div>
            </div>
          </div>

          {/* DYNAMIC OUTPUT PANEL */}
          <div className="bg-surface-container-lowest p-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">RECOMMENDED LOT</span>
              <span className="font-metric-xl text-metric-xl text-secondary-fixed-dim font-bold" id="res-lot">{results.lot}</span>
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant">Micro/Standard MT5</span>
            </div>
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">MAX MONETARY RISK</span>
              <span className="font-metric-xl text-metric-xl text-error font-bold" id="res-loss">{results.loss}</span>
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant">Strict Stop Limit</span>
            </div>
            <div className="flex flex-col">
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant uppercase">RISK-TO-REWARD</span>
              <span className="font-metric-xl text-metric-xl text-primary font-bold">1 : 2.5</span>
              <span className="font-code-telemetry text-code-telemetry text-on-surface-variant">Estimated Target: {results.reward}</span>
            </div>
          </div>
        </div>

        {/* FEATURES CHECKLIST & SAFEGUARD PROTOCOLS */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <div className="bg-surface-container p-space-lg">
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-space-md">
              Algorithmic Safeguard Protocols
            </h3>
            <div className="space-y-space-md font-body-md text-body-md">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[20px] mt-0.5">shield</span>
                <div>
                  <strong className="text-on-surface block font-headline-sm text-headline-sm">Hard Stop Loss Per Trade</strong>
                  <p className="text-on-surface-variant text-body-sm">Setiap posisi terpasang SL di level broker sejak milidetik pertama eksekusi, mencegah floating minus berkepanjangan.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">newspaper</span>
                <div>
                  <strong className="text-on-surface block font-headline-sm text-headline-sm">ForexFactory Real-Time News Filter</strong>
                  <p className="text-on-surface-variant text-body-sm">Koneksi API kalender ekonomi otomatis membekukan order baru 30 menit sebelum dan sesudah rilis berita High Impact (NFP, CPI, FOMC).</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[20px] mt-0.5">speed</span>
                <div>
                  <strong className="text-on-surface block font-headline-sm text-headline-sm">Slippage & Spread Protection</strong>
                  <p className="text-on-surface-variant text-body-sm">EA membatalkan eksekusi jika spread melebihi ambang batas toleransi (contoh: max 2.5 pips pada emas saat rollover sesi).</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-error text-[20px] mt-0.5">dangerous</span>
                <div>
                  <strong className="text-on-surface block font-headline-sm text-headline-sm">Daily Loss Limit Kill-Switch</strong>
                  <p className="text-on-surface-variant text-body-sm">Pengunci otomatis yang menonaktifkan seluruh aktivitas trading harian jika akumulasi floating drawdown mencapai 3% modal.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-space-md flex items-center justify-between font-code-telemetry text-code-telemetry">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-container rounded-full"></span>
              <span>SYSTEM KILL-SWITCH: READY</span>
            </div>
            <span className="text-on-surface-variant">AUTO-RESET: 00:00 GMT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskCalculator;