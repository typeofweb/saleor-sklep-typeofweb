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
	const isServer = typeof window === 'undefined';

	const httpLink = createHttpLink({
		uri: process.env['NEXT_PUBLIC_GRAPHQL_URL']!,
		// @todo replace root token with NO token after everything is published
		headers: isServer
			? {
					Authorization: `Bearer ${process.env['SALEOR_ROOT_TOKEN']!}`,
			  }
			: {},
	});

	return new ApolloClient({
		connectToDevTools: !isServer,
		link: httpLink,
		cache: new InMemoryCache().restore(initialState || {}),
		ssrMode: typeof window === 'undefined',
		assumeImmutableResults: true,
	});
};
