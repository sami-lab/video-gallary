module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease",
      },
    },
  },
};
