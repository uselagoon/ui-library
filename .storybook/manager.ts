import { addons } from '@storybook/manager-api';

import LagoonTheme from './theme';

addons.setConfig({
	theme: LagoonTheme,
	sidebar: {
		showRoots: false,
	},
});
