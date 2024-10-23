import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Decorator } from '@storybook/react';

import GlobalStyles from '../../src/providers/GlobalStyles';

import { LinkProvider } from '../../src/providers/NextLinkProvider';

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

	// consumers of the library pass in actual React/Next.js links
	const FakeLink = function ({ children }) {
		return <a>{children}</a>;
	};
	switch (theme) {
		case 'side-by-side': {
			return (
				<>
					<ThemeProvider theme={lightTheme}>
						<GlobalStyles />
						<LinkProvider linkComponent={FakeLink as any}>
							<ThemeBlock left>
								<StoryFn />
							</ThemeBlock>
						</LinkProvider>
					</ThemeProvider>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyles />
						<LinkProvider linkComponent={FakeLink as any}>
							<ThemeBlock>
								<StoryFn />
							</ThemeBlock>
						</LinkProvider>
					</ThemeProvider>
				</>
			);
		}
		default: {
			return (
				<ThemeProvider theme={themeToUse}>
					<GlobalStyles />
					<LinkProvider linkComponent={FakeLink as any}>
						<ThemeBlock fill theme={themeToUse}>
							<StoryFn />
						</ThemeBlock>
					</LinkProvider>
				</ThemeProvider>
			);
		}
	}
};
export default withTheme;
