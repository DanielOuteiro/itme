const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pp-bold": ["PPNeueMontreal-Bold", "sans-serif"],
        "pp-book": ["PPNeueMontreal-Book", "sans-serif"],
        "pp-italic": ["PPNeueMontreal-Italic", "sans-serif"],
        "pp-medium": ["PPNeueMontreal-Medium", "sans-serif"],
        "pp-semi-bold-italic": ["PPNeueMontreal-SemiBoldItalic", "sans-serif"],
        "pp-thin": ["PPNeueMontreal-Thin", "sans-serif"],
      },
      colors: {
        'regal-green': '#043632',
        'regal-gray': '#577B78',
        'bg-color': '#C3FDBF',

        
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};
