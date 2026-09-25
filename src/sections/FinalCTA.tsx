import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { FinalCtaNetwork } from '../components/FinalCtaNetwork';
import { LogoMark } from '../components/Logo';
import { MagneticButton } from '../components/ui/MagneticButton';

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-dark py-24 text-white lg:py-32">
      <FinalCtaNetwork />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan/10 via-transparent to-green/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        whileInView={{ opacity: 0.12, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-16 -top-16 sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
      >
        <LogoMark className="h-64 w-64 sm:h-80 sm:w-80" />
      </motion.div>

      <div className="container-px relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[12.5px] font-semibold text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-soft" />
          Parlons de votre transformation digitale
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-[34px] font-extrabold leading-tight sm:text-[52px]"
        >
          Prêt à simplifier votre entreprise ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/55"
        >
          Découvrez comment TechITEasy peut transformer votre quotidien.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <MagneticButton className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue via-cyan to-green px-7 py-3.5 text-[14.5px] font-bold text-white shadow-glow">
            Demander une démo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14.5px] font-bold text-white/90 transition-colors hover:border-white/40">
            <MessageCircle className="h-4 w-4" />
            Parler à un expert
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
