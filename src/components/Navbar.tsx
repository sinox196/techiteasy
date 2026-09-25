import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronDown, Menu, Receipt, Users, Workflow, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import { MagneticButton } from './ui/MagneticButton';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'solutions', label: 'Solutions', mega: true },
  { id: 'rh-paie', label: 'RH & Paie' },
  { id: 'facturation', label: 'Facturation' },
  { id: 'pourquoi', label: 'Pourquoi TechITEasy' },
  { id: 'apropos', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
];

const MEGA_ITEMS = [
  {
    icon: Users,
    title: 'RH & Paie',
    desc: 'Collaborateurs, congés et paie centralisés.',
    href: '#rh-paie',
  },
  {
    icon: Receipt,
    title: 'Facturation digitale',
    desc: 'Devis, factures et paiements automatisés.',
    href: '#facturation',
  },
  {
    icon: Workflow,
    title: 'Transformation digitale',
    desc: 'Vos processus, repensés pour le digital.',
    href: '#flow',
  },
  {
    icon: Zap,
    title: 'Automatisation des processus',
    desc: 'Moins de tâches manuelles, plus de contrôle.',
    href: '#automatisation',
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <div
          className={`flex w-full max-w-[1180px] items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'border border-navy-deep/8 bg-white/80 shadow-nav backdrop-blur-xl'
              : 'border border-transparent bg-white/0'
          }`}
        >
          <button onClick={() => scrollToId('accueil')} className="shrink-0">
            <Logo variant="dark" />
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    onClick={() => scrollToId(link.id)}
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                      activeId === link.id ? 'text-navy-deep' : 'text-navy-deep/60 hover:text-navy-deep'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {activeId === link.id && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-green" />
                  )}

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                      >
                        <div className="grid grid-cols-2 gap-1.5 rounded-2xl border border-navy-deep/8 bg-white/95 p-3 shadow-card-hover backdrop-blur-xl">
                          {MEGA_ITEMS.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setMegaOpen(false);
                                scrollToId(item.href.slice(1));
                              }}
                              className="group flex items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-mist-50"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy-deep via-blue to-green text-white transition-transform group-hover:scale-105">
                                <item.icon className="h-4.5 w-4.5" strokeWidth={2} />
                              </span>
                              <span>
                                <span className="block text-[13.5px] font-bold text-navy-dark">{item.title}</span>
                                <span className="mt-0.5 block text-[12px] leading-snug text-navy-dark/55">{item.desc}</span>
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                    activeId === link.id ? 'text-navy-deep' : 'text-navy-deep/60 hover:text-navy-deep'
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-green" />
                  )}
                </button>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button className="rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-navy-deep/70 transition-colors hover:text-navy-deep">
              Se connecter
            </button>
            <MagneticButton
              onClick={() => scrollToId('contact')}
              className="rounded-full bg-navy-dark px-5 py-2.5 text-[13.5px] font-bold text-white shadow-glow transition-colors hover:bg-navy-deep"
            >
              Demander une démo
            </MagneticButton>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-navy-deep lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-dark/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <Logo variant="dark" />
                <button onClick={() => setMobileOpen(false)} aria-label="Fermer le menu" className="rounded-lg p-2 text-navy-dark">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-1 flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToId(link.id);
                      setMobileOpen(false);
                    }}
                    className="rounded-xl px-3 py-3.5 text-left text-[17px] font-bold text-navy-dark hover:bg-mist-50"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-navy-deep/10 pt-5">
                <button className="rounded-full border border-navy-deep/15 px-5 py-3 text-center text-sm font-bold text-navy-dark">
                  Se connecter
                </button>
                <button
                  onClick={() => {
                    scrollToId('contact');
                    setMobileOpen(false);
                  }}
                  className="rounded-full bg-gradient-to-r from-navy-dark via-blue to-green px-5 py-3 text-center text-sm font-bold text-white"
                >
                  Demander une démo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
