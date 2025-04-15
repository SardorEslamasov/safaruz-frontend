module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {

        colors: {
          background: "#F9FAFB",
          darkText: "#1F2937",
          primary: "#4F46E5",
          secondary: "#7C3AED",
          accent: "#F59E0B",
          soft: "#E0E7FF",
          lightText: "#6B7280",
        },

        fontFamily: {
          sans: ["Inter", "sans-serif"], // or 'Poppins', 'Roboto', etc.
        },
      },
    },
    plugins: [],
  };