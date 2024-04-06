/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/main/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'xs': {'max': '800px'},
      'sm' : '640px',
      'md' :'768px',
      'lg' : '1024px',
      'xl' :'1280px',
      '2xl': '1536px'
    },
    extend: {},
  },
  plugins: [],
}

