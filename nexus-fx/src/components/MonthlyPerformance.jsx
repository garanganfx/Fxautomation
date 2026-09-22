const MonthlyPerformance = () => {
  const monthlyData = [
    { month: 'JAN', gain: '+9.4%', color: 'bg-secondary-container', width: '94%', isCurrent: false },
    { month: 'FEB', gain: '+7.8%', color: 'bg-secondary-container', width: '78%', isCurrent: false },
    { month: 'MAR', gain: '+12.2%', color: 'bg-secondary-container', width: '100%', isCurrent: false },
    { month: 'APR', gain: '+6.5%', color: 'bg-secondary-container', width: '65%', isCurrent: false },
    { month: 'MAY', gain: '+8.1%', color: 'bg-secondary-container', width: '81%', isCurrent: false },
    { month: 'JUN', gain: '+10.4%', color: 'bg-secondary-container', width: '95%', isCurrent: false },
    { month: 'JUL', gain: '+7.2%', color: 'bg-secondary-container', width: '72%', isCurrent: false },
    { month: 'AUG', gain: '+5.9%', color: 'bg-secondary-container', width: '59%', isCurrent: false },
    { month: 'SEP', gain: '+11.3%', color: 'bg-secondary-container', width: '98%', isCurrent: false },
    { month: 'OCT', gain: '+8.7%', color: 'bg-secondary-container', width: '87%', isCurrent: false },
    { month: 'NOV', gain: '+9.1%', color: 'bg-secondary-container', width: '91%', isCurrent: false },
    { month: 'DEC (RUNNING)', gain: '+6.2%', color: 'bg-primary', width: '62%', isCurrent: true },
  ];

  const testimonials = [
    {
      badge: 'VERIFIED MYFXBOOK',
      badgeColor: 'text-secondary-fixed-dim',
      broker: 'TICKMILL VIP ECN',
      quote: '"Sudah running Gold Buster 6 bulan di VPS Singapore. Drawdown sangat terkendali di bawah 8%, profit rata-rata 7-9% sebulan tanpa perlu begadang mantau market US session."',
      author: 'Rian S. • Jakarta',
      account: 'Akun $25,000 MT5',
      profit: '+$14,200 PROFIT',
    },
    {
      badge: 'VERIFIED FXBLUE',
      badgeColor: 'text-secondary-fixed-dim',
      broker: 'IC MARKETS RAW SPREAD',
      quote: '"Scalper Pro di EURUSD sangat bersih eksekusinya. Fitur cut-loss otomatis saat NFP bekerja mulus tanpa error slippage. Cocok untuk trader yang cari passive income disiplin."',
      author: 'Darmawan K. • Surabaya',
      account: 'Akun $10,000 MT4',
      profit: '+$6,840 PROFIT',
    },
    {
      badge: 'VERIFIED INVESTOR PASS',
      badgeColor: 'text-secondary-fixed-dim',
      broker: 'FUSION MARKETS',
      quote: '"Institutional Titan adalah EA paling stabil yang pernah saya sewa. Manajemen resikonya setingkat fund manager institusi, tidak ada teknik martingale berbahaya."',
      author: 'Bramantyo H. • Medan',
      account: 'Akun $50,000 MT5',
      profit: '+$28,450 PROFIT',
    },
  ];

  return (
    <section className="w-full px-margin-desktop py-space-xl bg-surface-container-lowest">
      <div className="flex flex-col mb-space-xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 bg-secondary-container"></span>
          <span className="font-label-caps text-label-caps text-secondary-container uppercase">AUDITED TRACK RECORD</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Monthly Performance Matrix</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tabel konsistensi akumulasi profit bulanan sepanjang tahun fiskal dengan bar visual indikator pertumbuhan modal.
        </p>
      </div>

      {/* MONTHLY MATRIX GRID (12 MONTHS) */}
      <div className="bg-surface-container p-space-md mb-space-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-space-xs font-code-telemetry text-code-telemetry">
          {monthlyData.map((month, index) => (
            <div key={index} className="bg-surface-container-lowest p-space-sm flex flex-col justify-between">
              <div className="flex justify-between text-on-surface-variant">
                <span>{month.month}</span>
                <span className={`${month.isCurrent ? 'text-primary' : 'text-secondary-fixed-dim'} font-bold`}>{month.gain}</span>
              </div>
              <div className="w-full bg-surface-container h-1.5 mt-2 overflow-hidden">
                <div className={`${month.color} h-full transition-all duration-1000`} style={{ width: month.width }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between mt-space-md pt-space-sm border-t border-surface-container-high/60 font-code-telemetry text-code-telemetry">
          <span className="text-on-surface-variant">YTD TOTAL ACCUMULATION: <span className="text-secondary-fixed-dim font-bold text-body-lg">+104.4% GAIN</span></span>
          <span className="text-on-surface-variant">ZERO LOSING MONTHS RECORDED IN 2024</span>
        </div>
      </div>

      {/* VERIFIED SCREENSHOTS & TESTIMONIALS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-surface-container p-space-md flex flex-col justify-between">
            <div className="mb-space-md">
              <div className="flex items-center justify-between mb-2 font-code-telemetry text-code-telemetry">
                <span className={`${testimonial.badgeColor} flex items-center gap-1`}>
                  <span className="w-1.5 h-1.5 bg-secondary-fixed-dim"></span>
                  {testimonial.badge}
                </span>
                <span className="text-on-surface-variant">{testimonial.broker}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface mb-space-sm">
                {testimonial.quote}
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-xs border-t border-surface-container-high/60 font-code-telemetry text-code-telemetry">
              <div>
                <div className="text-on-surface font-bold">{testimonial.author}</div>
                <div className="text-on-surface-variant">{testimonial.account}</div>
              </div>
              <span className="text-primary font-bold">{testimonial.profit}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MonthlyPerformance;