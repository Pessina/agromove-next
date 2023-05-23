module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      animation: {
        "slide-in": "slideIn 300ms ease-in-out forwards",
        "slide-out": "slideOut 300ms ease-in-out forwards",
        "fade-in": "fadeIn 300ms ease-in-out forwards",
        "fade-out": "fadeOut 300ms ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "50%",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "50%",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
