/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        navy: {
          DEFAULT: '#003B5C',
          deep: '#003B5C',
          dark: '#002F4A',
          900: '#001E30',
        },
        blue: {
          DEFAULT: '#0079A8',
          digital: '#0079A8',
        },
        cyan: {
          DEFAULT: '#1593B6',
        },
        green: {
          DEFAULT: '#55C67A',
          tech: '#55C67A',
          soft: '#6DD58B',
        },
        mist: {
          50: '#F5F9FB',
          100: '#EDF5F8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #003B5C 0%, #0079A8 45%, #55C67A 100%)',
        'brand-gradient-soft': 'linear-gradient(120deg, #0079A8 0%, #1593B6 50%, #6DD58B 100%)',
        'brand-radial': 'radial-gradient(circle at 30% 20%, rgba(21,147,182,0.35), transparent 60%), radial-gradient(circle at 80% 80%, rgba(85,198,122,0.25), transparent 55%)',
        'navy-gradient': 'linear-gradient(160deg, #002F4A 0%, #003B5C 60%, #00476e 100%)',
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,59,92,0.04), 0 12px 32px -12px rgba(0,59,92,0.18)',
        'card-hover': '0 1px 2px rgba(0,59,92,0.06), 0 24px 48px -16px rgba(0,59,92,0.28)',
        glow: '0 0 0 1px rgba(85,198,122,0.25), 0 8px 40px -8px rgba(21,147,182,0.45)',
        nav: '0 8px 30px -12px rgba(0,47,74,0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out infinite 1.5s',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        dash: 'dash 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(0.92)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dash: {
          to: { strokeDashoffset: -24 },
        },
      },
    },
  },
  plugins: [],
}
