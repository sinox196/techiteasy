import { motion } from 'framer-motion';
import { ArrowRight, Banknote, CheckCircle2, FileText, Send, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Kicker } from '../ui/Kicker';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { Counter } from '../ui/Counter';
import { BrowserMockup } from './BrowserMockup';

const STEPS = [
  { label: 'Devis', icon: FileText },
  { label: 'Validé', icon: CheckCircle2 },
  { label: 'Facture', icon: FileText },
  { label: 'Envoyée', icon: Send },
  { label: 'Payée ✓', icon: Banknote },
];

function InvoiceLifecycle() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl bg-mist-50 p-4 sm:p-5">
      <p className="mb-4 text-[11px] font-semibold text-navy-dark/50">Cycle de vie de la facture #INV-2026-0847</p>
      <div className="flex items-center">
        {STEPS.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={{
                  scale: active === i ? 1.15 : 1,
                  backgroundColor: i <= active ? '#55C67A' : '#ffffff',
                }}
                transition={{ duration: 0.4 }}
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                  i <= active ? 'border-green' : 'border-navy-deep/15'
                }`}
              >
                <step.icon className={`h-4 w-4 ${i <= active ? 'text-white' : 'text-navy-dark/35'}`} />
              </motion.div>
              <span className={`text-[10.5px] font-bold ${i <= active ? 'text-navy-dark' : 'text-navy-dark/35'}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="mx-1 h-0.5 flex-1 overflow-hidden rounded-full bg-navy-deep/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue to-green"
                  animate={{ width: i < active ? '100%' : '0%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FacturationShowcase() {
  return (
    <div id="facturation" className="grid items-center gap-12 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
      <Reveal>
        <div className="mb-3 flex flex-wrap gap-1.5">
          <span className="flex items-center gap-1.5 rounded-full bg-mist-50 px-3 py-1.5 text-[12px] font-bold text-navy-dark/55">
            <TrendingUp className="h-3.5 w-3.5 text-green" />
            +18.4% de croissance ce mois
          </span>
        </div>
        <BrowserMockup title="app.techiteasy.com/facturation">
          <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              { label: 'CA ce mois', value: '48 750 DT' },
              { label: 'Croissance', value: '+18.4%', accent: true },
              { label: 'Factures réglées', value: '87%' },
              { label: 'En attente', value: '12' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl bg-mist-50 p-3">
                <p className="text-[10.5px] font-semibold text-navy-dark/50">{m.label}</p>
                <p className={`text-[15px] font-extrabold ${m.accent ? 'text-green' : 'text-navy-dark'}`}>{m.value}</p>
              </div>
            ))}
          </div>
          <InvoiceLifecycle />
        </BrowserMockup>
      </Reveal>

      <Reveal delay={0.1}>
        <Kicker>Produit 02 — Facturation digitale</Kicker>
        <h3 className="mt-5 text-balance font-display text-[30px] font-extrabold leading-tight text-navy-dark sm:text-[38px]">
          De la création du devis jusqu'au paiement.
        </h3>
        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-navy-dark/60">
          Automatisez votre facturation et gardez une vision claire de votre activité financière.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: 48750, suffix: ' DT', label: 'CA ce mois' },
            { value: 18.4, suffix: '%', label: 'Croissance', decimals: 1, prefix: '+' },
            { value: 87, suffix: '%', label: 'Factures réglées' },
            { value: 12, suffix: '', label: 'En attente' },
          ].map((m) => (
            <div key={m.label}>
              <p className="font-display text-[20px] font-extrabold text-navy-dark">
                <Counter value={m.value} suffix={m.suffix} prefix={m.prefix ?? ''} decimals={m.decimals ?? 0} />
              </p>
              <p className="mt-0.5 text-[11.5px] font-semibold text-navy-dark/45">{m.label}</p>
            </div>
          ))}
        </div>

        <MagneticButton
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-navy-dark px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-navy-deep"
        >
          Découvrir la facturation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </MagneticButton>
      </Reveal>
    </div>
  );
}
