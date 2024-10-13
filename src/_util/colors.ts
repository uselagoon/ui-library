import { lagoonColors } from './lagoonColors';

const colors = {
	lagoonBlue: lagoonColors.lagoonBlue.light,
	buttons: {
		primary: {
			default: lagoonColors.devBlue.light,
			hover: '#4578e6bf',
			active: '#184CBC',
		},
		secondary: {
			default: '#1B8784',
			hover: '#1b8784bf',
			active: '#093C3B',
		},
	},
	backgrounds: {
		primary: {
			light: lagoonColors.monoWhite.dark,
			dark: lagoonColors.monoBackground.dark,
		},
	},
	texts: {
		primary: {
			light: lagoonColors.darkGrey.light,
			dark: lagoonColors.white.dark,
		},
		secondary: {
			light: lagoonColors.disabled.light,
			dark: lagoonColors.monoComment.dark,
		},
		timeline: {
			light: lagoonColors.monoWhite.dark,
			dark: lagoonColors.monoBackground.dark,
		},
	},
	darkGray: lagoonColors.monoBackground.dark,
	cellGray: lagoonColors.cellGrey.dark,
	lighterGray: '#282828',
	orange: lagoonColors.monoOrange.dark,
	lightOrange: lagoonColors.monoLightOrange.dark,
	blue: lagoonColors.monoBlue.dark,
	white: lagoonColors.monoWhite.dark,
	purple: lagoonColors.monoPurple.dark,
	gray: lagoonColors.monoComment.dark,
	yellow: lagoonColors.monoYellow.dark,
	pink: lagoonColors.monoPink.dark,
	green: '#A6E22E',
	green2: '#A6E22D',
	black: '#000',
	header: {
		light: '#f2f2f2',
		dark: '#0c0c0c',
	},
} as const;

Object.freeze(colors);

export default colors;
