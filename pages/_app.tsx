import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { invariant } from '@apollo/client/utilities/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { AllPagesContextProvider } from '../components/AllPagesContext';
import { CheckoutProvider } from '../components/CheckoutProvider';
import { Layout } from '../components/Layout/Layout';
import { getApolloClient } from '../lib/apolloClient';
import { useLocale } from '../lib/useLocale';

import type { GetServerAllPagesCtx } from '../lib/getServerAllPagesCtx';
import type { NormalizedCacheObject } from '@apollo/client';
import type { AppProps } from 'next/app';

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
	const { locale, messages } = useLocale();
	const router = useRouter();

	invariant(pagesCtx, `Missing pagesCtx! ${router.pathname}`);

	return (
		<AllPagesContextProvider allPagesCtx={pagesCtx}>
			<ApolloProvider client={apolloClient}>
				<IntlProvider
					locale={locale}
					messages={messages}
					onError={() => {}}
				>
					<CheckoutProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CheckoutProvider>
				</IntlProvider>
			</ApolloProvider>
		</AllPagesContextProvider>
	);
}
