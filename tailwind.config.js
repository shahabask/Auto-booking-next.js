/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
    primary:{
      user:colors.purple,
      admin:colors.yellow,
      driver:colors.green,

    },
    secondary:{
      user:colors.orange,
      admin:colors.red,
      driver:colors.pink
    },
    teritiary:{
      user:colors.gray,
      admin:colors.blue,
      driver:colors.indigo,
    }
      

    },
  },
  plugins: [],
};
