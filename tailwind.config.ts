/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind will scan all JS/TS/JSX/TSX files in the 'src' folder
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#E7E7E7",
        },
      },
    },
  },
  plugins: [],
};
9