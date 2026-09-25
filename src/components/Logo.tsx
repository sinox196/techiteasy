import logoMarkSrc from '../assets/logo-mark.png';

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = 'h-9 w-9' }: LogoMarkProps) {
  return <img src={logoMarkSrc} alt="" aria-hidden="true" className={`${className} object-contain`} />;
}

interface LogoProps {
  variant?: 'dark' | 'light';
  withTagline?: boolean;
  className?: string;
  markClassName?: string;
}

export function Logo({ variant = 'dark', withTagline = false, className = '', markClassName }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-navy-dark' : 'text-white';
  const taglineColor = variant === 'dark' ? 'text-navy/60' : 'text-white/60';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName ?? 'h-8 w-8 shrink-0'} />
      <div className="flex flex-col leading-none">
        <span className={`font-display text-[19px] font-extrabold tracking-tight ${textColor}`}>
          TechIT<span className="gradient-text">Easy</span>
        </span>
        {withTagline && (
          <span className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] ${taglineColor}`}>
            Simplifying Digitalization
          </span>
        )}
      </div>
    </div>
  );
}
