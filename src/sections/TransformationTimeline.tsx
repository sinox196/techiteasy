import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Rocket, Wand2 } from 'lucide-react';
import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';

const STEPS = [
  {
    n: '01',
    icon: Compass,
    title: 'Comprendre',
    desc: 'Nous analysons vos processus et vos besoins.',
  },
  {
    n: '02',
    icon: Wand2,
    title: 'Digitaliser',
    desc: 'Nous construisons les bons outils.',
  },
  {
    n: '03',
    icon: Rocket,
    title: 'Accélérer',
    desc: 'Votre entreprise gagne en efficacité.',
  },
];

export function TransformationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Notre méthode</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              Votre transformation digitale commence ici.
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          {/* mobile vertical line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-navy-deep/8 sm:hidden">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-blue to-green" />
          </div>
          {/* desktop horizontal line */}
          <div className="absolute left-[8%] right-[8%] top-11 hidden h-0.5 bg-navy-deep/8 sm:block">
            <motion.div style={{ width: lineWidth }} className="h-full bg-gradient-to-r from-blue to-green" />
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <div className="relative flex items-start gap-5 pl-16 sm:flex-col sm:items-center sm:pl-0 sm:text-center">
                  <div className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-navy-deep/10 bg-white shadow-card sm:relative sm:left-auto sm:h-[88px] sm:w-[88px] sm:rounded-3xl">
                    <step.icon className="h-5 w-5 text-blue sm:h-9 sm:w-9" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[12px] font-extrabold tracking-widest text-green/80 sm:mt-5">{step.n}</p>
                    <h3 className="mt-1 text-[19px] font-extrabold text-navy-dark sm:text-[21px]">{step.title}</h3>
                    <p className="mt-1.5 max-w-[220px] text-[13.5px] leading-relaxed text-navy-dark/55 sm:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
