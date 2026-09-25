import { Compass, Target } from 'lucide-react';
import { LogoMark } from '../components/Logo';
import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';

export function About() {
  return (
    <section id="apropos" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <Kicker>À propos de TechITEasy</Kicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance font-display text-[30px] font-extrabold leading-tight text-navy-dark sm:text-[38px]">
                Nous construisons des outils qui rendent le digital simple.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-dark/60">
                TechITEasy accompagne les entreprises dans leur transformation digitale en
                concevant des solutions simples, modernes et efficaces.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.2}>
                <div className="h-full rounded-2xl border border-navy-deep/8 bg-mist-50 p-6">
                  <Target className="h-6 w-6 text-blue" strokeWidth={1.8} />
                  <h3 className="mt-4 text-[15px] font-extrabold text-navy-dark">Mission</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-dark/60">
                    Rendre la technologie accessible, utile et naturelle dans le quotidien des
                    entreprises.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="h-full rounded-2xl border border-navy-deep/8 bg-mist-50 p-6">
                  <Compass className="h-6 w-6 text-green" strokeWidth={1.8} />
                  <h3 className="mt-4 text-[15px] font-extrabold text-navy-dark">Vision</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-dark/60">
                    Créer un écosystème digital où chaque processus devient plus simple, connecté
                    et intelligent.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.18} className="relative">
            <div className="relative flex h-full min-h-[340px] items-center justify-center overflow-hidden rounded-3xl bg-navy-gradient">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute h-64 w-64 rounded-full bg-green/15 blur-[90px]" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
                <LogoMark className="h-12 w-12" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">Notre écosystème</p>
                <p className="mt-1 text-[14px] font-bold text-white">SIMPLIFY · AUTOMATE · DIGITALIZE · CONNECT · GROW</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
