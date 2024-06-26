/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const screens = require('./src/screens')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        header: '70px',
        'header-lg': '103px',
        footer: '291px',
        content: 'calc(100vh - 70px - 291px)',
        'content-lg': 'calc(100vh - 103px - 291px)',
      },
      colors: {
        accent: '#02cfff',
        title: '#ffffff',
        subtitle: '#575757',
        subtitle2: '#e3dede',
        desc: '#9e9e9e',
        disactive: '#5a5a5a',
        danger: '#bc0000',
        mainBg: '#111112',
        listBg: '#202326',
        card: '#1c1c1e',
      },
      fontSize: {
        '2xs': '12px',
        sx: '13px',
        sm: '14px',
        md: '15px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      screens,
      boxShadow: {
        dialog: '7px 7px 250px 0px #00c2ff29',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.title'), lineHeight: 1.25 },
        body: {
          backgroundColor: theme('colors.mainBg'),
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: 'SF Pro Display',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        h1: {
          fontSize: '70px',
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: '60px',
          fontWeight: theme('fontWeight.bold'),
          textShadow: '0px 0px 10px #ffffff99',
        },
        h3: {
          fontSize: '50px',
          fontWeight: theme('fontWeight.bold'),
        },
        h4: {
          fontSize: '40px',
          fontWeight: theme('fontWeight.bold'),
        },
        h5: {
          fontSize: '30px',
          fontWeight: theme('fontWeight.bold'),
        },
        h6: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        nav: {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.bold'),
        },
        '.ul-text': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        span: {
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
        },
      })
    }),
  ],
}
