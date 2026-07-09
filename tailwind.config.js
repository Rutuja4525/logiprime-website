/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          navy: '#0B2545',
          blue: '#134074',
          light: '#EEF4F8',
          accent: '#D4AF37', // Gold
        },
        darktech: {
          bg: '#0d0e12',
          card: '#16171f',
          accent1: '#a855f7', // Purple
          accent2: '#3b82f6', // Blue
          accent3: '#10b981', // Emerald
        },
        minimalist: {
          bg: '#fbfbfb',
          card: '#ffffff',
          accent: '#059669', // Deep green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
