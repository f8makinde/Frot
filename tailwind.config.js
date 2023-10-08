/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open_sans)'],
        lora: ['var(--font-lora)'],
        poppins: ['var(--font-poppins)']
      },
      colors: {
        "primary": "#186784",
        "white": "#ffffff"
      },
    },
  },
  plugins: [],
}
