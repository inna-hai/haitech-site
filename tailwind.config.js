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
        'haitech-azure': '#4FA3FF'
      }
    }
  },
  plugins: [],
}
