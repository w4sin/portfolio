/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        nohover: { raw: "(hover: none)" },
      },
      keyframes: {
        wiggle: {
          "0%": { width: 0 },
          "100%": { width: "85%" },
        },
      },
    },
    fontFamily: {
      sans: ["PT Sans", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-y-center": {
          "border-top-width": "1px",
          "border-bottom-width": "1px",
          "border-left-width": "0",
          "border-right-width": "0",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
