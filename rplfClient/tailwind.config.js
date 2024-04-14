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
      'xsm': '350px',
      'sm' : '640px',
      'md' :'768px',
      'lg' : '1024px',
      'xl' :'1280px',
      '2xl': '1600px'
    },
    extend: {
      keyframes:{
        growFromLeft : {
          '0%' : {width : '0px'},
          '100%' : {width : '300px'}
        },
        shrinkFromLeft : {
          '0%' : {width : '300px'},
          '100%' : {width : '0px'}
        }

      },
      animation : {
        growFromLeft : 'growFromLeft 0.7s forwards ',
        shrinkFromLeft : 'shrinkFromLeft 0.7s forwards'
      }
    },
  },
  plugins: [],
}
