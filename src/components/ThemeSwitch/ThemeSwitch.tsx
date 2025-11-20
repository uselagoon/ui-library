import { useTheme } from 'next-themes';
import React from 'react';
import { useSyncTheme } from '@/hooks/useSyncTheme';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitch() {
	const { setTheme, theme, systemTheme } = useTheme();

	useSyncTheme();

	const handleToggleTheme = (theme: 'light' | 'dark') => {
		setTheme(theme);
		window.dispatchEvent(new Event('storage'));
	};

	const darkSwitcher = (
		<DropdownMenuItem onClick={() => handleToggleTheme('light')}>
			<Sun className="mr-2 h-4 w-4" />
			Light
		</DropdownMenuItem>
	);

	const lightSwitcher = (
		<DropdownMenuItem onClick={() => handleToggleTheme('dark')}>
			<Moon className="mr-2 h-4 w-4" />
			Dark
		</DropdownMenuItem>
	);
	const renderThemeSwitcher = () => {
		if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')) return darkSwitcher;

		return lightSwitcher;
	};

	return <>{renderThemeSwitcher()}</>;
}