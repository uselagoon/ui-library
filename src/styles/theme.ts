import colors from '../_util/colors';
import { DefaultTheme } from 'styled-components';
import { lagoonColors } from '../_util/lagoonColors';

export const darkTheme: DefaultTheme = {
	colorScheme: 'dark',
	UI: {
		backgrounds: {
			primary: '#0E1117',
			secondary: '#151922',
			input: colors.backgrounds.primary.dark,
			modal: colors.backgrounds.primary.dark,
			dataCard: colors.darkGray,
			selection: colors.gray,
			lagoonCard: colors.backgrounds.primary.dark,
			lagoonCardInverted: colors.backgrounds.primary.light,
			footer: colors.backgrounds.primary.light,
			header: colors.header.dark,
		},
		texts: {
			primary: colors.texts.primary.dark,
			primaryInverted: colors.texts.primary.light,
			label: '#dee2e5',
			secondary: colors.texts.secondary.dark,
			timeline: colors.texts.timeline.light,
			nav: lagoonColors.monoWhite.dark,
		},
		borders: {
			box: '#D9D9D9',
			card: '#868686',
			cardInverted: colors.darkGray,
		},
		highlights: {
			selection: '#497ffa',
		},
		notification: colors.backgrounds.primary.dark,
	},
};

export const lightTheme: DefaultTheme = {
	colorScheme: 'light',
	UI: {
		backgrounds: {
			primary: '#101010',
			secondary: '#fff',
			input: colors.backgrounds.primary.light,
			modal: colors.backgrounds.primary.light,
			dataCard: colors.gray,
			selection: '#e6f4ff',
			lagoonCard: colors.backgrounds.primary.light,
			lagoonCardInverted: colors.backgrounds.primary.dark,
			footer: colors.backgrounds.primary.dark,
			header: colors.header.light,
		},
		texts: {
			primary: colors.texts.primary.light,
			primaryInverted: colors.texts.primary.dark,
			label: '#555',
			secondary: colors.texts.secondary.dark,
			timeline: colors.texts.timeline.dark,
			nav: lagoonColors.monoWhite.light,
		},
		borders: {
			box: '#75715E',
			card: colors.darkGray,
			cardInverted: '#868686',
		},
		highlights: {
			selection: '#497ffa4d',
		},
		notification: colors.backgrounds.primary.light,
	},
};
