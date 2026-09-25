import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';
import { RHPaieShowcase } from '../components/products/RHPaieShowcase';
import { FacturationShowcase } from '../components/products/FacturationShowcase';

export function Products() {
  return (
    <section id="solutions" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Nos solutions</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              Deux solutions. Un même objectif :
              <br />
              simplifier votre entreprise.
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-navy-deep/8">
          <RHPaieShowcase />
          <FacturationShowcase />
        </div>
      </div>
    </section>
  );
}
