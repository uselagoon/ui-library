const genAvatarBackground = (
  firstLetter: string,
  secondLetter: string
): string => {
  const alphaPosition = (letter: string): number => letter.charCodeAt(0) - 64;
  const getColorIndex = (letter: string): number =>
    Math.round(alphaPosition(letter) * 11);

  let red = getColorIndex(firstLetter) % 256;
  let green = getColorIndex(secondLetter) % 256;
  let blue =
    Math.round(
      ((alphaPosition(firstLetter) + alphaPosition(secondLetter)) / 2) * 11
    ) % 256;

  return `rgb(${red}, ${green}, ${blue})`;
};

export default genAvatarBackground;
