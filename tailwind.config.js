module.exports = {
  important: true,
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["'Nanum Myeongjo', serif !important"],
      },
    },
  },
  plugins: [],
};
