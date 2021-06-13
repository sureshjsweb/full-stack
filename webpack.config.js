const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
console.log('DIR: ', __dirname);
module.exports = {
	entry: __dirname + '/src/App.tsx',
	mode: 'production',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	watch: true,
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "./src/index.html"),
					to: path.resolve(__dirname, "./dist/index.html")
				},
			],
		})
	]
}