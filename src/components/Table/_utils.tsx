export const formatEnvType = (type: string) => {
	let formatted;
	if (type === 'pullrequest') {
		formatted = 'PR';
	} else {
		formatted = type;
	}
	return String(formatted).charAt(0).toUpperCase() + String(formatted).slice(1);
};
