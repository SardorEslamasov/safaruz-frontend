module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // this is correct
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Deep dark blue
        secondary: '#1e293b',
        accent: '#22d3ee',
        highlight: '#f472b6',
        light: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
