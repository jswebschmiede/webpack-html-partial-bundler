const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "../**.{html,php}",
    "../**/**.{html,php}",
    "./src/js/**.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#ea580c",
          200: "#c2410c",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/forms"),
  ],
};
