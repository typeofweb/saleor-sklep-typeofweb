import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';

export const getApolloClient = (
	_?: unknown,
	initialState?: NormalizedCacheObject,
) => {
	const httpLink = createHttpLink({
		uri: process.env['GRAPHQL_URL']!,
		headers: {
			Authorization: `Bearer ${process.env['SALEOR_ROOT_TOKEN']!}`,
		},
	});

	return new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache().restore(initialState || {}),
		ssrMode: typeof window === 'undefined',
		assumeImmutableResults: true,
	});
};
