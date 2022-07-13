import { ProductListItemFragment } from '../../generated/graphql';
import Image from 'next/future/image';
import { formatMoney } from '../../lib/format';
import { AddProductToCartButton } from '../AddProductToCartButton';

interface ProductsListItemProps {
	product: ProductListItemFragment;
}

export const ProductsListItem = ({ product }: ProductsListItemProps) => {
	return (
		<div>
			<a
				href={`/${product.slug}`}
				className="group"
			>
				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					{product.media?.[0] && (
						<Image
							src={product.media[0].url}
							alt={product.media[0].alt || ''}
							priority={true}
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
		</div>
	);
};
