import 'styled-components';

export interface ThemeObject {
	[key: string]: string | ThemeObject;
}
export interface UITheme {
	colorScheme: 'dark' | 'light';
	UI: {
		backgrounds: {
			primary: string;
			secondary: string;
			input: string;
			modal: string;
			dataCard: string;
			selection: string;
			lagoonCard: string;
			lagoonCardInverted: string;
			footer: string;
			header: string;
		};
		texts: {
			primary: string;
			primaryInverted: string;
			label: string;
			secondary: string;
			timeline: string;
			nav: string;
		};
		highlights: {
			selection: string;
		};
		borders: {
			box: string;
			card: string;
			cardInverted: string;
		};
		notification: string;
	};
}

declare module 'styled-components' {
	export interface DefaultTheme extends UITheme {}
}
