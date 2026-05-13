import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1B13",
        mist: "#F3F8F3",
        line: "#D8E4DB",
        sage: "#8AA58F",
        pine: "#173F2B",
        green: {
          50: "#F1F8F3",
          100: "#DCEEE1",
          200: "#B7D9C0",
          300: "#86BC97",
          400: "#4F9B6D",
          500: "#1B8A5A",
          600: "#16724B",
          700: "#135C3D",
          800: "#124A33",
          900: "#113F2C"
        }
      },
      boxShadow: {
        panel: "0 18px 60px -24px rgba(17, 63, 44, 0.35)",
        float: "0 24px 60px -30px rgba(11, 35, 23, 0.28)"
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(17, 63, 44, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 63, 44, 0.06) 1px, transparent 1px)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        pulseLine: "pulseLine 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
