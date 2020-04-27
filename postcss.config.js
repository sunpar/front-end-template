// const purgecss = require('@fullhuman/postcss-purgecss')({
//   // Specify pathing to all the template files
//   content: ['./src/**/*.html', './src/**/*.js'],

//   // Include any special characters
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
// });

const tailwindcss = require('tailwindcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    precss,
    autoprefixer,
    // , purgecss
  ],
};
