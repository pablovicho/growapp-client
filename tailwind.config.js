
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    height: {
        sm: '1.5px',
        md: '16px',
        lg: '24px',
        xl: '48px',
            },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/client/public/bg-pattern.png')",
        'footer-texture': "url('/client/public/bg-pattern.png')",
      }
    },
    minWidth: {
      '1/2': '50%',
      '2/3': '66%',
      '3/4': '75%',
      '6/4': '150%'
    }
  },
  plugins: [],
}
