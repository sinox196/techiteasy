import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Users,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';
import { Kicker } from '../ui/Kicker';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { Counter } from '../ui/Counter';
import { BrowserMockup } from './BrowserMockup';

const TABS = [
  { id: 'overview', label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: 'team', label: 'Collaborateurs', icon: Users },
  { id: 'leaves', label: 'Congés', icon: Calendar },
  { id: 'payroll', label: 'Paie', icon: Wallet },
  { id: 'docs', label: 'Documents', icon: FileText },
  { id: 'analytics', label: 'Analytics', icon: ClipboardList },
] as const;

type TabId = (typeof TABS)[number]['id'];

const AVATARS = ['#0079A8', '#1593B6', '#55C67A', '#6DD58B', '#003B5C'];

function TabContent({ tab }: { tab: TabId }) {
  if (tab === 'team') {
    return (
      <div className="space-y-2.5">
        {[
          { name: 'Nour Ben Salah', role: 'Product Manager', status: 'Actif' },
          { name: 'Amine Khelifi', role: 'Développeuse Senior', status: 'Actif' },
          { name: 'Sarra Trabelsi', role: 'Comptable', status: 'En congé' },
        ].map((p, i) => (
          <div key={p.name} className="flex items-center justify-between rounded-xl bg-mist-50 px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ background: AVATARS[i % AVATARS.length] }}
              >
                {p.name.split(' ').map((n) => n[0]).join('')}
              </span>
              <div>
                <p className="text-[12.5px] font-bold text-navy-dark">{p.name}</p>
                <p className="text-[11px] text-navy-dark/45">{p.role}</p>
              </div>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[10.5px] font-bold ${
                p.status === 'Actif' ? 'bg-green/15 text-green' : 'bg-cyan/15 text-cyan'
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'leaves') {
    return (
      <div className="space-y-2.5">
        {[
          { name: 'Congé annuel — S. Trabelsi', date: '2 – 6 oct.', state: 'En attente' },
          { name: 'Congé maladie — K. Jendoubi', date: '28 sept.', state: 'Approuvé' },
          { name: 'RTT — A. Khelifi', date: '30 sept.', state: 'Approuvé' },
        ].map((l) => (
          <div key={l.name} className="flex items-center justify-between rounded-xl bg-mist-50 px-3.5 py-3">
            <div>
              <p className="text-[12.5px] font-bold text-navy-dark">{l.name}</p>
              <p className="text-[11px] text-navy-dark/45">{l.date}</p>
            </div>
            {l.state === 'Approuvé' ? (
              <CheckCircle2 className="h-4.5 w-4.5 text-green" />
            ) : (
              <span className="rounded-full bg-cyan/15 px-2.5 py-1 text-[10.5px] font-bold text-cyan">En attente</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'payroll') {
    return (
      <div>
        <div className="mb-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-navy-dark to-blue px-4 py-3.5 text-white">
          <div>
            <p className="text-[11px] font-semibold text-white/70">Paie — Septembre 2026</p>
            <p className="text-[15px] font-extrabold">Prête à valider</p>
          </div>
          <CheckCircle2 className="h-6 w-6 text-green-soft" />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-mist-50 p-3">
            <p className="text-[11px] font-semibold text-navy-dark/50">Masse salariale</p>
            <p className="text-[15px] font-extrabold text-navy-dark">186 400 DT</p>
          </div>
          <div className="rounded-xl bg-mist-50 p-3">
            <p className="text-[11px] font-semibold text-navy-dark/50">Bulletins générés</p>
            <p className="text-[15px] font-extrabold text-navy-dark">126 / 126</p>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'docs') {
    return (
      <div className="space-y-2">
        {['Contrat de travail — CDI', 'Attestation de salaire', 'Bulletin de paie — Août', 'Avenant contractuel'].map((d) => (
          <div key={d} className="flex items-center gap-2.5 rounded-xl bg-mist-50 px-3.5 py-2.5">
            <FileText className="h-4 w-4 text-blue" />
            <p className="text-[12.5px] font-semibold text-navy-dark">{d}</p>
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'analytics') {
    return (
      <div className="rounded-xl bg-mist-50 p-4">
        <p className="mb-3 text-[11px] font-semibold text-navy-dark/50">Répartition par département</p>
        <div className="flex items-end gap-2 h-28">
          {[
            { l: 'Tech', h: 90 },
            { l: 'Ventes', h: 65 },
            { l: 'RH', h: 35 },
            { l: 'Finance', h: 50 },
            { l: 'Support', h: 75 },
          ].map((d) => (
            <div key={d.l} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-24 w-full items-end">
                <div className="w-full rounded-t-md bg-gradient-to-t from-blue to-green" style={{ height: `${d.h}%` }} />
              </div>
              <span className="text-[10px] font-semibold text-navy-dark/45">{d.l}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="col-span-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-navy-dark to-blue px-4 py-3.5 text-white">
        <div>
          <p className="text-[11px] font-semibold text-white/70">Paie Septembre</p>
          <p className="text-[15px] font-extrabold">Prête ✓</p>
        </div>
        <Wallet className="h-6 w-6 text-green-soft" />
      </div>
      <div className="rounded-xl bg-mist-50 p-3">
        <p className="text-[11px] font-semibold text-navy-dark/50">Collaborateurs</p>
        <p className="text-[19px] font-extrabold text-navy-dark">126</p>
      </div>
      <div className="rounded-xl bg-mist-50 p-3">
        <p className="text-[11px] font-semibold text-navy-dark/50">Présence</p>
        <p className="text-[19px] font-extrabold text-navy-dark">98,7%</p>
      </div>
      <div className="col-span-2 rounded-xl bg-mist-50 p-3">
        <p className="text-[11px] font-semibold text-navy-dark/50">Congés en attente</p>
        <p className="text-[15px] font-extrabold text-navy-dark">8 demandes</p>
      </div>
    </div>
  );
}

export function RHPaieShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div id="rh-paie" className="grid items-center gap-12 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
      <Reveal className="order-2 lg:order-1">
        <Kicker>Produit 01 — RH & Paie</Kicker>
        <h3 className="mt-5 text-balance font-display text-[30px] font-extrabold leading-tight text-navy-dark sm:text-[38px]">
          Vos équipes méritent mieux que des fichiers Excel.
        </h3>
        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-navy-dark/60">
          Centralisez vos RH, automatisez vos processus et simplifiez votre paie depuis une seule
          plateforme.
        </p>

        <div className="mt-7 grid grid-cols-4 gap-3">
          {[
            { value: 126, suffix: '', label: 'Collaborateurs' },
            { value: 98.7, suffix: '%', label: 'Présence', decimals: 1 },
            { value: 8, suffix: '', label: 'Congés' },
          ].map((m) => (
            <div key={m.label} className="col-span-1">
              <p className="font-display text-[22px] font-extrabold text-navy-dark">
                <Counter value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </p>
              <p className="mt-0.5 text-[11.5px] font-semibold text-navy-dark/45">{m.label}</p>
            </div>
          ))}
          <div className="col-span-1">
            <p className="font-display text-[22px] font-extrabold text-green">Prête</p>
            <p className="mt-0.5 text-[11.5px] font-semibold text-navy-dark/45">Paie du mois</p>
          </div>
        </div>

        <MagneticButton
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-navy-dark px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-navy-deep"
        >
          Découvrir RH & Paie
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </MagneticButton>
      </Reveal>

      <Reveal delay={0.1} className="order-1 lg:order-2">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold transition-colors ${
                activeTab === tab.id ? 'bg-navy-dark text-white' : 'bg-mist-50 text-navy-dark/55 hover:text-navy-dark'
              }`}
            >
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
        <BrowserMockup title="app.techiteasy.com/rh">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="min-h-[260px]"
            >
              <TabContent tab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </BrowserMockup>
      </Reveal>
    </div>
  );
}
