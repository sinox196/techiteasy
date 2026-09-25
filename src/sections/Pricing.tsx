import { AnimatePresence, motion } from 'framer-motion';
import { Banknote, Check, Minus, Plus, Receipt, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';
import { Kicker } from '../components/ui/Kicker';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Reveal } from '../components/ui/Reveal';
import { SignupModal } from '../components/SignupModal';

interface Plan {
  id: string;
  icon: typeof Users;
  name: string;
  tagline: string;
  pricePerUser: number;
  popular?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: 'rh-paie',
    icon: Users,
    name: 'RH & Paie',
    tagline: 'Pour centraliser vos équipes et votre paie.',
    pricePerUser: 15,
    features: [
      'Gestion des collaborateurs',
      'Congés et absences',
      'Préparation de la paie',
      'Bulletins de paie',
      'Tableaux de bord RH',
    ],
  },
  {
    id: 'facturation',
    icon: Receipt,
    name: 'Facturation digitale',
    tagline: 'Pour vos devis, factures et paiements.',
    pricePerUser: 12,
    features: [
      'Devis et factures illimités',
      'Suivi des paiements',
      'Relances automatiques',
      'Tableaux de bord financiers',
      'Exports comptables',
    ],
  },
  {
    id: 'suite',
    icon: Sparkles,
    name: 'Suite complète',
    tagline: 'RH, paie et facturation, réunis.',
    pricePerUser: 22,
    popular: true,
    features: [
      'Toutes les fonctionnalités RH & Paie',
      'Toutes les fonctionnalités Facturation',
      'Automatisations avancées',
      'Support prioritaire',
      'Accès API',
    ],
  },
];

export function Pricing() {
  const [userCount, setUserCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Suite complète');

  function openSignup(planName: string) {
    setSelectedPlan(planName);
    setModalOpen(true);
  }

  function decrement() {
    setUserCount((n) => Math.max(1, n - 1));
  }

  function increment() {
    setUserCount((n) => Math.min(50, n + 1));
  }

  return (
    <section id="tarifs" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Tarifs</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              Un tarif simple.
              <br />
              Qui grandit avec vous.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-navy-dark/60">
              Choisissez votre nombre d'utilisateurs. Le prix s'ajuste automatiquement.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="mb-12 flex justify-center">
          <div className="flex items-center gap-5 rounded-2xl border border-navy-deep/10 bg-mist-50 px-6 py-4">
            <span className="flex items-center gap-2 text-[13.5px] font-bold text-navy-dark/70">
              <Users className="h-4 w-4 text-blue" />
              Nombre d'utilisateurs
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={decrement}
                aria-label="Retirer un utilisateur"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-deep/15 bg-white text-navy-dark transition-colors hover:border-navy-deep/30 disabled:opacity-30"
                disabled={userCount <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-display text-[22px] font-extrabold tabular-nums text-navy-dark">
                {userCount}
              </span>
              <button
                onClick={increment}
                aria-label="Ajouter un utilisateur"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-dark text-white transition-colors hover:bg-navy-deep"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={0.06 * i}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-shadow duration-300 ${
                  plan.popular
                    ? 'border-navy-dark bg-navy-dark text-white shadow-glow'
                    : 'border-navy-deep/10 bg-white text-navy-dark hover:shadow-card-hover'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue to-green px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Le plus populaire
                  </span>
                )}

                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    plan.popular ? 'bg-white/10 text-green-soft' : 'bg-mist-50 text-blue'
                  }`}
                >
                  <plan.icon className="h-5 w-5" strokeWidth={2} />
                </span>

                <h3 className="mt-4 text-[19px] font-extrabold">{plan.name}</h3>
                <p className={`mt-1 text-[13.5px] ${plan.popular ? 'text-white/55' : 'text-navy-dark/55'}`}>
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={plan.pricePerUser * userCount}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="font-display text-[36px] font-extrabold tabular-nums"
                    >
                      {plan.pricePerUser * userCount}
                    </motion.span>
                  </AnimatePresence>
                  <span className={`text-[13.5px] font-semibold ${plan.popular ? 'text-white/50' : 'text-navy-dark/45'}`}>
                    DT / mois
                  </span>
                </div>
                <p className={`mt-0.5 text-[11.5px] ${plan.popular ? 'text-white/40' : 'text-navy-dark/40'}`}>
                  soit {plan.pricePerUser} DT / utilisateur
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? 'text-green-soft' : 'text-green'}`} />
                      <span className={plan.popular ? 'text-white/80' : 'text-navy-dark/75'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  onClick={() => openSignup(plan.name)}
                  className={`mt-7 w-full rounded-full px-5 py-3 text-center text-[14px] font-bold transition-colors ${
                    plan.popular
                      ? 'bg-white text-navy-dark hover:bg-mist-50'
                      : 'bg-navy-dark text-white hover:bg-navy-deep'
                  }`}
                >
                  Essayer gratuitement
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-navy-dark via-navy-deep to-blue px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="flex items-center justify-center gap-2 text-[17px] font-extrabold text-white sm:justify-start">
                <Banknote className="h-5 w-5 text-green-soft" />
                14 jours d'essai. Sans carte bancaire.
              </p>
              <p className="mt-1.5 text-[13.5px] text-white/55">
                Configurez votre espace TechITEasy en quelques minutes.
              </p>
            </div>
            <MagneticButton
              onClick={() => openSignup('Suite complète')}
              className="shrink-0 rounded-full bg-gradient-to-r from-blue via-cyan to-green px-7 py-3.5 text-[14.5px] font-bold text-white"
            >
              Commencez gratuitement
            </MagneticButton>
          </div>
        </Reveal>
      </div>

      <SignupModal open={modalOpen} onClose={() => setModalOpen(false)} planName={selectedPlan} />
    </section>
  );
}
