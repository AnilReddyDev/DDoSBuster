/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '578px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1020px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'font-1': ['Silkscreen', 'sans-serif'],
      'font-2': ['Teko', 'sans-serif'],
      'font-3': ['Source Code Pro', 'monospace']
    },
    extend: {
     height:{
      h8:"8vh",
      h92:"92vh",
     },
     colors:{
      whi:"#030202",
      black_bg:"#111519",
      lightred:"#f04f4f"
     }
    },
  },
  plugins: [],
}