import { InferGetStaticPropsType } from 'next';
import { ProductDetails } from '../components/ProductDetails';
import {
	getServerPageGetProductDetails,
	getServerPageProductsSlugs,
} from '../generated/page';
import { parseEditorJsToHtml } from '../lib/parseEditorJs';
import { InferGetStaticPathsType } from '../types';

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
	const res = await getServerPageGetProductDetails({
		variables: {
			slug: params.productSlug,
		},
	});

	const { product } = res.props.data;

	if (!product) {
		return { props: {}, notFound: true };
	}

	const productWithParsedDescription = {
		...product,
		description: product.description
			? parseEditorJsToHtml(product.description)
			: null,
	};

	return {
		props: { product: productWithParsedDescription },
	};
};
