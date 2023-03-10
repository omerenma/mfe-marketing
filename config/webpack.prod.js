const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json').dependencies
const commonConfig = require('./webpack.common')

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthas].js",
		publicPath:"/marketing/latest/"
	},
	plugins: [
		new ModuleFederationPlugin({
            name: "marketing",
            filename:'remoteEntry.js',
            exposes: {
                './MarketingApp':'./src/bootstrap'
            },
            shared:packageJson
		}),
	],
};

module.exports = merge(commonConfig, prodConfig)