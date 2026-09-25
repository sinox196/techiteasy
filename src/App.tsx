import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ComplexToSimple } from './sections/ComplexToSimple';
import { Products } from './sections/Products';
import { Pricing } from './sections/Pricing';
import { DigitalFlow } from './sections/DigitalFlow';
import { Automation } from './sections/Automation';
import { BentoFeatures } from './sections/BentoFeatures';
import { TransformationTimeline } from './sections/TransformationTimeline';
import { WhyUs } from './sections/WhyUs';
import { Metrics } from './sections/Metrics';
import { About } from './sections/About';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <ComplexToSimple />
        <Products />
        <Pricing />
        <DigitalFlow />
        <Automation />
        <BentoFeatures />
        <TransformationTimeline />
        <WhyUs />
        <Metrics />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
