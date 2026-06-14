/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        cream: "#FFF8F0",
        "warm-orange": "#FF6B35",
        "deep-green": "#1A3C34",
        "gold": "#FFD700",
        "soft-red": "#FF4757",
        "mint": "#E8FFF3",
        "card-bg": "#FFFFFF",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      keyframes: {
        "apple-fall": {
          "0%": { transform: "translateY(-60px) rotate(0deg)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(0) rotate(15deg)", opacity: "1" },
        },
        "bounce-score": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
          "100%": { transform: "scale(1)" },
        },
        "shake-card": {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-8px)" },
          "40%": { transform: "translateX(8px)" },
          "60%": { transform: "translateX(-5px)" },
          "80%": { transform: "translateX(5px)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "70%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "sparkle": {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1) rotate(180deg)", opacity: "1" },
          "100%": { transform: "scale(0) rotate(360deg)", opacity: "0" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(60px) rotate(360deg)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "apple-fall": "apple-fall 0.8s ease-out forwards",
        "bounce-score": "bounce-score 0.4s ease-out",
        "shake-card": "shake-card 0.5s ease-out",
        "pop-in": "pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "float": "float 3s ease-in-out infinite",
        "sparkle": "sparkle 0.6s ease-out forwards",
        "confetti-fall": "confetti-fall 1.2s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
