import { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import useTheme from '../hooks/useTheme';
import { darkTheme, lightTheme } from '../styles/theme';
import 'react-loading-skeleton/dist/skeleton.css';
/**
 * A global config provider for react-loading-skeleton
 *
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - The content to render within the skeleton wrapper.
 * @param {string} [props.baseColor] - The base color of the skeleton. Optional, can be overridden.
 * @param {string} [props.highlightColor] - The highlight color of the skeleton. Optional, can be overridden.
 */
const SkeletonConfigProvider = ({
	children,
	baseColor,
	highlightColor,
}: {
	children: ReactNode;
	baseColor?: string;
	highlightColor?: string;
}) => {
	const cachedTheme = localStorage.getItem('theme');
	const { theme } = useTheme();

	// use localstorage first to avoid flickers if toggling theme too quickly;
	// const currentTheme = cachedTheme ? cachedTheme : theme;

	// const {
	// 	UI: {
	// 		skeleton: { base, highlight },
	// 	},
	// } = currentTheme === 'dark' ? darkTheme : lightTheme;

	const {
		UI: {
			skeleton: { base, highlight },
		},
	} = lightTheme;

	return (
		<SkeletonTheme baseColor={baseColor || base} highlightColor={highlightColor || highlight}>
			{children}
		</SkeletonTheme>
	);
};

export default SkeletonConfigProvider;
