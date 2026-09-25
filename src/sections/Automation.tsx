import {
  Banknote,
  Bell,
  CheckCircle2,
  Clock,
  FileText,
  FolderPlus,
  Mail,
  RefreshCw,
  Send,
  UserPlus,
} from 'lucide-react';
import { Kicker } from '../components/ui/Kicker';
import { Reveal } from '../components/ui/Reveal';
import { WorkflowCard } from '../components/automation/WorkflowCard';

export function Automation() {
  return (
    <section id="automatisation" className="relative bg-mist-50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Kicker>Automatisation</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[32px] font-extrabold leading-tight text-navy-dark sm:text-[44px]">
              Automatisez ce qui vous ralentit.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-navy-dark/60">
              Vos processus avancent. Même lorsque vous ne cliquez sur rien.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <WorkflowCard
              title="Onboarding collaborateur"
              accent="blue"
              steps={[
                { icon: UserPlus, label: 'Nouveau collaborateur' },
                { icon: FolderPlus, label: 'Créer dossier RH' },
                { icon: FileText, label: 'Ajouter contrat' },
                { icon: Bell, label: 'Notifier manager' },
                { icon: Banknote, label: 'Préparer paie' },
                { icon: CheckCircle2, label: 'Terminé ✓' },
              ]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <WorkflowCard
              title="Suivi de facture"
              accent="green"
              steps={[
                { icon: FileText, label: 'Facture créée' },
                { icon: Send, label: 'Envoyer au client' },
                { icon: Clock, label: 'Attendre échéance' },
              ]}
              branch={{ condition: 'Paiement reçu ?', yes: 'Archiver', no: 'Relance auto' }}
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-navy-deep/8 bg-white px-6 py-4 text-center">
            <Mail className="h-4 w-4 text-cyan" />
            <p className="text-[13.5px] font-semibold text-navy-dark/60">
              Notifications et relances automatiques
              <RefreshCw className="mx-1.5 mb-0.5 inline-block h-3.5 w-3.5 text-green" />
              envoyées sans intervention manuelle.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
