import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BarChart3,
  Building2,
  FileText,
  type LucideIcon,
  Receipt,
  UserRound,
  UsersRound,
  Wallet,
  Zap,
} from 'lucide-react';
import { LogoMark } from '../Logo';

interface Module {
  icon: LucideIcon;
  label: string;
  top: string;
  left: string;
  depth: number;
  delay: number;
}

const MODULES: Module[] = [
  { icon: UsersRound, label: 'RH', top: '10%', left: '18%', depth: 22, delay: 0 },
  { icon: Wallet, label: 'Paie', top: '6%', left: '52%', depth: 16, delay: 0.4 },
  { icon: Receipt, label: 'Facturation', top: '16%', left: '82%', depth: 26, delay: 0.8 },
  { icon: BarChart3, label: 'Analytics', top: '48%', left: '92%', depth: 18, delay: 1.2 },
  { icon: Zap, label: 'Automatisation', top: '82%', left: '80%', depth: 24, delay: 0.2 },
  { icon: FileText, label: 'Documents', top: '88%', left: '46%', depth: 20, delay: 0.6 },
  { icon: UserRound, label: 'Collaborateurs', top: '80%', left: '14%', depth: 16, delay: 1.0 },
  { icon: Building2, label: 'Clients', top: '46%', left: '5%', depth: 22, delay: 1.4 },
];

const CARDS = [
  { text: 'Paie validée', sub: 'Septembre 2026', accent: 'green', top: '4%', left: '68%', hideOnMobile: false },
  { text: 'Facture payée', sub: '+2 450 DT', accent: 'cyan', top: '30%', left: '-6%', hideOnMobile: true },
  { text: 'Congé approuvé', sub: 'M. Ben Salah', accent: 'green', top: '68%', left: '-4%', hideOnMobile: true },
  { text: 'CA en hausse', sub: '+18.4%', accent: 'blue', top: '86%', left: '62%', hideOnMobile: false },
];

const NODES = MODULES.map((m) => ({
  x: parseFloat(m.left),
  y: parseFloat(m.top),
}));

export function HeroEcosystem() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.4 });
  const rotateX = useTransform(sy, [-1, 1], [5, -5]);
  const rotateY = useTransform(sx, [-1, 1], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto h-[420px] w-full max-w-[880px] select-none sm:h-[520px] lg:h-[620px]"
      style={{ perspective: 1200 }}
    >
      {/* background grid + radial glows */}
      <div className="absolute inset-0 rounded-[40px] grid-bg-light opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[100px]" />
      <div className="absolute left-[15%] top-[70%] h-[220px] w-[220px] rounded-full bg-green/20 blur-[90px]" />
      <div className="absolute right-[10%] top-[15%] h-[220px] w-[220px] rounded-full bg-blue/15 blur-[90px]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        {/* connecting lines */}
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-line" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0079A8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#55C67A" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          {NODES.map((n, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="url(#hero-line)"
              strokeWidth="0.35"
              strokeDasharray="2 2.4"
              className="animate-dash"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* central core */}
        <div className="absolute left-1/2 top-1/2 z-10" style={{ transform: 'translate(-50%, -50%) translateZ(40px)' }}>
          <motion.div
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/60 bg-white/90 shadow-glow backdrop-blur-xl sm:h-28 sm:w-28"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy-deep/10 via-transparent to-green/20" />
            <LogoMark className="h-11 w-11 sm:h-12 sm:w-12" />
            <motion.span
              className="absolute inset-0 rounded-3xl ring-2 ring-green/40"
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        {/* module chips */}
        {MODULES.map((mod, i) => (
          <div
            key={mod.label}
            className="absolute z-[5]"
            style={{ top: mod.top, left: mod.left, transform: `translate(-50%, -50%) translateZ(${mod.depth}px)` }}
          >
            <motion.div
              className="flex items-center gap-1.5 rounded-full border border-navy-deep/8 bg-white/85 px-3 py-2 text-[11px] font-bold text-navy-dark shadow-card backdrop-blur-md sm:text-[12px]"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: mod.delay },
                scale: { duration: 0.6, delay: mod.delay },
                y: { duration: 4.5 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: mod.delay },
              }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue to-green text-white">
                <mod.icon className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className="hidden xs:inline sm:inline">{mod.label}</span>
            </motion.div>
          </div>
        ))}

        {/* floating dashboard fragments */}
        {CARDS.map((card, i) => (
          <motion.div
            key={card.text}
            className={`absolute z-[6] w-[168px] rounded-2xl border border-navy-deep/8 bg-white/90 px-3.5 py-3 shadow-card-hover backdrop-blur-xl ${
              card.hideOnMobile ? 'hidden sm:block' : 'hidden xs:block'
            }`}
            style={{ top: card.top, left: card.left, translateZ: 55 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.4 + i * 0.15 },
              y: { duration: 5.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 },
            }}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  card.accent === 'green' ? 'bg-green' : card.accent === 'cyan' ? 'bg-cyan' : 'bg-blue'
                }`}
              />
              <span className="text-[11px] font-bold text-navy-dark">{card.text}</span>
            </div>
            <p className="mt-1 text-[13px] font-extrabold text-navy-deep">{card.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
