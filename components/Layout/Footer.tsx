import Link from 'next/link';
import { useRouter } from 'next/router';
import useCookie from 'react-use-cookie';

export const Footer = () => {
	const { locales, locale } = useRouter();
	const { asPath } = useRouter();
	console.log(asPath);
	const [, setLocaleCookie] = useCookie('NEXT_LOCALE');

	const getHandleLocaleClick = (locale: string) => () => {
		setLocaleCookie(locale);
	};

	return (
		<footer>
			<ul className="flex gap-4 max-w-xs m-auto pb-4 justify-center">
				{locales?.map((l) => (
					<li
						key={l}
						className="p-0 m-0"
					>
						{locale === l ? (
							<span>{l}</span>
						) : (
							<Link
								locale={l}
								href={asPath}
							>
								<a onClick={getHandleLocaleClick(l)}>{l}</a>
							</Link>
						)}
					</li>
				))}
			</ul>
		</footer>
	);
};
