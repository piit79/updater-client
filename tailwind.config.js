/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        'brand-light': '#ead8cd',
        'brand-dark': '#4d3d32',
        'brand-primary': '#ae581e'
      }
    }
  },
  plugins: []
}
