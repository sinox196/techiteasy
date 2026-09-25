import { Clock, Database, Gauge, Zap } from 'lucide-react';
import { Counter } from '../components/ui/Counter';
import { Stagger, StaggerItem } from '../components/ui/Reveal';

const METRICS = [
  { icon: Gauge, value: 40, suffix: '%', prefix: '+', label: 'temps administratif économisé' },
  { icon: Zap, value: 60, suffix: '%', prefix: '-', label: 'opérations manuelles' },
  { icon: Database, value: 100, suffix: '%', prefix: '', label: 'processus centralisés' },
  { icon: Clock, value: 24, suffix: '/7', prefix: '', label: 'accès à vos données' },
];

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-green/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-10%] top-1/4 h-[300px] w-[300px] rounded-full bg-cyan/10 blur-[100px]" />

      <div className="container-px relative mx-auto max-w-6xl">
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
          {METRICS.map((m) => (
            <StaggerItem key={m.label}>
              <div className="text-center lg:border-r lg:border-white/10 lg:last:border-none">
                <m.icon className="mx-auto mb-3 h-5 w-5 text-green-soft" strokeWidth={1.8} />
                <p className="font-display text-[36px] font-extrabold tracking-tight sm:text-[44px]">
                  <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="mx-auto mt-1.5 max-w-[160px] text-[13px] font-medium leading-snug text-white/50">
                  {m.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
