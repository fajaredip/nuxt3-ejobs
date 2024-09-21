/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0f0f0f',
        white: '#f1f1f1'
      },
    },
  },
  plugins: [],
};
