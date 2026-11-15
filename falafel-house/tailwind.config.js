/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6EFE1',
        ink: '#141414',
        card: '#EDE3CF',
        sun: '#FFD23F',
        stamp: '#B42318',
        fh: {
          DEFAULT: '#1A852B', // accessible brand green for text, buttons, bands
          bright: '#42BD41', // logo green, used for large decorative type
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        heavy: ['"Archivo Black"', 'sans-serif'],
        body: ['Oswald', '"Arial Narrow"', 'sans-serif'],
        mono: ['"Courier Prime"', '"Courier New"', 'monospace'],
        marker: ['"Permanent Marker"', 'cursive'],
        round: ['Fredoka', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        print: {
          '0%': { transform: 'translateY(-102%)' },
          '12%': { transform: 'translateY(-88%)' },
          '24%': { transform: 'translateY(-74%)' },
          '36%': { transform: 'translateY(-58%)' },
          '48%': { transform: 'translateY(-44%)' },
          '60%': { transform: 'translateY(-30%)' },
          '72%': { transform: 'translateY(-16%)' },
          '86%': { transform: 'translateY(-4%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pop: {
          '0%': { transform: 'scale(.4)', opacity: '0' },
          '70%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        print: 'print 2.2s ease-out both',
        float: 'float 5s ease-in-out infinite',
        pop: 'pop .6s cubic-bezier(.3,1.6,.5,1) both',
      },
    },
  },
  plugins: [],
}
