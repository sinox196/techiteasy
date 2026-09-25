interface LogoMarkProps {
  className?: string;
}

/**
 * Geometric "flow" mark inspired by the TechITEasy identity: two interlocking
 * step-paths (navy/blue + green) that read as forward motion / connected flow.
 */
export function LogoMark({ className = 'h-9 w-9' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 30 L17 30 L17 18 L29 18"
        stroke="url(#techiteasy-mark-a)"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <path
        d="M12 38 L24 38 L24 26 L36 26 L43 18"
        stroke="url(#techiteasy-mark-b)"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <path d="M35 17 L44 17 L44 26 Z" fill="#55C67A" />
      <defs>
        <linearGradient id="techiteasy-mark-a" x1="5" y1="30" x2="29" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#002F4A" />
          <stop offset="1" stopColor="#0079A8" />
        </linearGradient>
        <linearGradient id="techiteasy-mark-b" x1="12" y1="38" x2="43" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0079A8" />
          <stop offset="0.6" stopColor="#1593B6" />
          <stop offset="1" stopColor="#55C67A" />
        </linearGradient>
      </defs>
    </svg>
  );
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
