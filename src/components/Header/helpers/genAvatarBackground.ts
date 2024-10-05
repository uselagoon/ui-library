const genAvatarBackground = (firstLetter: string, secondLetter: string): { color: string; luminance: number } => {
	const alphaPosition = (letter: string): number => letter.charCodeAt(0) - 64;
	const getColorIndex = (letter: string): number => Math.round(alphaPosition(letter) * 11);

	let red = getColorIndex(firstLetter) % 256;
	let green = getColorIndex(secondLetter) % 256;
	let blue = Math.round(((alphaPosition(firstLetter) + alphaPosition(secondLetter)) / 2) * 11) % 256;

	return {
		color: `rgb(${red}, ${green}, ${blue})`,
		luminance: getLuminance(red, green, blue),
	};
};

function getLuminance(r: number, g: number, b: number) {
	// normalize the RGB values to the range [0, 1]
	const a = [r, g, b].map((v) => {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});

	// calculate the luminance. reference: https://www.w3.org/WAI/GL/wiki/Relative_luminance
	return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

export default genAvatarBackground;
