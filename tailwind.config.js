/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a4142",
        secondary: "#4A7C7D",
        titleColor: "#22252b",
        textColor3: "#777986",
        textGradient1: "#649697",
        textGradient2: "#08312F",
        accent: "#ff6b00",
        primaryBackground: "#F2FAFA",
        bgGradient1: "#DEECE8",
        bgGradient2: "#B3D4D8",
        bgGradient3: "#143A3A",
        bgGradient4: "#069292",
        bgGradient5: "#0A1313",
        dropShadow: "#B3D4D8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        allSide: "0 0 10px 5px rgba(0, 0, 0, 0.5)", // Example custom shadow
      },
      screens: {
        tab: "770px",
        laptop: "1285px",
      },
    },
  },
  plugins: [],
};
