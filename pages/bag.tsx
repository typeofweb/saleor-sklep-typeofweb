import { CheckoutList } from '../components/CheckoutList/CheckoutList';
import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';
import { useCheckout } from '../lib/useCheckout';

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
