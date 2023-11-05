/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#b9e0fe",
          300: "#7cc8fd",
          400: "#36aefa",
          500: "#0c94eb",
          600: "#0076cc",
          700: "#015ca3",
          800: "#064f86",
          900: "#0b426f",
          950: "#072a4a",
        },
      },
    },
  },
  plugins: [],
};
