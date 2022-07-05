import { CheckoutDetailsFragment } from '../generated/graphql';
import { formatMoney } from '../lib/format';
import Image from 'next/future/image';

interface CheckoutListProps {
	checkout: CheckoutDetailsFragment;
}
export function CheckoutList({ checkout }: CheckoutListProps) {
	return (
		<div className="bg-white">
			<div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
					Shopping Cart
				</h1>

				<form className="mt-12">
					<div>
						<h2 className="sr-only">Items in your shopping cart</h2>

						<ul
							role="list"
							className="border-t border-b border-gray-200 divide-y divide-gray-200"
						>
							{checkout.lines.map((product) => (
								<li
									key={product.id}
									className="flex py-6 sm:py-10"
								>
									<div className="flex-shrink-0">
										{product.variant.product.thumbnail?.url && (
											<Image
												src={product.variant.product.thumbnail.url}
												alt={product.variant.product.thumbnail.alt || ''}
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
															href={`/${product.variant.product.slug}`}
															className="font-medium text-gray-700 hover:text-gray-800"
														>
															{product.variant.product.name}
														</a>
													</h3>
												</div>

												<p className="text-sm font-medium text-gray-900 text-right">
													{product.variant.pricing?.price?.gross &&
														formatMoney(
															product.variant.pricing.price.gross.amount,
															product.variant.pricing.price.gross.currency,
														)}
												</p>
											</div>

											<div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
												<label
													htmlFor={`quantity-${product.id}`}
													className="sr-only"
												>
													Quantity, {product.variant.name}
												</label>
												<input
													id={`quantity-${product.id}`}
													name={`quantity-${product.id}`}
													value={product.quantity}
													readOnly
													className="block max-w-full text-center rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												/>

												{/* @todo support removing from cart */}
												<button
													type="button"
													className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
												>
													Remove
												</button>
											</div>
										</div>
									</div>
								</li>
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
							<button
								type="submit"
								className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
							>
								Checkout
							</button>
						</div>

						<div className="mt-6 text-sm text-center text-gray-500">
							<p>
								or{' '}
								<a
									href="#"
									className="text-indigo-600 font-medium hover:text-indigo-500"
								>
									Continue Shopping<span aria-hidden="true"> &rarr;</span>
								</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
