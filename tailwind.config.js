/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#000099",
        "custom-green": "#92e0e0",
      },
      screens: {
        'laptop': '1366px',  // 14-15 inch laptops
        'laptop-lg': '1440px', // Larger laptops
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
