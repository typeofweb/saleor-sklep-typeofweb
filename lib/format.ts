export const formatMoney = (
	value: number,
	currency: string,
	locale = 'pl-PL',
) => {
	return Intl.NumberFormat(locale, { style: 'currency', currency }).format(
		value,
	);
};
