import { useAllPagesContext } from '../components/AllPagesContext';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { useProductsGetForChannelQuery } from '../generated/graphql';
import { getServerPageProductsGetForChannel } from '../generated/page';
import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';
import { localeToLanguageCode } from '../lib/localeToLangaugeCode';
import { useLocale } from '../lib/useLocale';

import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

const IndexPage = ({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const {
		userChannel: { selectedChannel },
	} = useAllPagesContext();
	const { languageCode } = useLocale();

	const { data, loading } = useProductsGetForChannelQuery({
		variables: {
			channel: selectedChannel.slug,
			first: 10,
			languageCode,
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

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
	const { languageCode } = localeToLanguageCode(
		ctx.locale || ctx.defaultLocale,
	);

	const productsGetForChannelRes = await getServerPageProductsGetForChannel({
		variables: { channel: 'pl', first: 10, languageCode },
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

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};
