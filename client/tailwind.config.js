/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        dark: '#0B0C10',
        medium: '#1F2833',
        mediumDark: '#10151A',
        light: '#C5C6C7',
        primary: '#66FCF1',
        secondary: '#45A29E'
      },
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      }
    },
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within']
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss'),
    require('autoprefixer'),
    'prettier-plugin-tailwindcss'
  ]
};
