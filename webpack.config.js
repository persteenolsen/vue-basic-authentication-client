var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
	 entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.vue']
    },
	 output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                exclude: /(node_modules)/,
                use: 'vue-loader'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
       
        // NOTE: For production on simply.com!
         config: JSON.stringify({ apiUrl: 'https://basic.auth.api.core.persteenolsen.com/' })

         // NOTE: For local developement
         //config: JSON.stringify({ apiUrl: 'http://localhost:4000' })

    }
}