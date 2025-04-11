import { useEffect, useRef, DependencyList } from 'react';

export const useDebouncedEffect = (effect: () => void, deps: DependencyList, delay: number) => {
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(effect, delay);

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [...deps, delay]);
};
