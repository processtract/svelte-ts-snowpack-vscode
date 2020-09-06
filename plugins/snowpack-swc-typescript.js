const swc = require("@swc/core");
const path = require('path');
const fs = require('fs'); 

module.exports = function (snowpackConfig, pluginOptions) {
    return {
      name: 'tsmap',
      resolve: {
        input: ['.ts'],
        output: ['.js','.ts'],
      },
      async load({filePath}) {
        let codeToCompile = fs.readFileSync(filePath, 'utf-8');
       
        let result = await swc
          .transform(codeToCompile, {
            filename: filePath,
            sourceMaps: true,
            isModule: true,
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: false,
                decorators: true,
                dynamicImport: true
              },
              transform: {},
            },
          });
          
          let map = null;
          if (result.map) {
            map = JSON.parse(result.map);
            map.sources[0] = "sources://" + path.relative(process.cwd(), filePath).replace(/\\/g,"/");
            map.file = "sources://" + path.relative(process.cwd(), filePath).replace(/\\/g,"/");
          }         
  
          const output = {
            '.js': {
              code: result.code,
              map: map
            },
            '.ts': {
              code: codeToCompile
            }
          };

          return output;
      }
    };
  };