/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Gotham A", "Gotham B", "ui-sans-serif", "system-ui"],
      },
      colors: {
        purple: {
          100: "#f5f1fd",
          200: "#ccafd9",
          300: "#b58bc9",
          400: "#746296",
          500: "#604c8d",
          600: "#453374",
          700: "#363151",
          800: "#23193a",
          900: "#28253d",
        },
        gray: {
          50: "f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        }
      }
    },
  },
  plugins: [],
}