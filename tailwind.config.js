/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      primary: "#dd1cb7",
      secondary: "#3738a9",
      darkBlue: "#161f31",
      grey: "#919095",
      white: "#ffffff",
      black: "#09121d",
      transparent: "transparent",
    },

    screens: {
      xs: "350px",
      // => @media (min-width: 360px) { ... }

      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
