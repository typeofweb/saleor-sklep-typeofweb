import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';

import { getApolloClient } from '../lib/apolloClient';
import { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { CheckoutProvider } from '../components/CheckoutProvider';
import { AllPagesContextProvider } from '../components/AllPagesContext';
import { GetServerAllPagesCtx } from '../lib/getServerAllPagesCtx';
import { invariant } from '@apollo/client/utilities/globals';

type MyAppProps = Omit<AppProps, 'pageProps'> & {
	pageProps: {
		apolloState?: NormalizedCacheObject;
		pagesCtx?: GetServerAllPagesCtx;
		[x: string]: unknown;
	};
};
export default function MyApp({
	Component,
	pageProps: { pagesCtx, apolloState, ...pageProps },
}: MyAppProps) {
	const [apolloClient] = useState(() => getApolloClient({}, apolloState));

	invariant(pagesCtx, `Missing pagesCtx!`);

	return (
		<AllPagesContextProvider allPagesCtx={pagesCtx}>
			<ApolloProvider client={apolloClient}>
				<CheckoutProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CheckoutProvider>
			</ApolloProvider>
		</AllPagesContextProvider>
	);
}
