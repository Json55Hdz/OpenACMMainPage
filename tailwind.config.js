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
        // Base
        'bg-primary': '#050505',
        'bg-secondary': '#0A0A0A',
        'surface': '#111113',
        'surface-elevated': '#1A1A1F',
        
        // Brand
        primary: {
          500: '#6366F1',
          600: '#4F46E5',
        },
        accent: {
          400: '#22D3EE',
          500: '#06B67F',
        },
        violet: {
          400: '#A78BFA',
        },
        
        // Text
        'text-primary': '#F4F4F5',
        'text-secondary': '#A3A3A3',
        'text-muted': '#71717A',
        
        // UI
        border: '#27272A',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display2': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgb(99 102 241 / 0.3)',
        'glow-accent': '0 0 35px -5px rgb(34 211 238 / 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
