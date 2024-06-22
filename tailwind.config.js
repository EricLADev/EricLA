
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
        fira: ['Fira Sans', 'sans-serif'],
        firacond: ['Fira Sans Condensed', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        grotesk: ['HK Grotesk', 'sans-serif'],
        hkgrotesk: ['Hanken Grotesk', 'sans-serif'],
        ibm: ["IBM Plex Sans", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        //bigjohn: ["Big John", "courier", "sans-serif"],
        //qanelas: ["QanelasSoftDEMO", "sans-serif"],
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2000px',
        // => @media (min-width: 1800px) { ... }
      },
      listStyleImage: {
        arrow: 'url("/assets/icons/list-item.svg")',
        right: 'url("/assets/icons/right-rounded.svg")',
      }
    },
  },
  plugins: [],
};