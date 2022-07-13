export const classNames = (
	...classes: (string | false | null | undefined | 0)[]
) => classes.filter(Boolean).join(' ');

export const uniqBy = <T>(
	arr: (T | null | undefined)[],
	getKey: (item: T) => string,
) => {
	const uniqMap = arr.reduce((map, item) => {
		const key =
			item === null || item === undefined
				? // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- it's legit, shame TypeScript doesn't understand that
				  (item as null | undefined)
				: getKey(item);

		if (!map.has(key)) {
			map.set(key, item);
		}

		return map;
	}, new Map<string | undefined | null, T | undefined | null>());

	return [...uniqMap.values()];
};
