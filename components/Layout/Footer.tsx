import Link from 'next/link';
import { useRouter } from 'next/router';

export const Footer = () => {
	const { locales } = useRouter();
	return (
		<footer>
			<ul>
				{locales?.map((l) => (
					<li key={l}>
						<Link
							locale={l}
							href=""
						>
							<a>{l}</a>
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
};
