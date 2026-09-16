import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B4F9C",
        secondary: "#1769C2",
        green: "#18A558",
        "green-dark": "#08783D",
        yellow: "#FFC928",
        light: "#F7FBFF",
        ink: "#17324D",
        cream: "#FFF7E3",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.75rem", blob: "2.5rem" },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11,79,156,0.18)",
        card: "0 14px 40px -18px rgba(11,79,156,0.28)",
        nav: "0 2px 16px -8px rgba(11,79,156,0.25)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        "fade-up": "fade-up .6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
