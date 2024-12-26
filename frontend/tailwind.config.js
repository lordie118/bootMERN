

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  "./node_modules/flowbite/**/*.js" // Path to your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


