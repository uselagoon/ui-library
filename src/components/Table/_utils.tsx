export const formatEnvType = (type: string) => {
	let formatted;
	if (type === 'pullrequest') {
		formatted = 'PR';
	} else {
		formatted = type;
	}
	return String(formatted).charAt(0).toUpperCase() + String(formatted).slice(1);
};

export const debounce = (fn: (params: any) => void, delay: number) => {
	let timeoutId: NodeJS.Timeout;

	return function (val: any) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn.call(null, val);
		}, delay);
	};
};

export const isValidUrl = (url: string) => {
	try {
		const parsed = new URL(url);
		const safeProtocols = ['https:', 'http:'];
		return safeProtocols.includes(parsed.protocol);
	} catch {
		return false;
	}
};
