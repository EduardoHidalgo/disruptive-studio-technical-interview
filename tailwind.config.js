/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue 600
        "primary-variant": "#1e40af", // Blue 800
        secondary: "#6366f1", // Violet 500
        "secondary-variant": "#4338ca", // Violet 700
        background: "#030712", // Gray 950
        surface: "#111827", // Gray 900
        error: "#e11d48", // Rose 600
        success: "#059669", // Emeral 600
        "on-primary": "#1d4ed8", // Blue 700
        "on-secondary": "#7c3aed", // Violet 600
        "on-error": "#be123c", // Rose 700
        "on-background": "#020617", // Slate 950
        "on-surface": "#0f172a", // Slate 900
        font: "#f9fafb", // Gray 50
      },
    },
  },
  plugins: [],
};
