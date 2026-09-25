import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Loader2,
  Receipt,
  Settings,
  Users,
  Wallet,
  X,
} from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { LogoMark } from './Logo';

type Step = 'form' | 'loading' | 'welcome';

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  planName: string;
}

const SIDEBAR_ICONS = [LayoutDashboard, Users, Wallet, Receipt, FileText, BarChart3, Settings];

export function SignupModal({ open, onClose, planName }: SignupModalProps) {
  const [step, setStep] = useState<Step>('form');
  const [name, setName] = useState('');

  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => {
        setStep('form');
        setName('');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  useEffect(() => {
    if (step === 'loading') {
      const timeout = setTimeout(() => setStep('welcome'), 1900);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setStep('loading');
  }

  const firstName = name.trim().split(/\s+/)[0] || 'vous';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/50 p-4 backdrop-blur-sm"
          onClick={step !== 'loading' ? onClose : undefined}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-card-hover"
          >
            {step !== 'loading' && (
              <button
                onClick={onClose}
                aria-label="Fermer"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-navy-dark/40 transition-colors hover:bg-mist-50 hover:text-navy-dark"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            )}

            <AnimatePresence mode="wait">
              {step === 'form' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-8"
                >
                  <LogoMark className="h-9 w-9" />
                  <h3 className="mt-4 text-[22px] font-extrabold text-navy-dark">Commencez gratuitement</h3>
                  <p className="mt-1.5 text-[13.5px] text-navy-dark/55">
                    Plan sélectionné : <span className="font-bold text-navy-deep">{planName}</span>. 14 jours
                    d'essai, sans carte bancaire.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="signup-name" className="mb-1.5 block text-[12.5px] font-bold text-navy-dark/70">
                        Nom complet
                      </label>
                      <input
                        id="signup-name"
                        type="text"
                        required
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex : Ahmed Ben Salah"
                        className="w-full rounded-xl border border-navy-deep/15 bg-mist-50 px-4 py-3 text-[14.5px] font-semibold text-navy-dark outline-none transition-colors placeholder:font-normal placeholder:text-navy-dark/35 focus:border-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="signup-email" className="mb-1.5 block text-[12.5px] font-bold text-navy-dark/70">
                        Email professionnel <span className="font-normal text-navy-dark/35">(optionnel)</span>
                      </label>
                      <input
                        id="signup-email"
                        type="email"
                        placeholder="vous@entreprise.com"
                        className="w-full rounded-xl border border-navy-deep/15 bg-mist-50 px-4 py-3 text-[14.5px] font-semibold text-navy-dark outline-none transition-colors placeholder:font-normal placeholder:text-navy-dark/35 focus:border-blue"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-navy-dark py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-navy-deep"
                    >
                      Commencer →
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center gap-5 px-8 py-20 text-center"
                >
                  <Loader2 className="h-9 w-9 animate-spin text-blue" strokeWidth={2} />
                  <div>
                    <p className="text-[15px] font-extrabold text-navy-dark">Création de votre espace…</p>
                    <p className="mt-1 text-[13px] text-navy-dark/50">TechITEasy se configure pour {firstName}.</p>
                  </div>
                  <div className="h-1.5 w-48 overflow-hidden rounded-full bg-mist-50">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue to-green"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.8, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              )}

              {step === 'welcome' && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-navy-dark to-blue px-8 pb-6 pt-9 text-center text-white">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-green"
                    >
                      <CheckCircle2 className="h-7 w-7 text-white" strokeWidth={2} />
                    </motion.div>
                    <h3 className="text-[19px] font-extrabold">Bienvenue, {name.trim() || firstName} 👋</h3>
                    <p className="text-[13px] text-white/60">Votre plateforme TechITEasy est prête.</p>
                  </div>

                  <div className="space-y-3 p-6">
                    <div className="flex items-center gap-3 rounded-xl border border-navy-deep/8 bg-white p-3">
                      <div className="flex gap-1.5 rounded-lg bg-mist-50 p-1.5">
                        {SIDEBAR_ICONS.map((Icon, i) => (
                          <span
                            key={i}
                            className={`flex h-7 w-7 items-center justify-center rounded-md ${
                              i === 0 ? 'bg-navy-dark text-white' : 'text-navy-dark/35'
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-navy-deep/8 bg-mist-50 p-4">
                      <p className="text-[11.5px] font-semibold text-navy-dark/50">Tableau de bord</p>
                      <p className="mt-0.5 text-[15px] font-extrabold text-navy-dark">
                        Bonjour {firstName}, votre espace est configuré.
                      </p>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                          { l: 'Utilisateurs', v: '1' },
                          { l: 'Modules actifs', v: '2' },
                          { l: 'Statut', v: 'Actif' },
                        ].map((s) => (
                          <div key={s.l} className="rounded-lg bg-white p-2.5 text-center">
                            <p className="text-[13px] font-extrabold text-navy-deep">{s.v}</p>
                            <p className="text-[9.5px] font-semibold text-navy-dark/40">{s.l}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-full rounded-full bg-navy-dark py-3 text-[13.5px] font-bold text-white transition-colors hover:bg-navy-deep"
                    >
                      Accéder à mon tableau de bord
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
