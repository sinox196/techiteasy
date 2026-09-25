import { motion } from 'framer-motion';
import { CheckCircle2, type LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  label: string;
}

interface Branch {
  condition: string;
  yes: string;
  no: string;
}

interface WorkflowCardProps {
  title: string;
  steps: Step[];
  branch?: Branch;
  accent?: 'blue' | 'green';
}

export function WorkflowCard({ title, steps, branch, accent = 'blue' }: WorkflowCardProps) {
  const total = steps.length;

  return (
    <div className="rounded-2xl border border-navy-deep/8 bg-white p-6 shadow-card sm:p-7">
      <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-navy-dark/40">{title}</p>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-navy-deep/8" />
        <motion.div
          className={`absolute left-[19px] top-2 w-0.5 origin-top ${accent === 'green' ? 'bg-green' : 'bg-blue'}`}
          animate={{ height: ['0%', '100%', '100%'] }}
          transition={{ duration: total * 0.7, times: [0, 0.9, 1], repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
          style={{ bottom: '0.5rem' }}
        />

        <div className="space-y-5">
          {steps.map((step, i) => (
            <div key={step.label} className="relative flex items-center gap-4">
              <motion.div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-navy-deep/10 bg-white"
                animate={{
                  borderColor: ['#00305c1a', accent === 'green' ? '#55C67A' : '#0079A8', '#00305c1a'],
                }}
                transition={{
                  duration: total * 0.7,
                  times: [Math.max(0, i / total - 0.05), i / total + 0.05, 1],
                  repeat: Infinity,
                  repeatDelay: 0.6,
                }}
              >
                <step.icon className="h-4.5 w-4.5 text-navy-dark/60" strokeWidth={2} />
              </motion.div>
              <span className="text-[13.5px] font-bold text-navy-dark/80">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {branch && (
        <div className="mt-5 rounded-xl bg-mist-50 p-4">
          <p className="mb-3 text-center text-[12.5px] font-bold text-navy-dark/60">{branch.condition}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-green/20 bg-white p-3 text-center">
              <p className="text-[10.5px] font-bold uppercase tracking-wide text-green">Oui</p>
              <div className="mt-1.5 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green" />
                <p className="text-[12px] font-bold text-navy-dark">{branch.yes}</p>
              </div>
            </div>
            <div className="rounded-lg border border-navy-deep/10 bg-white p-3 text-center">
              <p className="text-[10.5px] font-bold uppercase tracking-wide text-navy-dark/40">Non</p>
              <p className="mt-1.5 text-[12px] font-bold text-navy-dark">{branch.no}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
