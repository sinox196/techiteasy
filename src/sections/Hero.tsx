import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { HeroEcosystem } from '../components/hero/HeroEcosystem';
import { MagneticButton } from '../components/ui/MagneticButton';

const headlineWords = ['Votre', 'entreprise.'];
const headlineWords2 = ['Plus', 'simple.'];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white pb-16 pt-36 sm:pt-40 lg:pb-24 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 grid-bg-light opacity-50" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan/10 via-blue/5 to-green/10 blur-3xl" />

      <div className="container-px relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-mist-50 px-4 py-1.5 text-[12.5px] font-semibold text-navy-deep/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-soft" />
          Des solutions pensées pour les entreprises qui veulent avancer
        </motion.div>

        <h1 className="mx-auto max-w-4xl text-balance font-display text-[42px] font-extrabold leading-[1.05] tracking-tight text-navy-dark sm:text-[58px] lg:text-[76px]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {headlineWords.join(' ')}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="gradient-text block"
            >
              {headlineWords2.join(' ')}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Plus digitale.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-[16px] leading-relaxed text-navy-dark/60 sm:text-[18px]"
        >
          TechITEasy transforme vos processus RH, financiers et administratifs en expériences
          digitales simples, automatisées et intelligentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <MagneticButton
            onClick={() => scrollToId('solutions')}
            className="group flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3.5 text-[14.5px] font-bold text-white shadow-glow transition-colors hover:bg-navy-deep"
          >
            Découvrir nos solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToId('contact')}
            className="group flex items-center gap-2 rounded-full border border-navy-deep/15 bg-white px-6 py-3.5 text-[14.5px] font-bold text-navy-dark transition-colors hover:border-navy-deep/30"
          >
            <PlayCircle className="h-4 w-4 text-green" />
            Demander une démo
          </MagneticButton>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          onClick={() => scrollToId('tarifs')}
          className="group mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-navy-deep/60 underline decoration-navy-deep/20 underline-offset-4 transition-colors hover:text-navy-deep hover:decoration-green"
        >
          Essayer gratuitement
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-14 lg:mt-20"
      >
        <HeroEcosystem />
      </motion.div>
    </section>
  );
}
