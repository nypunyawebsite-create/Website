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
    },
  },
  plugins: [require("flowbite/plugin")],
};
