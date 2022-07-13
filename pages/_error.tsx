import Error from 'next/error';

import { getServerAllPagesCtx } from '../lib/getServerAllPagesCtx';

interface ErrorPageProps {
	statusCode: number;
}
const ErrorPage = ({ statusCode }: ErrorPageProps) => {
	return <Error statusCode={statusCode} />;
};
export default ErrorPage;

export const getStaticProps = async () => {
	const pagesCtx = await getServerAllPagesCtx();
	return {
		props: {
			pagesCtx,
		},
		revalidate: 60,
	};
};
