/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class'],
  theme: {
    extend: {
      padding: {
        '8px': '8px',
        '16px': '16px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px'
      },
      margin: {
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
      },
      borderRadius: {
        'standard': '3px'
      },
      boxShadow: {
        'standard': 'var(--background) 0 0 16px 2px'
      }
    },
  },
  plugins: [],
}

