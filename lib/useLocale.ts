import { useRouter } from 'next/router';

import en from '../locales/generated/en.json';
import pl from '../locales/generated/pl.json';

export const useLocale = () => {
	const { locale } = useRouter();

	const language = locale?.split('-')?.[0] || 'pl';

	return { messages: { pl, en }[language], locale: language };
};
