/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hr-green': '#00C896',
        'hr-green-dark': '#00B085',
        'hr-blue': '#3B82F6',
        'hr-blue-light': '#60A5FA',
        'hr-gray': '#8B9BA8',
        'hr-dark': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        satoshi: ['Satoshi', 'Verdana', 'sans-serif'],
        mono: ['Departure Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '0.9' }],
        '9xl': ['8rem', { lineHeight: '0.9' }],
      },
      animation: {
        float: 'float 60s ease-in-out infinite',
        blink: 'blink 1.25s ease-in-out infinite',
        scroll: 'scroll-right-to-left 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '0.5%': { opacity: '0' },
          '1%': { opacity: '1' },
          '8%': { opacity: '1' },
          '10%': { transform: 'translateX(-90px)', opacity: '0' },
          '100%': { transform: 'translateX(-90px)', opacity: '0' },
        },
        blink: {
          '0%': { opacity: '1' },
          '25%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-right-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [daisyui],
};
