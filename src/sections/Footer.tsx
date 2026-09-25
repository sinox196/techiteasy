import { Mail, MapPin, Phone, X } from 'lucide-react';
import { Logo } from '../components/Logo';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../components/SocialIcons';

const COLUMNS = [
  {
    title: 'Solutions',
    links: ['RH & Paie', 'Facturation digitale', 'Digitalisation', 'Automatisation'],
  },
  {
    title: 'Entreprise',
    links: ['À propos', 'Contact', 'Carrières'],
  },
  {
    title: 'Ressources',
    links: ["Centre d'aide", 'Documentation', 'Blog'],
  },
  {
    title: 'Légal',
    links: ['Confidentialité', 'Conditions générales'],
  },
];

const SOCIALS = [
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: X, label: 'X' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: InstagramIcon, label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-transparent bg-navy-dark pt-16 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 pb-14 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo variant="light" withTagline />
            <p className="mt-5 max-w-[240px] text-[13.5px] leading-relaxed text-white/45">
              Nous transformons les processus complexes en expériences digitales simples.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-green/40 hover:text-green-soft"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-white/40">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13.5px] font-medium text-white/65 transition-colors hover:text-green-soft">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/8 py-7 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TechITEasy. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> contact@techiteasy.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> +216 70 123 456
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Tunis, Tunisie
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
