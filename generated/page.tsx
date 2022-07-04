import * as Types from './graphql';

import * as Operations from './graphql';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '../lib/apolloClient';
export async function getServerPageProductsGetForChannel(
	options: Omit<
		Apollo.QueryOptions<Types.ProductsGetForChannelQueryVariables>,
		'query'
	>,
	ctx?: any,
) {
	const apolloClient = getApolloClient(ctx);

	const data = await apolloClient.query<Types.ProductsGetForChannelQuery>({
		...options,
		query: Operations.ProductsGetForChannelDocument,
	});

	const apolloState = apolloClient.cache.extract();

	return {
		props: {
			apolloState: apolloState,
			data: data?.data,
			error: data?.error ?? data?.errors ?? null,
		},
	};
}
export type PageProductsGetForChannelComp = React.FC<{
	data?: Types.ProductsGetForChannelQuery;
	error?: Apollo.ApolloError;
}>;
export const ssrProductsGetForChannel = {
	getServerPage: getServerPageProductsGetForChannel,
};
export async function getServerPageProductsGetTotalCountForChannel(
	options: Omit<
		Apollo.QueryOptions<Types.ProductsGetTotalCountForChannelQueryVariables>,
		'query'
	>,
	ctx?: any,
) {
	const apolloClient = getApolloClient(ctx);

	const data =
		await apolloClient.query<Types.ProductsGetTotalCountForChannelQuery>({
			...options,
			query: Operations.ProductsGetTotalCountForChannelDocument,
		});

	const apolloState = apolloClient.cache.extract();

	return {
		props: {
			apolloState: apolloState,
			data: data?.data,
			error: data?.error ?? data?.errors ?? null,
		},
	};
}
export type PageProductsGetTotalCountForChannelComp = React.FC<{
	data?: Types.ProductsGetTotalCountForChannelQuery;
	error?: Apollo.ApolloError;
}>;
export const ssrProductsGetTotalCountForChannel = {
	getServerPage: getServerPageProductsGetTotalCountForChannel,
};
