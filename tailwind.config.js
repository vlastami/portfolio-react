/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          50: "#f9f9f9",
          100: "#f0f0f0",
          200: "#e6e6e6",
          300: "#3c8067",
          400: "#d2d2d2",
          500: "#3c8067",
          600: "#e8f7ef",
          700: "#b4b4b4",
          800: "#aaaaaa",
          900: "#a0a0a0",
        },
      },
    },
  },
  plugins: [],
};
