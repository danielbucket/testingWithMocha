const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/03_moduleThree/moduleThree.js'
	],

	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: [ path.resolve(__dirname, "src") ],
				loader: "babel-loader",
				options: {
					presets: [ "es2015" ]
				}
			}
		]
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	}
};