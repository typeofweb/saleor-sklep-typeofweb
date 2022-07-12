import * as ls from './localStorage';
import { useState, useEffect, useCallback } from 'react';
import {
	useCheckoutCreateForChannelMutation,
	useCheckoutGetByTokenQuery,
} from '../generated/graphql';
import { useAllPagesContext } from '../components/AllPagesContext';
import { JSONValue } from '../types';

type TokenInLs = Record<string, string | null> | null;

const lsGetToken = () => ls.getItem('TOKEN') as TokenInLs;
const lsSetToken = (token: TokenInLs) =>
	ls.setItem('TOKEN', token as JSONValue);

export const useCheckout = () => {
	const [tokenForCurrency, setTokenForCurrency] = useState<TokenInLs>(null);

	const updateTokenForCurrency = useCallback(
		(currency: string, token: string | null) => {
			setTokenForCurrency({
				...(tokenForCurrency || {}),
				[currency]: token,
			});
		},
		[tokenForCurrency],
	);

	const [createCheckout] = useCheckoutCreateForChannelMutation();
	const {
		userCurrency: { selectedCurrency },
	} = useAllPagesContext();

	const checkoutByToken = useCheckoutGetByTokenQuery({
		skip: !tokenForCurrency?.[selectedCurrency],
		variables: {
			checkoutToken: tokenForCurrency?.[selectedCurrency],
		},
		fetchPolicy: 'no-cache',
	});

	// @todo there's a bug somewhere and tokens get deleted
	console.log(checkoutByToken.data?.checkout);

	useEffect(() => {
		if (tokenForCurrency) {
			lsSetToken(tokenForCurrency);
		}
	}, [tokenForCurrency]);

	useEffect(() => {
		if (tokenForCurrency?.[selectedCurrency]) {
			// handle invalid / expired / checked-out
			if (checkoutByToken.loading) {
				return;
			}
			if (checkoutByToken.error) {
				console.error(checkoutByToken.error);
				return;
			}
			if (!checkoutByToken.data?.checkout) {
				const existingLs = lsGetToken() || {};
				const newLs = Object.fromEntries(
					Object.entries(existingLs).filter(
						([, v]) => v === tokenForCurrency[selectedCurrency],
					),
				);
				lsSetToken(newLs);
				updateTokenForCurrency(selectedCurrency, null);
			}
			return;
		}
		const savedToken = lsGetToken()?.[selectedCurrency];

		if (savedToken) {
			updateTokenForCurrency(selectedCurrency, savedToken);
			return;
		}

		createCheckout({
			variables: {
				channel: selectedCurrency,
			},
		}).then((res) => {
			const responseToken = res.data?.checkoutCreate?.checkout?.token;

			if (typeof responseToken === 'string') {
				updateTokenForCurrency(selectedCurrency, responseToken);
			}
		});
	}, [
		checkoutByToken.data?.checkout,
		checkoutByToken.error,
		checkoutByToken.loading,
		createCheckout,
		selectedCurrency,
		tokenForCurrency,
		updateTokenForCurrency,
	]);

	return { token: tokenForCurrency?.[selectedCurrency], checkoutByToken };
};
