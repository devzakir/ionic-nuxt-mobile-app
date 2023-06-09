/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F1F2F4",
          100: "#E4E5E8",
          200: "#C8CCD1",
          300: "#ADB2BA",
          400: "#9199A3",
          500: "#767F8C",
          600: "#5E6670",
          700: "#474C54",
          800: "#2F3338",
          900: "#18191C",
        },
        primary: {
          50: "#E7F0FA",
          100: "#CEE0F5",
          200: "#9DC1EB",
          300: "#6CA3E0",
          400: "#3B84D6",
          500: "#0A65CC",
          600: "#0851A3",
          700: "#063D7A",
          800: "#042852",
          900: "#021429",
        },
        green: {
          50: "#E7F6EA",
          100: "#CEECD5",
          200: "#9DD9AB",
          300: "#6DC680",
          400: "#3CB356",
          500: "#0BA02C",
          600: "#098023",
          700: "#07601A",
          800: "#044012",
          900: "#022009",
        },
      },
    },
  },
  plugins: [],
};
