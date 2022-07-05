import { InferGetStaticPropsType } from 'next';
import ProductsList from '../components/ProductsList';
import { getServerPageProductsGetForChannel } from '../generated/page';

const IndexPage = ({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		products && <ProductsList products={products.edges.map((p) => p.node)} />
	);
};

export default IndexPage;

export const getStaticProps = async () => {
	const res = await getServerPageProductsGetForChannel({
		variables: { channel: 'pl', first: 10 },
	});

	const { products } = res.props.data;

	if (!products) {
		return { props: {}, notFound: true };
	}

	return {
		props: {
			products,
		},
		revalidate: 60,
	};
};
