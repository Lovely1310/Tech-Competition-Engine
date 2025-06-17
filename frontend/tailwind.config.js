/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
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
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '0.9' }],
        '9xl': ['8rem', { lineHeight: '0.9' }],
      },
      animation: {
        'float': 'float 60s ease-in-out infinite',
        'blink': 'blink 1.25s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '0.5%': { opacity: '0' },
          '1%': { opacity: '1' },
          '8%': { opacity: '1' },
          '10%': { opacity: '0', transform: 'translateX(-90px)' },
          '100%': { opacity: '0', transform: 'translateX(-90px)' },
        },
        blink: {
          '0%': { opacity: '1' },
          '25%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}