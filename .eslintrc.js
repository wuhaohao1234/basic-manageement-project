module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'commonjs': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'settings': {
		'react': {
			'version': '17.0.2'
		}
	},
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'always'
		],

		'react/react-in-jsx-scope': 'off',
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
	}
};
