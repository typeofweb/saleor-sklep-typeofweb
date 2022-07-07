import { CheckoutList } from '../components/CheckoutList/CheckoutList';
import { CheckoutListEmpty } from '../components/CheckoutList/CheckoutListEmpty';
import { useCheckoutGetByTokenQuery } from '../generated/graphql';
import { useCheckout } from '../lib/useCheckout';

const BagPage = () => {
	const { token } = useCheckout();

	const checkoutByToken = useCheckoutGetByTokenQuery({
		skip: !token,
		variables: {
			checkoutToken: token,
		},
	});

	if (checkoutByToken.loading) {
		return <div />;
	}

	if (!checkoutByToken.data?.checkout) {
		return <CheckoutListEmpty />;
	}

	return <CheckoutList checkout={checkoutByToken.data.checkout} />;
};

export default BagPage;
