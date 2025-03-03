import colors from '../_util/colors';
import { lagoonColors } from '../_util/lagoonColors';
import { UITheme } from '../typings/styled';

export const darkTheme: UITheme = {
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
			navTabs: lagoonColors.monoBackground.dark,
		},
		texts: {
			primary: colors.texts.primary.dark,
			primaryInverted: colors.texts.primary.light,
			label: '#dee2e5',
			secondary: colors.texts.secondary.dark,
			timeline: colors.texts.timeline.light,
			nav: lagoonColors.monoWhite.dark,
		},
		confirm: {
			text: '#fff',
			background: '#74715E',
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
		skeleton: {
			base: '#606060',
			highlight: '#444',
		},
	},
};

export const lightTheme: UITheme = {
	colorScheme: 'light',
	UI: {
		backgrounds: {
			primary: '#101010',
			secondary: '#fff',
			input: '#fff',
			modal: '#f2f2f2',
			dataCard: colors.darkGray,
			selection: '#e6f4ff',
			lagoonCard: colors.backgrounds.primary.light,
			lagoonCardInverted: colors.backgrounds.primary.dark,
			footer: colors.backgrounds.primary.dark,
			header: colors.header.light,
			navTabs: lagoonColors.monoBackground.light,
		},
		confirm: {
			text: '#000',
			background: lagoonColors.monoBackground.light,
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
			card: '#dadad2',
			cardInverted: '#868686',
		},
		highlights: {
			selection: '#497ffa4d',
		},
		notification: colors.backgrounds.primary.light,
		skeleton: {
			base: '#d6d6d6',
			highlight: '#f5f5f5',
		},
	},
};
