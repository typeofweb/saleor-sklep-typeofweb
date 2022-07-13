import { useRouter } from 'next/router';

import en from '../locales/generated/en.json';
import pl from '../locales/generated/pl.json';

import { localeToLanguageCode } from './localeToLangaugeCode';

export const useLocale = () => {
	const { locale } = useRouter();

	const { language, languageCode } = localeToLanguageCode(locale);

	return {
		messages: { pl, en }[language],
		locale: language,
		languageCode: languageCode,
	};
};
