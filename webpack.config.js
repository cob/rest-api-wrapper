export default [
   {
      entry: './src/index.js',
      resolve: {
         // node-only cookie handling, stubbed out of browser bundles (see src/auth.js)
         alias: {
            "axios-cookiejar-support": false,
            "tough-cookie": false
         },
         fallback: {
            "url": false,
            "util": false
         }
      },
      mode: "production",
      output: {
         library: {
               name: "cobRestApiWrapper",
               type: 'umd'
         },
         filename: 'rest-api-wrapper.js'
      }
   },
   {
      experiments: {
         outputModule: true,
      },
      entry: './src/index.js',
      resolve: {
         // node-only cookie handling, stubbed out of browser bundles (see src/auth.js)
         alias: {
            "axios-cookiejar-support": false,
            "tough-cookie": false
         },
         fallback: {
            "url": false,
            "util": false,
            "fs": false
         }
      },
      mode: "production",
      output: {
         library: {
            type: 'module'
         },
         filename: 'rest-api-wrapper.esm.js'
      }
   }
]