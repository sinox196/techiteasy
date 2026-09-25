import { useRef } from 'react';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import {
  BarChart3,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  ListChecks,
  Mail,
  Receipt,
} from 'lucide-react';
import { LogoMark } from '../components/Logo';
import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';

const MESSY_CARDS = [
  { icon: FileSpreadsheet, label: 'Excel', x: -230, y: -140, rotate: -14 },
  { icon: Mail, label: 'E-mails', x: 40, y: -190, rotate: 10 },
  { icon: FileText, label: 'Documents', x: -280, y: 40, rotate: 8 },
  { icon: ListChecks, label: 'Tâches manuelles', x: 260, y: -80, rotate: -8 },
  { icon: FolderKanban, label: 'Fichiers paie', x: -60, y: 150, rotate: 14 },
  { icon: Receipt, label: 'Factures papier', x: 220, y: 130, rotate: -6 },
  { icon: FileSpreadsheet, label: 'Tableurs', x: 10, y: 210, rotate: 6 },
];

function MobileVersion() {
  return (
    <div className="lg:hidden">
      <Reveal>
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-navy-dark/40">Avant</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {MESSY_CARDS.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-1.5 rounded-xl border border-navy-deep/10 bg-mist-50 px-3 py-2 text-[12.5px] font-semibold text-navy-dark/70"
            >
              <c.icon className="h-3.5 w-3.5" />
              {c.label}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="my-8 flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-dark shadow-glow">
          <LogoMark className="h-8 w-8" />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-green">Après</p>
        <UnifiedDashboard />
      </Reveal>
    </div>
  );
}

function UnifiedDashboard() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-navy-deep/8 bg-white shadow-card-hover">
      <div className="flex items-center gap-2 border-b border-navy-deep/8 px-4 py-3">
        <LogoMark className="h-5 w-5" />
        <span className="text-[12.5px] font-bold text-navy-dark">TechITEasy — Vue d'ensemble</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="rounded-xl bg-mist-50 p-3">
          <p className="text-[11px] font-semibold text-navy-dark/50">Collaborateurs</p>
          <p className="text-lg font-extrabold text-navy-dark">126</p>
        </div>
        <div className="rounded-xl bg-mist-50 p-3">
          <p className="text-[11px] font-semibold text-navy-dark/50">CA du mois</p>
          <p className="text-lg font-extrabold text-navy-dark">48 750 DT</p>
        </div>
        <div className="col-span-2 flex items-end gap-1.5 rounded-xl bg-mist-50 p-3">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue to-green"
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface MessyCardData {
  icon: typeof FileSpreadsheet;
  label: string;
  x: number;
  y: number;
  rotate: number;
}

function MessyCard({
  card,
  mergeProgress,
  opacity,
}: {
  card: MessyCardData;
  mergeProgress: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  const x = useTransform(mergeProgress, [0, 1], [card.x, 0]);
  const y = useTransform(mergeProgress, [0, 1], [card.y, 0]);
  const rotate = useTransform(mergeProgress, [0, 1], [card.rotate, 0]);
  const scale = useTransform(mergeProgress, [0, 1], [1, 0.3]);

  return (
    <div className="absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        style={{ x, y, rotate, scale, opacity }}
        className="flex items-center gap-2 rounded-xl border border-navy-deep/8 bg-white px-3.5 py-2.5 text-[12.5px] font-bold text-navy-dark/75 shadow-card"
      >
        <card.icon className="h-4 w-4 shrink-0 text-navy-deep/50" />
        {card.label}
      </motion.div>
    </div>
  );
}

export function ComplexToSimple() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const messyOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
  const mergeProgress = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const coreScale = useTransform(scrollYProgress, [0.3, 0.5], [0.5, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.28, 0.45], [0, 1]);
  const dashOpacity = useTransform(scrollYProgress, [0.5, 0.72], [0, 1]);
  const dashY = useTransform(scrollYProgress, [0.5, 0.75], [40, 0]);
  const labelAfterOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  return (
    <section className="relative bg-mist-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-0">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Transformation</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              Le digital devrait simplifier.
              <br />
              Pas compliquer.
            </h2>
          </Reveal>
        </div>
      </div>

      <MobileVersion />

      {/* Desktop pinned scroll sequence */}
      <div ref={ref} className="relative mx-auto hidden max-w-6xl lg:block" style={{ height: '220vh' }}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="container-px grid w-full grid-cols-[1fr_auto_1fr] items-center gap-6">
            <div className="relative h-[420px]">
              <motion.p
                style={{ opacity: messyOpacity }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold uppercase tracking-[0.16em] text-navy-dark/35"
              >
                Avant — outils déconnectés
              </motion.p>
              {MESSY_CARDS.map((card, i) => (
                <MessyCard key={card.label + i} card={card} mergeProgress={mergeProgress} opacity={messyOpacity} />
              ))}
            </div>

            <motion.div
              style={{ scale: coreScale, opacity: coreOpacity }}
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-navy-dark shadow-glow"
            >
              <LogoMark className="h-11 w-11" />
            </motion.div>

            <div className="relative h-[420px]">
              <motion.p
                style={{ opacity: labelAfterOpacity }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold uppercase tracking-[0.16em] text-green"
              >
                Après — Centralisez. Automatisez. Pilotez.
              </motion.p>
              <div className="absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2">
                <motion.div style={{ opacity: dashOpacity, y: dashY }}>
                  <UnifiedDashboard />
                  <div className="mt-3 flex items-center justify-center gap-2 text-[12px] font-semibold text-navy-dark/50">
                    <BarChart3 className="h-3.5 w-3.5 text-green" />
                    Une seule plateforme, une vision claire
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
