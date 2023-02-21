/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Gazapacho': ['Gazapacho','serif']
    },
    colors: {
      'main': "#2C0058",
      'secondary': "#FEF7ED",
      'accent': "#AE4911",
      'base': "#FEF7ED",
    },
    screens: {
      'small':{
          'max':'800px'
      }
   },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}