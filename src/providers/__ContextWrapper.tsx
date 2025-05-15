import { AppThemeProvider } from '../hooks/useTheme';

import React from 'react';

import SkeletonConfigProvider from './SkeletonConfigProvider';

interface Props {
	children: React.ReactNode;
	defaultScheme?: 'dark' | 'light';
}
const UIThemeProvider = ({ children, defaultScheme }: Props) => {
	return (
		<AppThemeProvider defaultScheme={defaultScheme || undefined}>
			<SkeletonConfigProvider>{children}</SkeletonConfigProvider>
		</AppThemeProvider>
	);
};

export default UIThemeProvider;
