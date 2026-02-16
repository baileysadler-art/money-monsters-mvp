import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#58CC02",
          "green-dark": "#46a302",
          "green-light": "#E6F9D4",
          blue: "#1CB0F6",
          "blue-dark": "#1899d6",
          "blue-light": "#D6F0FE",
          orange: "#FF9600",
          "orange-dark": "#e08600",
          "orange-light": "#FFF0D6",
          purple: "#CE82FF",
          "purple-dark": "#b86ee6",
          "purple-light": "#F3E5FF",
          red: "#FF4B4B",
          "red-dark": "#e04343",
          "red-light": "#FFE0E0",
          yellow: "#FFC800",
          "yellow-dark": "#e0b000",
          "yellow-light": "#FFF6D6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dim: "#F7F7F7",
          warm: "#FFFBF5",
          border: "#E5E5E5",
          dark: "#3C3C3C",
        },
        text: {
          primary: "#3C3C3C",
          secondary: "#777777",
          inverse: "#FFFFFF",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
        "bottom-bar": "0 -4px 20px rgba(0,0,0,0.06)",
      },
      keyframes: {
        "flame-flicker": {
          "0%, 100%": { transform: "scaleY(1) scaleX(1)" },
          "50%": { transform: "scaleY(1.1) scaleX(0.95)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-100%) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-4px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(4px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(88, 204, 2, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(88, 204, 2, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        "flame-flicker": "flame-flicker 0.5s ease-in-out infinite",
        "bounce-in": "bounce-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "confetti-fall": "confetti-fall 2s ease-in forwards",
        shake: "shake 0.5s ease-in-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        pop: "pop 0.3s ease-out",
        wiggle: "wiggle 0.4s ease-in-out",
        breathe: "breathe 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
