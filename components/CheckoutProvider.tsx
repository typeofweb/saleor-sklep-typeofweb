import { ReactElement } from 'react';
import { useCheckout } from '../lib/useCheckout';

interface CheckoutProviderProps {
	children: ReactElement;
}
export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
	useCheckout();

	return children;
};
