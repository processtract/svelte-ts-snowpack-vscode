
const noLaunch = process.env.NO_LAUNCH === "1";

module.exports = {    
    "mount": {
      "public": "/",
      "src": "/_dist_"
    },
    "plugins": [
      "./plugins/snowpack-swc-typescript",
      "./plugins/snowpack-svelte",    
      "@snowpack/plugin-dotenv",
       ["@snowpack/plugin-run-script", {"cmd": "tsc --noEmit", "watch": "$1 --watch"}],
       ["@snowpack/plugin-run-script", {"cmd": "svelte-check --output human", "watch": "$1 --watch", "output": "stream"}]
    
    ],
    "devOptions": {
      "port": 8081,
      "open": noLaunch ? "none" : "chrome",
      "secure": false
    },
    "installOptions": {
      "installTypes": true,
      "sourceMap": true
    },
    "buildOptions": {
      "sourceMaps":true
    }
  }
  ;