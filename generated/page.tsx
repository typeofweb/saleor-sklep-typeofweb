import * as Types from './graphql';

import * as Operations from './graphql';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '../lib/apolloClient';
export async function getServerPageChannelsGet(
	options: Omit<Apollo.QueryOptions<Types.ChannelsGetQueryVariables>, 'query'>,
	ctx?: any,
) {
	const apolloClient = getApolloClient(ctx);

	const data = await apolloClient.query<Types.ChannelsGetQuery>({
		...options,
		query: Operations.ChannelsGetDocument,
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
export type PageChannelsGetComp = React.FC<{
	data?: Types.ChannelsGetQuery;
	error?: Apollo.ApolloError;
}>;
export const ssrChannelsGet = {
	getServerPage: getServerPageChannelsGet,
};

export async function getServerPageCheckoutGetByToken(
	options: Omit<
		Apollo.QueryOptions<Types.CheckoutGetByTokenQueryVariables>,
		'query'
	>,
	ctx?: any,
) {
	const apolloClient = getApolloClient(ctx);

	const data = await apolloClient.query<Types.CheckoutGetByTokenQuery>({
		...options,
		query: Operations.CheckoutGetByTokenDocument,
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
export type PageCheckoutGetByTokenComp = React.FC<{
	data?: Types.CheckoutGetByTokenQuery;
	error?: Apollo.ApolloError;
}>;
export const ssrCheckoutGetByToken = {
	getServerPage: getServerPageCheckoutGetByToken,
};

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
export async function getServerPageGetProductDetails(
	options: Omit<
		Apollo.QueryOptions<Types.GetProductDetailsQueryVariables>,
		'query'
	>,
	ctx?: any,
) {
	const apolloClient = getApolloClient(ctx);

	const data = await apolloClient.query<Types.GetProductDetailsQuery>({
		...options,
		query: Operations.GetProductDetailsDocument,
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
export type PageGetProductDetailsComp = React.FC<{
	data?: Types.GetProductDetailsQuery;
	error?: Apollo.ApolloError;
}>;
export const ssrGetProductDetails = {
	getServerPage: getServerPageGetProductDetails,
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
export async function getServerPageProductsSlugs(
	options: Omit<
		Apollo.QueryOptions<Types.ProductsSlugsQueryVariables>,
		'query'
	>,
	ctx?: any,
) {
	const apolloClient = getApolloClient(ctx);

	const data = await apolloClient.query<Types.ProductsSlugsQuery>({
		...options,
		query: Operations.ProductsSlugsDocument,
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
export type PageProductsSlugsComp = React.FC<{
	data?: Types.ProductsSlugsQuery;
	error?: Apollo.ApolloError;
}>;
export const ssrProductsSlugs = {
	getServerPage: getServerPageProductsSlugs,
};
