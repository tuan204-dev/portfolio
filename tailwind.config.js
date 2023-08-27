/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'light-cloud': "url('./assets/imgs/backgrounds/lightCloud.png')",
        'dark-cloud': "url('./assets/imgs/backgrounds/darkCloud.png')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
