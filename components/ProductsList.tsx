import { ProductListItemFragment } from '../generated/graphql';
import Image from 'next/future/image';
import { formatMoney } from '../lib/format';
import { AddProductToCartButton } from './AddProductToCartButton';
import { Fragment } from 'react';

interface ProductsListProps {
	products: readonly ProductListItemFragment[];
}

export default function ProductsList({ products }: ProductsListProps) {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<Fragment key={product.id}>
							<a
								href={`/${product.slug}`}
								className="group"
							>
								<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
									{product.media?.[0] && (
										<Image
											src={product.media[0].url}
											alt={product.media[0].alt || ''}
											className="w-full h-full object-center object-cover group-hover:opacity-75"
										/>
									)}
								</div>
								<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
								{product.pricing?.priceRange?.start?.gross && (
									<p className="my-1 text-lg font-medium text-gray-900">
										{formatMoney(
											product.pricing.priceRange.start.gross.amount,
											product.pricing.priceRange.start.gross.currency,
										)}
									</p>
								)}
							</a>
							<AddProductToCartButton variantId={product.defaultVariant?.id}>
								Add to cart
							</AddProductToCartButton>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
}
