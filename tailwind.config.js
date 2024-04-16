/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors:{
        new:"#4dc4ba"},
        spacing: {
          '120': '28rem',
        },
        
      fontFamily:{
          'mario':["Shojumaru"],
          'kufi':["Noto Kufi Arabic"],
          "mont":["Montserrat-Arabic-Regular"]
      },
      
      
    },
    
  },
  plugins: [],
};
