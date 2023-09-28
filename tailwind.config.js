module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4faf6",
          400: "#c4c4c4",
          500: "#979797",
          700: "#666666",
          "400_4c": "#bebebe4c",
          "500_01": "#9f9f9f",
          "100_01": "#f4f4f4",
        },
        blue_gray: { 100: "#d4d8e4", "100_01": "#cccccc" },
        blue: { 800: "#1d4ed8" },
        red: { 900: "#a70000" },
        green: { 900: "#087b2f", "900_01": "#077b2e" },
        black: { 900: "#000000", "900_0c": "#0000000c", "900_1e": "#0000001e" },
        cyan: { 50: "#d0f7fa", "50_01": "#d0f7f9" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter", notosans: "Noto Sans" },
      boxShadow: {
        bs: "3px 3px  14px 0px #bebebe4c",
        bs1: "0px 1px  18px 0px #0000001e",
        bs2: "0px 4px  23px 0px #0000000c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
