/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      custom: { min: "400px", max: "768px" },
    },
    extend: {
      boxShadow: {
        custom: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      backgroundColor: {
        primary: "#efefef",
      },
    },
  },
  plugins: [],
};
