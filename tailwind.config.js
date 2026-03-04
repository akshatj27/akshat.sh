/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        zinc: {
          850: "#1f1f22",
          950: "#09090b",
        },
      },
    },
  },
  plugins: [],
};
