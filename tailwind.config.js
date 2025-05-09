/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b81',
          dark: '#800080',
          light: '#ffa500',
        }
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'gradient-custom': 'linear-gradient(135deg, #ffa500, #ff6b81, #800080)',
      },
      backdropBlur: {
        'md': '8px',
      },
    },
  },
  plugins: [],
};