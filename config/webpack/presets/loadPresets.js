const {merge} = require('webpack-merge')

module.exports = env => {
	if (env && env.presets) {
		const mergedPresets = [].concat(...[env.presets])
		const mergedConfigs = mergedPresets.map(presetName =>
			require(`./webpack.${presetName}`)(),
		)

		return merge({}, ...mergedConfigs)
	}

	return {}
}
