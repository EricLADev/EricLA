
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ["-apple-system, BlinkMacSystemFont", "Segoe UI", "Roboto, Helvetica, Arial, sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        firacond: ['Fira Sans Condensed', 'sans-serif'],
        urbanist: ["Urbanist", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"]
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2000px',
      },
      listStyleImage: {
        arrow: 'url("/assets/icons/list-item.svg")',
        right: 'url("/assets/icons/right-rounded.svg")',
      },
      scale: {
        '60': '0.60',
        '65': '0.65',
        '70': '0.70',
        '80': '0.80',
        '85': '0.85',
      }
    },
  },
  plugins: [],
};