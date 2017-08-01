var path = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/client.js',
  output: {
  	path: path.join(__dirname, '/src/public/assets'),
    filename: 'bundle.js'
  },

  resolve: {
  	modules: ['node_modules'],
	extensions: ['.js'] 
  },

  resolveLoader: {
		modules: ['node_modules'],
		moduleExtensions: ['-loader'],
		extensions: ['.js']
	},

  module: {
  	loaders: [
  		{ test: /\.js$/, loaders: 'babel-loader' },
  		{ test: /\.css$/, 
  			loader: 'style-loader!css-loader' },
  			//loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')},
  		{ test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, loader: 'file-loader' }
  	]

  }
}