import { useRouter } from 'next/router';
import pl from '../locales/generated/pl.json';
import en from '../locales/generated/en.json';

export const useLocale = () => {
	const { locale } = useRouter();

	const [language] = (locale || 'pl-PL').split('-') as [string, string];

	return { messages: { pl, en }[language], locale: language };
};
