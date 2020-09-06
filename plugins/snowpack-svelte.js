const originalPlugin = require('@snowpack/plugin-svelte');
const path = require('path');

module.exports = function plugin(snowpackConfig, pluginOptions = {}) {
 
  return {
    name: 'snowpack-svelte',
    resolve: {
      input: ['.svelte'],
      output: ['.js', '.css'],
    },
    knownEntrypoints: ['svelte/internal'],
    async load({filePath}) {
        let result = await originalPlugin(snowpackConfig, pluginOptions).load({filePath});        
        
        result['.js'].map.sources[0] = "sources://" + path.relative(process.cwd(), filePath).replace(/\\/g,"/");
        result['.js'].map.file = "sources://" + path.relative(process.cwd(), filePath).replace(/\\/g,"/");       

        return result;
    },
  };
};
