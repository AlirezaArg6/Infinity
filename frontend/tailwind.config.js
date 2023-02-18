/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#eeeeee",
        teal: "#00ADB5",
        darkGrey: "#393E46",
        mainColor: "#222831",
      },
      boxShadow: {
        medium: "0 8px 24px rgba(149, 157, 165, 0.2)",
      },
    },

    fontFamily: {
      iranSans: ["iranSans"],
      iranSansWeb: ["iranSansWeb"],
    },
  },
  plugins: [],
};
