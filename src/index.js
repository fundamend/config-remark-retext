import retext from 'remark-retext';
import retextPreset from '@fundamend/config-retext';

const plugins = [[retext, retextPreset]];
const settings = {};

export default {
	plugins: plugins,
	settings: settings
};
