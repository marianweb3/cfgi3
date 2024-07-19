/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: "#070504",
        orangeBg: "#FF532E",
      },
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
        neue: ['"Neue Machina"', "sans-serif"],
      },
      backgroundImage: {
        noise: "url('/assets/noise.png')",
      },
    },
  },
  plugins: [],
};
