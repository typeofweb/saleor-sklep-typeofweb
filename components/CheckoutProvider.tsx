import { invariant } from '@apollo/client/utilities/globals';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

import {
	useCheckoutCreateForChannelMutation,
	useCheckoutGetByTokenQuery,
} from '../generated/graphql';
import * as ls from '../lib/localStorage';
import { useLocale } from '../lib/useLocale';

import { useAllPagesContext } from './AllPagesContext';

import type {
	CheckoutGetByTokenQuery,
	Exact,
	LanguageCodeEnum,
} from '../generated/graphql';
import type { QueryResult } from '@apollo/client';
import type { ReactElement } from 'react';

type ChannelToTokenInLs = Record<string, string | null | undefined> | null;
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- @todo
const lsGetTokens = () => ls.getItem('TOKEN') as ChannelToTokenInLs;
const lsSetTokens = (token: ChannelToTokenInLs) => ls.setItem('TOKEN', token);

interface CheckoutContextValue {
	token: string | undefined | null;
	checkoutByToken: QueryResult<
		CheckoutGetByTokenQuery,
		Exact<{ checkoutToken: string; languageCode: LanguageCodeEnum }>
	>;
}
const CheckoutContext = createContext<CheckoutContextValue | null>(null);

type CheckoutProviderStateMachine =
	| 'loading-initial-local-storage-tokens' // initial
	| 'loaded-initial-local-storage-tokens'
	| 'loading-checkout-from-graphql'
	| 'loaded-checkout-from-graphql'
	| 'error-checkout-from-graphql'
	| 'creating-checkout-graphql';

interface CheckoutProviderProps {
	children: ReactElement;
}
export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
	const [state, setState] = useState<CheckoutProviderStateMachine>(
		'loading-initial-local-storage-tokens',
	);

	const [tokenForChannelSlugs, setTokenForChannelSlugs] =
		useState<ChannelToTokenInLs>(null);

	const {
		userChannel: { selectedChannel },
	} = useAllPagesContext();

	const { languageCode } = useLocale();

	const checkoutByTokenResponse = useCheckoutGetByTokenQuery({
		skip: !tokenForChannelSlugs?.[selectedChannel.slug],
		variables: {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain -- query will not execute unless this is truthy
			checkoutToken: tokenForChannelSlugs?.[selectedChannel.slug]!,
			languageCode,
		},
	});

	const [createCheckout, createCheckoutResponse] =
		useCheckoutCreateForChannelMutation();

	const updateTokenForChannelSlug = useCallback(
		(currency: string, token: string | null | undefined) => {
			setTokenForChannelSlugs((prevTokens) => {
				const newTokens: ChannelToTokenInLs = {
					...(prevTokens || {}),
					[currency]: token,
				};
				lsSetTokens(newTokens);
				return newTokens;
			});
		},
		[],
	);

	const token = tokenForChannelSlugs?.[selectedChannel.slug];

	useEffect(() => {
		setState('loaded-initial-local-storage-tokens');
	}, [selectedChannel.slug]);

	useEffect(() => {
		if (state === 'loading-initial-local-storage-tokens') {
			setTokenForChannelSlugs(lsGetTokens() || {});
			return setState('loaded-initial-local-storage-tokens');
		}
		if (state === 'loaded-initial-local-storage-tokens') {
			if (!token) {
				return setState('error-checkout-from-graphql');
			}
			if (checkoutByTokenResponse.loading) {
				return setState('loading-checkout-from-graphql');
			} else {
				void checkoutByTokenResponse.refetch({ checkoutToken: token });
			}
		}
		if (state === 'loading-checkout-from-graphql') {
			if (checkoutByTokenResponse.error) {
				return setState('error-checkout-from-graphql');
			}
			if (checkoutByTokenResponse.data) {
				return setState('loaded-checkout-from-graphql');
			}
			// wait
			return;
		}
		if (state === 'loaded-checkout-from-graphql') {
			// do nothing, done
			return;
		}
		if (state === 'error-checkout-from-graphql') {
			void createCheckout({
				variables: {
					channel: selectedChannel.slug,
					languageCode,
				},
			});
			return setState('creating-checkout-graphql');
		}
		if (state === 'creating-checkout-graphql') {
			if (createCheckoutResponse.error) {
				// @todo
				return;
			}
			if (createCheckoutResponse.data) {
				updateTokenForChannelSlug(
					selectedChannel.slug,
					createCheckoutResponse.data.checkoutCreate?.checkout?.token,
				);
				return setState('loading-checkout-from-graphql');
			}
			return;
		}
	}, [
		checkoutByTokenResponse,
		createCheckout,
		createCheckoutResponse.data,
		createCheckoutResponse.error,
		languageCode,
		selectedChannel.slug,
		state,
		token,
		updateTokenForChannelSlug,
	]);

	return (
		<CheckoutContext.Provider
			value={{
				token,
				checkoutByToken: checkoutByTokenResponse,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export const useCheckout = () => {
	const ctx = useContext(CheckoutContext);
	invariant(ctx, `Missing CheckoutContext`);

	return ctx;
};
