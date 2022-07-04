import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css';
import { getApolloClient } from '../lib/apolloClient';
import { useRef } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useRef(getApolloClient());

	return (
		<ApolloProvider client={apolloClient.current!}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
