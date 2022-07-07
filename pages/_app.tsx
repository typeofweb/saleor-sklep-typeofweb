import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';

import { getApolloClient } from '../lib/apolloClient';
import { useRef } from 'react';
import { Layout } from '../components/Layout/Layout';
import { CheckoutProvider } from '../components/CheckoutProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useRef(getApolloClient());

	return (
		<ApolloProvider client={apolloClient.current!}>
			<CheckoutProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CheckoutProvider>
		</ApolloProvider>
	);
}
