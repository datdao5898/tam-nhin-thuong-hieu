/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lexend"', 'sans-serif'],
      },
      keyframes: {
        pulse_bounce: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.05) translateY(-5px)' },
        }
      },
      animation: {
        pulse_bounce: 'pulse_bounce 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

