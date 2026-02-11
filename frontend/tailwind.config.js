/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        clay: "#f3eee6",
        mint: "#7ee0b6",
        ember: "#f59e0b",
        floral: "#fffaf0",
        banana: "#fae7b5",
        safety: "#eedd00",
        mauve: "#e0b0ff",
        lavender: "#a76bcf"
      }
    }
  },
  plugins: []
};
