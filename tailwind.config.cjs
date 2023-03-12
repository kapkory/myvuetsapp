// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'false',

//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'

//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [..., require('flowbite/plugin')],

// }

module.exports = {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
      require('flowbite/plugin')
  ],
  theme: {}
}
