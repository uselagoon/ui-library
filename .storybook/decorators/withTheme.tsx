import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Decorator } from '@storybook/react';

import GlobalStyles from '../../src/providers/GlobalStyles';
import { lightTheme, darkTheme } from '../../src/styles/theme';

import styled, { css } from 'styled-components';

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
	({ left, fill, theme }) => css`
		position: absolute;
		top: 0;
		left: ${left || fill ? 0 : '50vw'};
		border-right: ${left ? '1px solid #202020' : 'none'};
		right: ${left ? '50vw' : 0};
		width: ${fill ? '100vw' : '50vw'};
		bottom: 0;
		overflow: auto;
		padding: 1rem;
		background: ${theme.colorScheme === 'dark' ? '#1f1d1d' : '#fff'};
	`,
);

const withTheme: Decorator = (StoryFn, context) => {
	const { theme } = context.globals;
	const themeToUse = theme === 'light' ? lightTheme : darkTheme;

	switch (theme) {
		case 'side-by-side': {
			return (
				<>
					<ThemeProvider theme={lightTheme}>
						<GlobalStyles />
						<ThemeBlock left>
							<StoryFn />
						</ThemeBlock>
					</ThemeProvider>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyles />
						<ThemeBlock>
							<StoryFn />
						</ThemeBlock>
					</ThemeProvider>
				</>
			);
		}
		default: {
			return (
				<ThemeProvider theme={themeToUse}>
					<GlobalStyles />
					<ThemeBlock fill theme={themeToUse}>
						<StoryFn />
					</ThemeBlock>
				</ThemeProvider>
			);
		}
	}
};
export default withTheme;
