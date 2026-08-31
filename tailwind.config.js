/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060913',
          900: '#0b1120',
          850: '#0f172a',
          800: '#131e36',
          700: '#1e293b',
          600: '#334155',
        },
        brand: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          emerald: '#10b981',
          violet: '#8b5cf6',
          purple: '#a855f7',
          pink: '#ec4899',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15), transparent 70%)',
        'radial-violet': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        'float-reverse': 'floatReverse 5.5s ease-in-out infinite',
        'float-slow': 'floatReverse 7s ease-in-out 2s infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 24s linear infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.7))' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.5)',
        'neon-violet': '0 0 20px -5px rgba(139, 92, 246, 0.5)',
        'neon-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};
