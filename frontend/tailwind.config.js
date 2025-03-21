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
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          bg: '#121212',
          card: '#1e1e1e',
          hover: '#2d2d2d',
          border: '#333333',
          text: {
            primary: '#ffffff',
            secondary: '#a0a0a0',
            muted: '#666666'
          }
        }
      },
      transitionProperty: {
        'colors-transform': 'color, background-color, border-color, transform',
      }
    },
  },
  plugins: [],
}

