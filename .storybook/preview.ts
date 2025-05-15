import type { Preview } from '@storybook/react';
import './globals.css';

const preview: Preview = {
	parameters: {
		controls: {
			controls: { expanded: true },

			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		globalTypes: {
			theme: {
				description: 'Global theme for components',
				defaultValue: 'light',
				toolbar: {
					title: 'Theme',
					icon: 'circlehollow',
					items: [
						{ value: 'light', icon: 'circlehollow', title: 'Light Theme' },
						{ value: 'dark', icon: 'circle', title: 'Dark Theme' },
						{ value: 'side-by-side', icon: 'mirror', title: 'Side by side' },
					],
					dynamicTitle: true,
				},
			},
		},
	},
};

export default preview;
