import type { ReactNode } from 'react';
import { LogoMark } from '../Logo';

export function BrowserMockup({ children, title = 'app.techiteasy.com' }: { children: ReactNode; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-deep/10 bg-white shadow-card-hover">
      <div className="flex items-center gap-3 border-b border-navy-deep/8 bg-mist-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-navy-deep/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy-deep/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy-deep/15" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-navy-dark/45">
          <LogoMark className="h-3 w-3" />
          {title}
        </div>
      </div>
      <div className="bg-white p-4 sm:p-5">{children}</div>
    </div>
  );
}
