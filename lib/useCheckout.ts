import * as ls from './localStorage';
import { useState, useEffect } from 'react';
import { useCheckoutCreateForChannelMutation } from '../generated/graphql';

export const useCheckout = () => {
	const [token, setToken] = useState<string | null>(null);
	const [createCheckout] = useCheckoutCreateForChannelMutation();

	useEffect(() => {
		if (token) {
			ls.setItem('TOKEN', token);
		}
	}, [token]);

	useEffect(() => {
		if (token) {
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
			const responseToken = res.data?.checkoutCreate?.checkout?.id;

			if (typeof responseToken === 'string') {
				setToken(responseToken);
			}
		});
	}, [createCheckout, token]);

	return { token };
};
