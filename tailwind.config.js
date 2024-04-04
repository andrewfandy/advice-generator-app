/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "size-base": 28,
      },
      fontWeight: {
        "weight-base": 800,
      },
      fontFamily: {
        "family-base": ["Manrope", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        "base-widest": 5,
      },
      boxShadow: {
        base: "0rem 0rem 2rem hsl(150, 100%, 66%)",
      },
      colors: {
        "primary-neon": "hsl(150, 100%, 66%)",
        "primary-cyan": "hsl(193, 38%, 86%)",
        "neutral-gray-blue": "hsl(217, 19%, 38%)",
        "neutral-dark-gray": "hsl(217, 19%, 24%)",
        "neutral-dark-blue": "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
