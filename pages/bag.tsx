import { CheckoutList } from '../components/CheckoutList';
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

	if (!checkoutByToken.data?.checkout) {
		return <div />;
	}

	return <CheckoutList checkout={checkoutByToken.data.checkout} />;
};

export default BagPage;
