import { mainColor } from './src/util';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: 'cornsilk',
        mainBgc: '#rgb(74 80 87)',
      }
    },
  },
  plugins: [],
}

