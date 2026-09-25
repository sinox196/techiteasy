import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { BarChart3, Banknote, Receipt, UserPlus, Users, Wallet, type LucideIcon } from 'lucide-react';
import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';

interface FlowNode {
  icon: LucideIcon;
  label: string;
  card: string;
}

const NODES: FlowNode[] = [
  { icon: UserPlus, label: 'Employés', card: 'Nouveau collaborateur ajouté' },
  { icon: Users, label: 'RH', card: 'Dossier RH créé automatiquement' },
  { icon: Wallet, label: 'Paie', card: 'Variables de paie synchronisées' },
  { icon: BarChart3, label: 'Finance', card: 'Masse salariale mise à jour' },
  { icon: Receipt, label: 'Facturation', card: 'Facture générée et envoyée' },
  { icon: Banknote, label: 'Analytics', card: 'Tableaux de bord actualisés' },
];

function FlowNodeItem({ node, index, progress }: { node: FlowNode; index: number; progress: MotionValue<number> }) {
  const total = NODES.length;
  const start = index / total;
  const end = (index + 0.6) / total;
  const activeValue = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const scale = useTransform(activeValue, [0, 1], [0.85, 1]);
  const cardOpacity = useTransform(activeValue, [0.6, 1], [0, 1]);
  const cardY = useTransform(activeValue, [0.6, 1], [10, 0]);
  const ringOpacity = activeValue;
  const bg = useTransform(activeValue, [0, 1], ['rgba(255,255,255,0.08)', 'rgba(85,198,122,1)']);
  const iconColor = useTransform(activeValue, [0, 0.5, 1], ['#ffffff66', '#ffffff66', '#ffffff']);

  return (
    <div className="relative flex flex-1 flex-col items-center">
      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className="absolute -top-20 w-[168px] rounded-xl border border-navy-deep/8 bg-white px-3 py-2.5 text-center shadow-card-hover"
      >
        <p className="text-[11.5px] font-bold text-navy-dark">{node.card}</p>
      </motion.div>

      <motion.div style={{ scale, background: bg }} className="relative flex h-16 w-16 items-center justify-center rounded-2xl sm:h-[72px] sm:w-[72px]">
        <motion.span style={{ opacity: ringOpacity }} className="absolute inset-0 rounded-2xl ring-4 ring-green/25" />
        <motion.div style={{ color: iconColor }}>
          <node.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
        </motion.div>
      </motion.div>
      <p className="mt-3 text-[12.5px] font-bold text-navy-dark/70 sm:text-[13.5px]">{node.label}</p>
    </div>
  );
}

export function DigitalFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="flow" className="relative overflow-hidden bg-navy-dark py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker light>Flux digital</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight sm:text-[44px]">
              Votre entreprise.
              <br />
              Connectée de bout en bout.
            </h2>
          </Reveal>
        </div>
      </div>

      <div ref={ref} className="relative" style={{ height: '260vh' }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container-px relative mx-auto w-full max-w-6xl">
            <div className="absolute left-0 right-0 top-[144px] h-0.5 -translate-y-1/2 bg-white/10 sm:top-[148px]">
              <motion.div style={{ width: lineWidth }} className="h-full bg-gradient-to-r from-blue via-cyan to-green" />
            </div>
            <div className="flex items-start justify-between gap-2 pt-28">
              {NODES.map((node, i) => (
                <FlowNodeItem key={node.label} node={node} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
