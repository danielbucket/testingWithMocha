const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/03_moduleThree/moduleThree.js'
	],

	module: {
		loaders: [
			{
				loader: "babel-loader",
				include: [ path.resolve(__dirname, "src") ],
				// using 'include' here instead of 'exclude'
				// specifies that ONLY the src directory is evaluated.

				test: /\jsx?/,
				query: {
					plugins: [ 'transform-runtime' ],
					presets: [ 'es2015' ]
				}
			}
		]
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	}
};