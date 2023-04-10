/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stars: ["url('/images/background-stars.svg')"],
      },
      colors: {
        black: "#070724",
        grayDark: "#38384F",
        grayLight: "#838391",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6D2ED5",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC1A2",
        neptune: "#2D68F0",
      },
      fontFamily: {
        sans: ["SpartanVariable", "sans-serif"],
        antonio: ["var(--font-antonio)", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
