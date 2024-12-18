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
			setTheme(defaultScheme);
			return;
		}
		const storageTheme = localStorage.getItem('theme');
		// already previously set in browser store.
		if (storageTheme && ['light', 'dark'].includes(storageTheme)) {
			setTheme(storageTheme as Theme);
		} else {
			// default to dark if not overriden in provider or is a first time visitor
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
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
