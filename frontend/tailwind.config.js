/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth: {
        'place-order-left': 'max(30%, 500px)',
        'cart-total-order': 'max(40%,500px)'
      },
      screens: {
        '900': '900px',
      },
      width: {
        'app-icon': 'max(30vw, 120px)',
        'login-popup': 'max(23vw,330px)',
        'cart-button': 'max(15vw, 200px)',
      },
      spacing: {
        'app-gap': 'max(2vw, 10px)',
        'cart-bottom': 'max(12vw, 20px)',
      },
      borderRadius: {
        'top-15': '15px 15px 0px 0px',
      },
      boxShadow: {
        'soft-black': '0px 0px 10px #00000015',
      },
      gridTemplateColumns: {
        'fill-minmax': 'repeat(auto-fill, minmax(240px, 1fr))',
        'card-items-grid': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        'orders-grid': '0.5fr 2fr 1fr 1fr 2fr 1fr',
        'orders-responsive': '1fr 2fr 1fr',
      },
      fontSize: {
        'responsive': 'max(4vw, 20px)',
        'view_menu_btn': 'max(1vw, 13px)',
        'explore-menu-items': 'max(1.4vw, 16px)',
        'food-display': 'max(2vw, 24px)',
        'app-download': 'max(3vw, 20px)',
        'cart-items': 'max(1vw, 12px)',
      },
      colors: {
        'tomato': '#FF6347', 
      },
      fontFamily: {
        lausanne: ['lausanne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

