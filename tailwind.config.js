/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        surface: '#FFFFFF',
        'surface-muted': '#F3EFEA',
        foreground: '#141416',
        'foreground-muted': '#696B70',
        navy: {
          950: '#070C15',
          900: '#0C1322',
          850: '#111A2E',
          800: '#17223B',
          700: '#233254',
          600: '#344774',
        },
        editorial: {
          dark: '#111215',
          card: '#F6F3EE',
          border: '#E7E2D8',
          borderDark: '#262A35',
          bone: '#F8F6F1',
          crimson: '#8C253B',
          olive: '#385A2E',
          violet: '#5A2A78',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      }
    },
  },
  plugins: [],
}
