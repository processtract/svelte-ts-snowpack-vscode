const sveltePreprocess = require('svelte-preprocess');
const sass = require('sass');
const atImport = require("postcss-import");

const preprocess = sveltePreprocess({
  typescript: {
    tsconfigFile: "./tsconfig.json"
  },
  scss: {
    renderSync: true, //Faster for dart sass See: https://github.com/sveltejs/svelte-preprocess/blob/master/docs/preprocessing.md#scss-sass
    implementation: sass,
    includePaths:["./style"]
  },
  postcss: {
    plugins: [
      require('postcss-import'),
      require('autoprefixer') 
       
    ]
  }
});

module.exports = { 
  preprocess: preprocess
};