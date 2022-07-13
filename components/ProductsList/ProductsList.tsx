import { ProductsListItem } from './ProductsListItem';

import type { ProductListItemFragment } from '../../generated/graphql';

interface ProductsListProps {
	loading: boolean;
	products: readonly ProductListItemFragment[];
}

export function ProductsList({ products, loading }: ProductsListProps) {
	return (
		<div
			className={`bg-white transition-opacity ${
				loading ? 'opacity-25 pointer-events-none' : ''
			}`}
		>
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<ProductsListItem
							product={product}
							key={product.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
