export default {
   entry: './src/index.js',
   resolve: {
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
}