const path = require('path')
const PugPlugin = require('pug-plugin')

const config = {
	entry: {
		index: './src/assets/pug/index.pug'
	},
	output: {
		path: path.resolve(__dirname, './src/dist'),
		filename: '[name].[contenthash:8].js'
	},
	devServer: {
		port: 3000,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.pug$/i,
				loader: PugPlugin.loader
			},
			{
				test: /\.(css|sass|scss)$/i,
				use: ['css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|jpeg|ico)/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/img/[name].[hash:8][ext]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext][query]'
				}
			}
		]
	},
	plugins: [
		new PugPlugin({
			pretty: true,
			extractCss: {
				filename: './src/dist/[name].[contenthash:8].css'
			}
		})
	]
}

module.exports = config
