import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import React, { useMemo } from 'react';
import { ThemeObject } from '../typings/styled';
import { darkTheme, lightTheme } from '../styles/theme';

interface Props {
	children: React.ReactNode;
	darkThemeProp: ThemeObject | undefined;
	lightThemeProp: ThemeObject | undefined;
}
const InternalThemeProvider = ({ children, darkThemeProp, lightThemeProp }: Props) => {
	const { theme } = useTheme();

	const CombinedWithUITheme = useMemo(
		() =>
			theme === 'light' ? Object.assign({}, lightTheme, lightThemeProp) : Object.assign({}, darkTheme, darkThemeProp),
		[theme],
	);

	if (!theme) return null;

	return (
		<ThemeProvider key={theme} theme={CombinedWithUITheme}>
			{children}
		</ThemeProvider>
	);
};

export default InternalThemeProvider;
