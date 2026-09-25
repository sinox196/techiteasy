import type { ReactNode } from 'react';

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] ${
        light
          ? 'border-white/15 bg-white/5 text-white/80'
          : 'border-navy-deep/10 bg-mist-50 text-navy-deep/70'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan to-green" />
      {children}
    </span>
  );
}
