/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'arabi-green': '#2d5f3f',
        'arabi-orange': '#e17834',
        'primehub-navy': '#003d7a',
        'primehub-blue': '#00a8e8',
        'esq-blue': '#003087',
        'gold-accent': '#d4af37'
      },
      fontFamily: {
        'arabic': ['"Noto Naskh Arabic"', 'serif'],
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
