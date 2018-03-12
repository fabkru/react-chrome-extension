const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		background: './src/background.js',
		newtab: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			// Source
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},

			// Style
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},

			// Images
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: ['file-loader?limit=100000']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/manifest.json'
			},
			{
				from: './src/assets',
				to: 'assets'
			}
		])
	]
};
