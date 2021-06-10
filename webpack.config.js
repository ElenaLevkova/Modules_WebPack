


let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    entry: './src/switch.js',
    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'dist')
    },
    watch: true,

    devtool: "source-map",

    module: {
        rules: [
            { 
                        test: /\\.(png|jpe?g|gif|mp3)$/i, 
                        use: 'file-loader'
                }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new BundleAnalyzerPlugin() 
    ],
    devServer: {
        port: 9000
      }


  
};