import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';

import { getApolloClient } from '../lib/apolloClient';
import { useRef } from 'react';
import { Layout } from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useRef(getApolloClient());

	return (
		<ApolloProvider client={apolloClient.current!}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
