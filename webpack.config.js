var path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|dist)/,
                use: 'babel-loader'
            }
        ]
    },
    mode: 'production',
    externals: {
        react: 'commonjs react',
        'react-dom': 'commonjs react-dom'
    }
}
