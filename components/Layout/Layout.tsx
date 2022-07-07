import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className="bg-white">
			<Header />
			<main>{children}</main>
		</div>
	);
}
