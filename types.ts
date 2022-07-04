export type InferGetStaticPathsType<T> = T extends () => Promise<{
	paths: Array<{ params: infer R }>;
}>
	? { params?: R }
	: never;
