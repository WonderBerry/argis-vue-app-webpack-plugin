const ArcGISPlugin = require("@arcgis/webpack-plugin");
const path = require('path');
module.exports = {
    
    configureWebpack:{
        
        plugins: [
          new ArcGISPlugin(),
        ],
        node: {
            process: false,
            global: false,
            fs: "empty"
        },
        optimization: {
            minimize: true,
            splitChunks: {
                minChunks:Infinity,
                chunks: 'all',
            }
        }
    },
    // publicPath: process.env.NODE_ENV === 'production' ? "/" : '/'
}