import Link from 'next/link';
import { useRouter } from 'next/router';
import useCookie from 'react-use-cookie';

export const Footer = () => {
	const { locales } = useRouter();
	const { pathname, asPath, query } = useRouter();
	const [, setLocaleCookie] = useCookie('NEXT_LOCALE');

	const getHandleLocaleClick = (locale: string) => () => {
		console.log(locale);
		setLocaleCookie(locale);
	};

	return (
		<footer>
			<ul className="flex gap-4 max-w-xs m-auto pb-4 justify-center">
				{locales
					?.filter((l) => l !== 'default')
					.map((l) => (
						<li
							key={l}
							className="p-0 m-0"
						>
							<Link
								locale={l}
								href={{ pathname, query }}
								as={asPath}
							>
								<a onClick={getHandleLocaleClick(l)}>{l}</a>
							</Link>
						</li>
					))}
			</ul>
		</footer>
	);
};
