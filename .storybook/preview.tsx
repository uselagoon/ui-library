import type { Preview } from '@storybook/react';

import '../src/index.css';

import React from 'react';
import withNextLink from './decorators/withNextLink';
import ThemeProvider from '../src/providers/ThemeProvider';

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
	decorators: [
		withNextLink,
		(Story) => (
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;
