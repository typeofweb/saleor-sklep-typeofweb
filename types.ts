import type { GetStaticPropsContext } from 'next';
import type { ParsedUrlQuery } from 'querystring';

export type InferGetStaticPathsType<T> = T extends () => Promise<{
	paths: Array<{ params: infer R }>;
}>
	? R extends ParsedUrlQuery
		? GetStaticPropsContext<R>
		: never
	: never;

export type JSONValue =
	| null
	| string
	| number
	| boolean
	| { [x: string]: JSONValue | undefined }
	| Array<JSONValue>;
