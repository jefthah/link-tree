/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        animation: {
          'blink-slow': 'blink 2s infinite', // Ini untuk animasi blinking lambat
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        },
      },
    },
    plugins: [],
  }
  