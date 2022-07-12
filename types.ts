export type InferGetStaticPathsType<T> = T extends () => Promise<{
	paths: Array<{ params: infer R }>;
}>
	? { params?: R }
	: never;

export type JSONValue =
	| null
	| string
	| number
	| boolean
	| { [x: string]: JSONValue }
	| Array<JSONValue>;
