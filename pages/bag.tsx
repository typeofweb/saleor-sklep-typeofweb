import { CheckoutList } from '../components/CheckoutList/CheckoutList';
import { useCheckout } from '../components/CheckoutProvider';
import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';

const BagPage = () => {
	const { checkoutByToken } = useCheckout();

	if (checkoutByToken.loading) {
		return <div />;
	}

	return <CheckoutList checkout={checkoutByToken.data?.checkout} />;
};

export default BagPage;

export const getStaticProps = async () => {
	const pagesCtx = await getServerAllPagesCtx();
	return {
		props: {
			pagesCtx,
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
