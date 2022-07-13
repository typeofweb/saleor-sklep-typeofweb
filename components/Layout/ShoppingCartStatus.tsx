import { ShoppingCartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { useCheckout } from '../CheckoutProvider';

export const ShoppingCartStatus = () => {
	const { checkoutByToken } = useCheckout();
	const intl = useIntl();

	const productsCount = checkoutByToken.data?.checkout?.lines.reduce(
		(acc, line) => acc + line.quantity,
		0,
	);

	return (
		<div className="flex-1 flex items-center justify-end">
			<div className="flex items-center lg:ml-8">
				<div className="flow-root">
					<Link href="/bag">
						<a className="group -m-2 p-2 flex items-center">
							<ShoppingCartIcon
								className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
								aria-hidden="true"
							/>
							<span className="ml-2 w-6 text-left text-sm font-medium text-gray-700 group-hover:text-gray-800 tabular-nums">
								{productsCount}
							</span>
							<span className="sr-only">
								{intl.formatMessage(
									{
										defaultMessage: `{productsCount, plural,
	=0 {0}
	one {# item}
	other {# items}
} in cart, view bag`,
										id: 'THvAcB',
									},
									{ productsCount },
								)}
							</span>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};
