import Error from 'next/error';

import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';

const Page404 = () => {
	return <Error statusCode={404} />;
};
export default Page404;

export const getStaticProps = async () => {
	const pagesCtx = await getServerAllPagesCtx();
	return {
		props: {
			pagesCtx,
		},
		revalidate: 60,
	};
};
