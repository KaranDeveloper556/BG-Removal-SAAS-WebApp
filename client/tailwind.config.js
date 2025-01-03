/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'li': '350px',
        'vsm': '480px',
        'mdLg': '830px',
        '3xl': '1680px',
        '4xl': '2800px'
      },

      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Bebas_neue': ['Bebas Neue', 'sans-serif'],
      },
      
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
}