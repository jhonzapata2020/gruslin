/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unad: {
          dark: '#001935',
          navy: '#003366',
          blue: '#004B87',
          accent: '#0072CE',
          gold: '#F0B429',
          'gold-light': '#FCD34D',
          'gold-dark': '#D99B1C',
          slate: '#0B132B',
          card: '#1C2541',
          cyan: '#38BDF8',
          glow: '#00F0FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 240, 255, 0.8), 0 0 40px rgba(240, 180, 41, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
