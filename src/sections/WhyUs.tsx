import { MapPin, Puzzle, TrendingUp, Wand2, Zap } from 'lucide-react';
import { Kicker } from '../components/ui/Kicker';
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal';

const DIFFERENTIATORS = [
  { icon: Wand2, title: 'Simple', desc: 'Des outils faciles à comprendre et à adopter.' },
  { icon: Puzzle, title: 'Intégré', desc: 'Une expérience cohérente entre vos processus.' },
  { icon: Zap, title: 'Automatisé', desc: 'Moins d’opérations manuelles.' },
  { icon: TrendingUp, title: 'Évolutif', desc: 'Des solutions conçues pour accompagner votre croissance.' },
  { icon: MapPin, title: 'Local & proche', desc: 'Une équipe proche des réalités des entreprises.' },
];

export function WhyUs() {
  return (
    <section id="pourquoi" className="relative bg-mist-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Pourquoi TechITEasy</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              La technologie doit s'adapter à votre entreprise.
              <br />
              Pas l'inverse.
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {DIFFERENTIATORS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green/30 hover:shadow-card-hover">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-deep via-blue to-green text-white transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[16.5px] font-extrabold text-navy-dark">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-dark/55">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
