import { motion } from 'framer-motion';
import { FileStack, Radio, Shield, Sparkles, Workflow, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';

function CardShell({
  className = '',
  dark = false,
  icon: Icon,
  title,
  desc,
  children,
}: {
  className?: string;
  dark?: boolean;
  icon: LucideIcon;
  title: string;
  desc: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-card-hover ${
        dark ? 'border-navy-deep/40 bg-navy-dark text-white' : 'border-navy-deep/8 bg-white text-navy-dark'
      } ${className}`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          dark ? 'bg-white/10 text-green-soft' : 'bg-mist-50 text-blue'
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className={`mt-4 text-[16.5px] font-extrabold ${dark ? 'text-white' : 'text-navy-dark'}`}>{title}</h3>
      <p className={`mt-1.5 text-[13.5px] leading-relaxed ${dark ? 'text-white/55' : 'text-navy-dark/55'}`}>{desc}</p>
      <div className="mt-auto pt-5">{children}</div>
    </div>
  );
}

function AutomationMini() {
  const nodes = [0, 1, 2, 3];
  return (
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/15" />
      {nodes.map((n) => (
        <motion.span
          key={n}
          className="relative z-10 h-3 w-3 rounded-full bg-green-soft"
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.15, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: n * 0.3 }}
        />
      ))}
    </div>
  );
}

function DocStack() {
  return (
    <div className="relative h-16">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-0 h-11 w-full rounded-lg border border-navy-deep/8 bg-mist-50"
          style={{ top: i * 6, zIndex: 3 - i }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function RealtimePulse() {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
      </span>
      <p className="text-[13px] font-bold text-navy-dark/70">
        <Counter value={2847} className="tabular-nums" /> événements aujourd'hui
      </p>
    </div>
  );
}

function SecurityPulse() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full bg-green/20"
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <Shield className="relative h-5 w-5 text-green" />
      </div>
      <p className="text-[13px] font-bold text-navy-dark/70">Chiffrement de bout en bout</p>
    </div>
  );
}

function AnalyticsChart() {
  const bars = [30, 55, 40, 70, 50, 85, 62];
  return (
    <div className="flex h-16 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-blue to-green"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

function UxMicro() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
        >
          <Sparkles className="h-4 w-4 text-green-soft" fill="currentColor" strokeWidth={0} />
        </motion.div>
      ))}
    </div>
  );
}

export function BentoFeatures() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Bénéfices</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              Moins d'administratif.
              <br />
              Plus de contrôle.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[190px]">
          <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <CardShell dark icon={Workflow} title="Automatisation" desc="Éliminez les tâches répétitives." className="h-full">
              <AutomationMini />
            </CardShell>
          </Reveal>

          <Reveal delay={0.06} className="sm:col-span-2 lg:col-span-2">
            <CardShell icon={FileStack} title="Centralisation" desc="Vos informations réunies au même endroit." className="h-full">
              <DocStack />
            </CardShell>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-1">
            <CardShell icon={Radio} title="Temps réel" desc="Suivez votre activité instantanément." className="h-full">
              <RealtimePulse />
            </CardShell>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-1">
            <CardShell icon={Shield} title="Sécurité" desc="Vos données restent protégées." className="h-full">
              <SecurityPulse />
            </CardShell>
          </Reveal>

          <Reveal delay={0.18} className="sm:col-span-2 lg:col-span-2">
            <CardShell icon={Sparkles} title="Analytics" desc="Transformez vos données en décisions." className="h-full">
              <AnalyticsChart />
            </CardShell>
          </Reveal>

          <Reveal delay={0.22} className="sm:col-span-2 lg:col-span-2">
            <CardShell icon={Sparkles} title="Expérience utilisateur" desc="Des outils que vos équipes aiment utiliser." className="h-full">
              <UxMicro />
            </CardShell>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
