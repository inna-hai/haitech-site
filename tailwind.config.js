/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'haitech-blue': '#5B6CFF',
        'haitech-purple': '#6C5CE7',
        'haitech-azure': '#4FA3FF',
        'haitech-ink': '#0B1020'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem'
        }
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
