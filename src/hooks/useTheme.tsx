import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
//@ts-ignore
const ThemeContext = createContext<any>(null);

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export const AppThemeProvider = ({ defaultScheme, children }: { defaultScheme?: Theme; children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		if (defaultScheme) {
			const storageTheme = localStorage.getItem('theme');
			// already previously set in browser store.
			if (storageTheme && ['light', 'dark'].includes(storageTheme)) {
				setTheme(storageTheme as Theme);
			} else {
				// try to automatically infer dark mode theme.
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					setTheme('dark');
					localStorage.setItem('theme', 'dark');
				} else {
					// default to light
					setTheme('light');
					localStorage.setItem('theme', 'light');
				}
			}
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		window.dispatchEvent(new Event('storage'));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default useTheme;
