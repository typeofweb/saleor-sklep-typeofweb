import { ProductDetails } from '../components/ProductDetails';
import {
	getServerPageGetProductDetails,
	getServerPageProductsSlugs,
} from '../generated/page';
import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';
import { parseEditorJsToHtml } from '../lib/parseEditorJs';

import type { InferGetStaticPathsType } from '../types';
import type { InferGetStaticPropsType } from 'next';

const ProductSlugPage = ({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return product && <ProductDetails product={product} />;
};
export default ProductSlugPage;

export const getStaticPaths = async () => {
	const res = await getServerPageProductsSlugs({
		variables: { channel: 'pl' },
	});

	const { products } = res.props.data;

	if (!products) {
		return { paths: [] };
	}

	return {
		paths: products.edges.map((p) => ({
			params: {
				productSlug: p.node.slug,
			},
			// locale?: 'pl'
		})),
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({
	params,
}: InferGetStaticPathsType<typeof getStaticPaths>) => {
	if (!params) {
		return { props: {}, notFound: true };
	}
	const productDetailsRes = await getServerPageGetProductDetails({
		variables: {
			slug: params.productSlug,
		},
	});
	const { product } = productDetailsRes.props.data;

	const pagesCtx = await getServerAllPagesCtx();

	if (!product) {
		return { props: { pagesCtx }, notFound: true };
	}

	const productWithParsedDescription = {
		...product,
		description: product.description
			? parseEditorJsToHtml(product.description)
			: null,
	};

	return {
		props: { product: productWithParsedDescription, pagesCtx },
	};
};
