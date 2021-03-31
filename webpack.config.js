export default {
   entry: './src/index.js',
   resolve: {
      fallback: { "url": false }
   },
   mode: "production",
   output: {
      filename: 'rest-api-wrapper.js'
   }
};
