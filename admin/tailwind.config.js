/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        lausanne: ['lausanne', 'sans-serif'],
      },
      borderRadius: {
        'option': '3px 0px 0px 3px',
      },
      fontSize: {
        'sidebar': 'max(1vw, 10px)',
      },
      margin: {
        'add': 'max(5vw, 25px)',
      },
      width: {
        'add-product': 'max(40%, 280px)'
      },
      gridTemplateColumns: {
        'list-table': '0.5fr 2fr 1fr 1fr 0.5fr',
        'list-table-sm': '1fr 3fr 1fr',
        'orders-grid': '0.5fr 2fr 1fr 1fr 1fr',
        'orders-grid-responsive': '0.5fr 2fr 1fr'
      },
      colors: {
        'tomato': '#FF6347', 
      },
      maxWidth: {
        'select': 'max(10vw, 120px)'
      }
    },
  },
  plugins: [],
}

