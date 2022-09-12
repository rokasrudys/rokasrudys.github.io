const debug = process.env.NODE_ENV !== 'production'

module.exports = {
	images: {
		loader: 'akamai',
		path: '',
		},
  assetPrefix: !debug ? '/' : '',
  trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		return config
	},
}
