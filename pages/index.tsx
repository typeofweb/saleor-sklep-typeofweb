import { InferGetStaticPropsType } from 'next';
import { useAllPagesContext } from '../components/AllPagesContext';
import ProductsList from '../components/ProductsList/ProductsList';
import { useProductsGetForChannelQuery } from '../generated/graphql';
import { getServerPageProductsGetForChannel } from '../generated/page';
import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';

const IndexPage = ({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const {
		userCurrency: { selectedCurrency },
	} = useAllPagesContext();

	const { data, loading } = useProductsGetForChannelQuery({
		variables: {
			channel: selectedCurrency,
			first: 10,
		},
		fetchPolicy: 'cache-and-network',
	});

	const p = data?.products || products;

	return (
		p && (
			<ProductsList
				loading={loading}
				products={p.edges.map((p) => p.node)}
			/>
		)
	);
};

export default IndexPage;

export const getStaticProps = async () => {
	const productsGetForChannelRes = await getServerPageProductsGetForChannel({
		variables: { channel: 'pl', first: 10 },
	});
	const {
		data: { products },
		apolloState,
	} = productsGetForChannelRes.props;

	const pagesCtx = await getServerAllPagesCtx();

	if (!products) {
		return { props: { pagesCtx }, notFound: true };
	}

	return {
		props: {
			products,
			pagesCtx,
			apolloState,
		},
		revalidate: 60,
	};
};
