import { useRef, useLayoutEffect, useCallback } from 'react';

export const useEvent = <Args extends unknown[]>(
	handler: (...args: Args) => void,
) => {
	const handlerRef = useRef<null | ((...args: Args) => void)>(null);

	useLayoutEffect(() => {
		handlerRef.current = handler;
	});

	return useCallback((...args: Args) => {
		return handlerRef.current?.(...args);
	}, []);
};
