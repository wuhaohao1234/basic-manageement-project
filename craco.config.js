const CracoLessPlugin = require('craco-less');

// eslint-disable-next-line no-undef
module.exports = {
	webpack: {
		alias: {},
		configure: {
			output: {
				publicPath: process.env.NODE_ENV === 'development'? '/': '.'
			},
			devServer: {
				proxy: {
					'/api': 'http://localhost:3000',
				},
			},
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						// modifyVars: { '@primary-color': '#1DA57A' },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
