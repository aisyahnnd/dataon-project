/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      card: "#FFFFFF",
      gray: "#DDDDDD",
      blue: "#1890FF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
