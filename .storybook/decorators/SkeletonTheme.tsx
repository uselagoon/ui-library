import React, { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { darkTheme, lightTheme } from '../../src/styles/theme';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonConfigProvider = ({
	children,
	theme,
	baseColor,
	highlightColor,
}: {
	children: ReactNode;
	theme: 'dark' | 'light';
	baseColor?: string;
	highlightColor?: string;
}) => {
	const {
		UI: {
			skeleton: { base, highlight },
		},
	} = theme === 'dark' ? darkTheme : lightTheme;

	return (
		<SkeletonTheme baseColor={baseColor || base} highlightColor={highlightColor || highlight}>
			{children}
		</SkeletonTheme>
	);
};

export default SkeletonConfigProvider;
