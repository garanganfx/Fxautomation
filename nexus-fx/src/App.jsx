import Header from './components/Header';
import Hero from './components/Hero';
import PerformancePanel from './components/PerformancePanel';
import EAProducts from './components/EAProducts';
import RiskCalculator from './components/RiskCalculator';
import MonthlyPerformance from './components/MonthlyPerformance';
import CTAFooter from './components/CTAFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="quant-grid-bg font-body-md text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container dark">
      <Header />
      <main className="w-full pt-16">
        <div className="flex flex-col w-full text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
          {/* TOP PROTOCOL BAR (TELEMETRY STRIP) */}
          <div className="w-full bg-surface-container-lowest px-margin-desktop py-space-xs flex flex-wrap items-center justify-between gap-space-sm font-code-telemetry text-code-telemetry">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-1.5 text-secondary-fixed-dim">
                <span className="w-1.5 h-1.5 bg-secondary-fixed-dim animate-ping"></span>
                <span>NODE: SG-EQUINIX-TY3</span>
              </div>
              <span className="text-surface-bright">•</span>
              <span className="text-on-surface-variant">EXECUTION SPEED: <span className="text-on-surface font-semibold">0.82ms</span></span>
              <span className="text-surface-bright hidden sm:inline">•</span>
              <span className="text-on-surface-variant hidden sm:inline">TICK DRIFT: <span className="text-secondary-fixed-dim">0.00%</span></span>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="text-primary font-semibold">MT4/MT5 COMPLIANT BRIDGE v4.81</span>
              <span className="text-on-surface-variant">STATUS: FULL OPERATIONAL</span>
            </div>
          </div>

          <Hero />
          <PerformancePanel />
          <EAProducts />
          <RiskCalculator />
          <MonthlyPerformance />
          <CTAFooter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;