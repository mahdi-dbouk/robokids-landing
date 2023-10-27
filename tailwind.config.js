/** @type {import('tailwindcss').Config} */
export default {
  content: ['*.html', './*/*.ts'],
  theme: {
    extend: {
      colors: {
        background: '#527AC2',
        logoCircle: '#3C5F9F'
      },
      fontFamily: {
        'Nunito': 'Nunito, Sans-Serif',
        'PT-Sans': 'PT Sans'
      }
    },
  },
  plugins: [],
}

