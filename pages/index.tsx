import { InferGetStaticPropsType } from 'next';
import { getServerPageProductsGetForChannel } from '../generated/page';

const IndexPage = ({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<ul>
			{products?.edges.map((p) => (
				<li key={p.node.id}>{p.node.name}</li>
			))}
		</ul>
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
	};
};
