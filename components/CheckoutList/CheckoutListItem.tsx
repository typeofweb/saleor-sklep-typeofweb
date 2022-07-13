import Image from 'next/future/image';
import { useIntl } from 'react-intl';

import { useRemoveProductFromCheckoutMutation } from '../../generated/graphql';
import { useLocale } from '../../lib/useLocale';
import { useCheckout } from '../CheckoutProvider';

import { CheckoutListItemQuantityInput } from './CheckoutListItemQuantityInput';

import type { CheckoutLineDetailsFragment } from '../../generated/graphql';

interface CheckoutListItemProps {
	checkoutLine: CheckoutLineDetailsFragment;
}

export const CheckoutListItem = ({ checkoutLine }: CheckoutListItemProps) => {
	const { token } = useCheckout();
	const [removeProductFromCheckout] = useRemoveProductFromCheckoutMutation();
	const { languageCode } = useLocale();
	const intl = useIntl();

	if (!token) {
		return <div />;
	}

	const handleRemove = () => {
		void removeProductFromCheckout({
			variables: {
				lineId: checkoutLine.id,
				checkoutToken: token,
				languageCode,
			},
		});
	};

	return (
		<li className="flex py-6 sm:py-10">
			<div className="flex-shrink-0">
				{checkoutLine.variant.product.thumbnail?.url && (
					<Image
						src={checkoutLine.variant.product.thumbnail.url}
						alt={checkoutLine.variant.product.thumbnail.alt || ''}
						width={365}
						height={365}
						className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
					/>
				)}
			</div>

			<div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
				<div>
					<div className="flex justify-between sm:grid sm:grid-cols-2">
						<div className="pr-6">
							<h3 className="text-sm">
								<a
									href={`/${checkoutLine.variant.product.slug}`}
									className="font-medium text-gray-700 hover:text-gray-800"
								>
									{checkoutLine.variant.product.translation?.name ||
										checkoutLine.variant.product.name}
								</a>
							</h3>
						</div>

						<p className="text-sm font-medium text-gray-900 text-right">
							{checkoutLine.variant.pricing?.price?.gross &&
								intl.formatNumber(
									checkoutLine.variant.pricing.price.gross.amount,
									{
										style: 'currency',
										currency: checkoutLine.variant.pricing.price.gross.currency,
									},
								)}
						</p>
					</div>

					<div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
						<CheckoutListItemQuantityInput checkoutLine={checkoutLine} />

						<button
							type="button"
							className="ml-4 text-sm font-medium text-green-600 hover:text-green-500 sm:ml-0 sm:mt-3"
							onClick={handleRemove}
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};
