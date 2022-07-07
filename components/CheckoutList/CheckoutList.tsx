import { CheckoutDetailsFragment } from '../../generated/graphql';
import { CheckoutListEmpty } from './CheckoutListEmpty';
import { CheckoutListNotEmpty } from './CheckoutListNotEmpty';

interface CheckoutListProps {
	checkout: CheckoutDetailsFragment | undefined | null;
}

export const CheckoutList = ({ checkout }: CheckoutListProps) => {
	const inner = checkout?.lines.length ? (
		<CheckoutListNotEmpty checkout={checkout} />
	) : (
		<CheckoutListEmpty />
	);

	return (
		<div className="bg-white">
			<div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
					Shopping Cart
				</h1>
				{inner}
			</div>
		</div>
	);
};
