/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      backgroundImage: {
        'galaxy': "url('./src/assets/background.png')",
        'rainbow':'linear-gradient(90deg, #9572FC 13.08%, #43E7AD 50.94%, #E1D55D 84.57%)',
        'black-gradient':'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 67.08%)'  
      }
    },
  },
  plugins: [],
}

