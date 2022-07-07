import { useEffect, useRef } from 'react';

type TimerId = ReturnType<typeof setTimeout>;

export function useDebouncedCallback(callback: () => void, wait: number) {
	const timeout = useRef<TimerId>();

	function cleanup() {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
	}

	useEffect(() => cleanup, []);

	return function debouncedCallback() {
		cleanup();
		timeout.current = setTimeout(() => {
			callback();
		}, wait);
	};
}
