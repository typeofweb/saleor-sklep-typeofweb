import { ChangeEventHandler, useState } from 'react';
import {
	CheckoutLineDetailsFragment,
	useCheckoutLinesUpdateMutation,
} from '../../generated/graphql';
import { useDebouncedCallback } from '../../lib/useDebouncedCallback';
import { useEvent } from '../../lib/useEvent';
import { useCheckout } from '../CheckoutProvider';

interface CheckoutListItemQuantityInputProps {
	checkoutLine: CheckoutLineDetailsFragment;
}

export const CheckoutListItemQuantityInput = ({
	checkoutLine,
}: CheckoutListItemQuantityInputProps) => {
	const { token } = useCheckout();
	const [updateLine] = useCheckoutLinesUpdateMutation();
	const [value, setValue] = useState(String(checkoutLine.quantity || 1));

	const handleValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.currentTarget.value);
		save();
	};

	const save = useDebouncedCallback(
		useEvent(() => {
			updateLine({
				variables: {
					lines: [
						{
							variantId: checkoutLine.variant.id,
							quantity: Number.parseInt(value),
						},
					],
					checkoutToken: token,
				},
			});
		}),
		200,
	);

	return (
		<>
			<label
				htmlFor={`quantity-${checkoutLine.id}`}
				className="sr-only"
			>
				Quantity, {checkoutLine.variant.name}
			</label>
			<input
				id={`quantity-${checkoutLine.id}`}
				name={`quantity-${checkoutLine.id}`}
				value={value}
				onChange={handleValueChange}
				className="block max-w-full text-center rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
			/>
		</>
	);
};
