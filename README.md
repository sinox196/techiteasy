# TechITEasy — Simplifying Digitalization

Site web corporate premium pour TechITEasy, une startup de transformation digitale
proposant deux solutions SaaS : **RH & Paie** et **Facturation digitale**.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations, scroll-driven séquences, micro-interactions)
- Lucide React (icônes)

## Développement

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/       Navbar, Logo, UI primitives (Reveal, Counter, MagneticButton…)
    hero/           Écosystème digital interactif du hero
    products/       Showcases RH & Paie / Facturation
    automation/     Cartes de workflow automatisé
  sections/         Une section = un bloc de la landing page
  hooks/            Hooks partagés (détection de section active, etc.)
```

## Design system

Palette et typographie définies dans `tailwind.config.js` (couleurs `navy`, `blue`,
`cyan`, `green`, `mist`) et `src/index.css` (dégradés de marque, grilles décoratives).
