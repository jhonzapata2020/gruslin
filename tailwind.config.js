/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unad-blue-dark': '#001D2D',
        'unad-blue-primary': '#004F71',
        'unad-blue-light': '#82D0F5',
        'unad-orange': '#F36F21',
        'unad-yellow': '#F9A01B',
        'unad-bg-card': '#002B3E',
        unad: {
          dark: '#001D2D',
          primary: '#004F71',
          light: '#82D0F5',
          orange: '#F36F21',
          yellow: '#F9A01B',
          card: '#002B3E',
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
          '0%': { boxShadow: '0 0 10px rgba(130, 208, 245, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(130, 208, 245, 0.8), 0 0 40px rgba(249, 160, 27, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
