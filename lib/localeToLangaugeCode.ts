import { LanguageCodeEnum } from '../generated/graphql';

export const localeToLanguageCode = (locale: string | undefined) => {
	const language = locale?.split('-')?.[0] || 'pl';
	const languageUpper = language.toUpperCase();

	const languageCode =
		Object.values(LanguageCodeEnum).find((l) => l === languageUpper) ||
		LanguageCodeEnum.Pl;

	return { language, languageCode };
};
