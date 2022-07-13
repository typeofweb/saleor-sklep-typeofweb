import { Footer } from './Footer';
import { Header } from './Header';

import type { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className="bg-white">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
