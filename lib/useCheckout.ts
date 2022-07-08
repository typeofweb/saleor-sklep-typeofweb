import * as ls from './localStorage';
import { useState, useEffect } from 'react';
import {
	useCheckoutCreateForChannelMutation,
	useCheckoutGetByTokenQuery,
} from '../generated/graphql';

export const useCheckout = () => {
	const [token, setToken] = useState<string | null>(null);
	const [createCheckout] = useCheckoutCreateForChannelMutation();
	const checkoutByToken = useCheckoutGetByTokenQuery({
		skip: !token,
		variables: {
			checkoutToken: token,
		},
	});

	useEffect(() => {
		if (token) {
			ls.setItem('TOKEN', token);
		}
	}, [token]);

	useEffect(() => {
		if (token) {
			// handle invalid / expired / checked-out
			if (checkoutByToken.loading) {
				return;
			}
			if (checkoutByToken.error) {
				console.error(checkoutByToken.error);
				return;
			}
			if (!checkoutByToken.data) {
				ls.setItem('TOKEN', '');
				setToken(null);
			}
			return;
		}
		const savedToken = ls.getItem('TOKEN');

		if (savedToken) {
			setToken(savedToken);
			return;
		}

		createCheckout({
			variables: {
				channel: 'pl',
			},
		}).then((res) => {
			const responseToken = res.data?.checkoutCreate?.checkout?.token;

			if (typeof responseToken === 'string') {
				setToken(responseToken);
			}
		});
	}, [
		checkoutByToken.data,
		checkoutByToken.error,
		checkoutByToken.loading,
		createCheckout,
		token,
	]);

	return { token };
};
