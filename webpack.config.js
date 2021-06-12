const path = require('path');

module.exports = {
	entry: __dirname + '/src/App.tsx',
	mode: 'production',
	output: {
		path: __dirname + '/public/js',
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
			}
		]
	}
}