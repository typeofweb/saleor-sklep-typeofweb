import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { invariant } from '@apollo/client/utilities/globals';

import type { NormalizedCacheObject } from '@apollo/client';

export const getApolloClient = (
	_?: unknown,
	initialState?: NormalizedCacheObject,
) => {
	const isServer = typeof window === 'undefined';
	const uri = process.env['NEXT_PUBLIC_GRAPHQL_URL'];
	invariant(uri, `Missing NEXT_PUBLIC_GRAPHQL_URL!`);

	const httpLink = createHttpLink({
		uri,
		// @todo replace root token with NO token after everything is published
		headers: isServer
			? {
					Authorization: `Bearer ${process.env['SALEOR_ROOT_TOKEN']}`,
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
