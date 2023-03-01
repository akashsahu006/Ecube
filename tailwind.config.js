/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'primary': "#1A98FF",
      'offwhite': "#E3E3E3",
      },
      height: {
        '68': '68px',
      },
      padding: {
        '96': '96px',
      },
      spacing: {
        '48px' : '48px',
      }
    },
  },
  plugins: [],
}
