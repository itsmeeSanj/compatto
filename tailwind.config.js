/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "6rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      "2xl": { max: "1980px" },
      xl: { max: "1680px" },
      lg: { max: "1440px" },
      md: { max: "1024px" },
      sm: { max: "769px" },
      xs: { max: "480px" },
      xxs: { max: "379px" },
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      fontFamily: {
        // archivo: ["Archivo", "sans-serif"],
        // bebasNeue: ["BebasNeue", "sans-serif"],
        // cabinetGrotesk: ["CabinetGrotesk", "sans-serif"],
        // clashDisplay: ["ClashDisplay", "sans-serif"],
        // familjenGrotesk: ["FamiljenGrotesk", "sans-serif"],
        // switzer: ["Switzer", "sans-serif"],
        sans: ['"Open Sans", sans-serif'],
      },

      colors: {
        primary: "#a28665",
        background: "#f8f7f3",
      },
    },
  },
  plugins: [],
};
