
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
        inter: ['Inter', 'sans-serif'],
        grotesk: ['HK Grotesk', 'sans-serif'],
        hkgrotesk: ['Hanken Grotesk', 'sans-serif'],
        now: ['Now', 'sans-serif'],
        noto: ["Noto Sans", "sans-serif"],
      },
      screens: {
        '3xl': '1800px',
        // => @media (min-width: 1800px) { ... }
      },
    },
  },
  plugins: [],
};