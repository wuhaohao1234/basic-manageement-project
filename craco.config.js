const CracoLessPlugin = require('craco-less');
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
	webpack: {
		alias: {
			'@services': path.resolve(__dirname, 'src/services'),
			'@comps': path.resolve(__dirname, 'src/components'),
		},
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
