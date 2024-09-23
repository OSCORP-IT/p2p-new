/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D5152",
        secondary: "#03A6A6",
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
    },
  },
  plugins: [],
};
