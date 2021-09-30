module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "netflix-black": "#141414",
      "modal-gray": "#1b1b1b",
      "netflix-green": "#3cd83c",
      "netflix-grey": "#777777",
      "modal-back": "#00000088",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
