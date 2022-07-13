import { QueryResult } from '@apollo/client';
import { invariant } from '@apollo/client/utilities/globals';
import {
	createContext,
	ReactElement,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	CheckoutDetailsFragment,
	CheckoutGetByTokenQuery,
	Exact,
	useCheckoutCreateForChannelMutation,
	useCheckoutGetByTokenQuery,
} from '../generated/graphql';
import * as ls from '../lib/localStorage';
import { useAllPagesContext } from './AllPagesContext';

type TokenInLs = Record<string, string | null> | null;
const lsGetTokens = () => ls.getItem('TOKEN') as TokenInLs;
const lsSetTokens = (token: TokenInLs) => ls.setItem('TOKEN', token);

interface CheckoutContextValue {
	token: string | undefined | null;
	checkoutByToken: QueryResult<
		CheckoutGetByTokenQuery,
		Exact<{
			checkoutToken: CheckoutDetailsFragment | undefined | null;
		}>
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
		useState<TokenInLs>(null);

	const {
		userChannel: { selectedChannel },
	} = useAllPagesContext();

	const checkoutByTokenResponse = useCheckoutGetByTokenQuery({
		skip: !tokenForChannelSlugs?.[selectedChannel.slug],
		variables: {
			checkoutToken: tokenForChannelSlugs?.[selectedChannel.slug],
		},
	});

	const [createCheckout, createCheckoutResponse] =
		useCheckoutCreateForChannelMutation();

	const updateTokenForChannelSlug = useCallback(
		(currency: string, token: string | null) => {
			setTokenForChannelSlugs((prevTokens) => {
				const newTokens = {
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
				checkoutByTokenResponse.refetch({ checkoutToken: token });
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
			createCheckout({
				variables: {
					channel: selectedChannel.slug,
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
