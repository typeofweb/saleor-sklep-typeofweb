import { ReactNode } from 'react';
import { useCheckoutAddToCartMutation } from '../generated/graphql';
import { useCheckout } from '../lib/useCheckout';

interface AddProductToCartButtonProps {
	onClick?: () => void;
	variantId: string | undefined | null;
	children: ReactNode;
}

export const AddProductToCartButton = ({
	children,
	onClick,
	variantId,
}: AddProductToCartButtonProps) => {
	const [addToCart] = useCheckoutAddToCartMutation();
	const { token } = useCheckout();

	const handleBuy = async () => {
		if (!token || !variantId) {
			return;
		}

		const result = await addToCart({
			variables: { checkoutToken: token, variantId },
		});

		if (result.errors?.length) {
			// @todo display this somehow
			console.warn(result.errors);
			return;
		}
		if (result.data?.checkoutLinesAdd?.errors?.length) {
			// @todo display this somehow
			console.warn(result.data?.checkoutLinesAdd?.errors);
			return;
		}

		onClick?.();
	};
	return (
		<button
			type="button"
			className="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
			onClick={handleBuy}
		>
			{children}
		</button>
	);
};
