
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/client/public/bg-pattern.png')",
        'footer-texture': "url('/client/public/bg-pattern.png')",
      }
    },
  },
  plugins: [],
}
