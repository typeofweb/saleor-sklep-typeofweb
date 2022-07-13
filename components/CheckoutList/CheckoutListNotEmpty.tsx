import { invariant } from '@apollo/client/utilities/globals';
import Link from 'next/link';

import { formatMoney } from '../../lib/format';

import { CheckoutListItem } from './CheckoutListItem';

import type { CheckoutDetailsFragment } from '../../generated/graphql';

interface CheckoutListNotEmptyProps {
	checkout: CheckoutDetailsFragment;
}

const checkoutUrl = process.env['NEXT_PUBLIC_CHECKOUT_URL'];

export function CheckoutListNotEmpty({ checkout }: CheckoutListNotEmptyProps) {
	invariant(checkoutUrl, `Missing NEXT_PUBLIC_CHECKOUT_URL!`);

	return (
		<form className="mt-12">
			<div>
				<h2 className="sr-only">Items in your shopping cart</h2>

				<ul
					role="list"
					className="border-t border-b border-gray-200 divide-y divide-gray-200"
				>
					{checkout.lines.map((checkoutLine) => (
						<CheckoutListItem
							key={checkoutLine.id}
							checkoutLine={checkoutLine}
						/>
					))}
				</ul>
			</div>

			{/* Order summary */}
			<div className="mt-10 sm:ml-32 sm:pl-6">
				<div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
					<h2 className="sr-only">Order summary</h2>

					<div className="flow-root">
						<dl className="-my-4 text-sm divide-y divide-gray-200">
							<div className="py-4 flex items-center justify-between">
								<dt className="text-gray-600">Subtotal</dt>
								<dd className="font-medium text-gray-900">
									{formatMoney(
										checkout.totalPrice.gross.amount,
										checkout.totalPrice.gross.currency,
									)}
								</dd>
							</div>
							{/* @todo add shipping costs */}
							{/* <div className="py-4 flex items-center justify-between">
										<dt className="text-gray-600">Shipping</dt>
										<dd className="font-medium text-gray-900">$5.00</dd>
									</div>
									<div className="py-4 flex items-center justify-between">
										<dt className="text-gray-600">Tax</dt>
										<dd className="font-medium text-gray-900">$8.32</dd>
									</div> */}
							<div className="py-4 flex items-center justify-between">
								<dt className="text-base font-medium text-gray-900">
									Order total
								</dt>
								<dd className="text-base font-medium text-gray-900">
									{formatMoney(
										checkout.totalPrice.gross.amount,
										checkout.totalPrice.gross.currency,
									)}
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div className="mt-10">
					<a
						className="block w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
						href={`${checkoutUrl}?checkout=${checkout.id}`}
					>
						Checkout
					</a>
				</div>

				<div className="mt-6 text-sm text-center text-gray-500">
					<p>
						or{' '}
						<Link href="/">
							<a className="text-green-600 font-medium hover:text-green-500">
								Continue Shopping<span aria-hidden="true"> &rarr;</span>
							</a>
						</Link>
					</p>
				</div>
			</div>
		</form>
	);
}
