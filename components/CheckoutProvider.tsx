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

	const [tokensForCurrency, setTokensForCurrency] = useState<TokenInLs>(null);

	const {
		userCurrency: { selectedCurrency },
	} = useAllPagesContext();

	const checkoutByTokenResponse = useCheckoutGetByTokenQuery({
		skip: !tokensForCurrency?.[selectedCurrency],
		variables: {
			checkoutToken: tokensForCurrency?.[selectedCurrency],
		},
		fetchPolicy: 'no-cache',
	});

	const [createCheckout, createCheckoutResponse] =
		useCheckoutCreateForChannelMutation();

	const updateTokenForCurrency = useCallback(
		(currency: string, token: string | null) => {
			console.log('updateTokenForCurrency');
			setTokensForCurrency((prevTokens) => {
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

	useEffect(() => {
		console.log('Changing selectedCurrency');
		setState('loaded-initial-local-storage-tokens');
	}, [selectedCurrency]);

	useEffect(() => {
		if (state === 'loading-initial-local-storage-tokens') {
			setTokensForCurrency(lsGetTokens() || {});
			setState('loaded-initial-local-storage-tokens');
			return;
		}
		if (state === 'loaded-initial-local-storage-tokens') {
			if (!tokensForCurrency?.[selectedCurrency]) {
				setState('error-checkout-from-graphql');
				return;
			}
			if (checkoutByTokenResponse.loading) {
				setState('loading-checkout-from-graphql');
				return;
			}
		}
		if (state === 'loading-checkout-from-graphql') {
			if (checkoutByTokenResponse.error) {
				setState('error-checkout-from-graphql');
				return;
			}
			if (checkoutByTokenResponse.data) {
				setState('loaded-checkout-from-graphql');
				return;
			}
			return;
		}
		if (state === 'loaded-checkout-from-graphql') {
			// do nothing
			return;
		}
		if (state === 'error-checkout-from-graphql') {
			createCheckout({
				variables: {
					channel: selectedCurrency,
				},
			});
			setState('creating-checkout-graphql');
			return;
		}
		if (state === 'creating-checkout-graphql') {
			if (createCheckoutResponse.error) {
				// @todo
				return;
			}
			if (createCheckoutResponse.data) {
				updateTokenForCurrency(
					selectedCurrency,
					createCheckoutResponse.data.checkoutCreate?.checkout?.token,
				);
				setState('loading-checkout-from-graphql');
				return;
			}
			return;
		}
	}, [
		checkoutByTokenResponse.data,
		checkoutByTokenResponse.error,
		checkoutByTokenResponse.loading,
		createCheckout,
		createCheckoutResponse.data,
		createCheckoutResponse.error,
		selectedCurrency,
		state,
		tokensForCurrency,
		updateTokenForCurrency,
	]);

	return (
		<CheckoutContext.Provider
			value={{
				token: tokensForCurrency?.[selectedCurrency],
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
