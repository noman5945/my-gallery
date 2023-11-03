/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        upperback: "url('/src/assets/BAcground/backGround.jpg')",
      },
      backgroundSize: {
        "50%": "100% 40%",
      },
    },
    colors: {
      purple: "#C71585",
      fade: "#CCD1D1",
      cloudy_fade: "#616A6B",
      delete_red: "#E74C3C",
      white: "#FDFEFE",
      darkGreen: "#1D8348 ",
      pest: "#ECF0F1 ",
    },
    daisyui: {
      themes: [
        "light",
        {
          mytheme: {
            primary: "#5b01af",

            secondary: "#3c1fa5",

            accent: "#ffd684",

            neutral: "#3e2541",

            "base-100": "#f0eef2",

            info: "#65c0d7",

            success: "#26ba84",

            warning: "#8b740e",

            error: "#de3b3b",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
