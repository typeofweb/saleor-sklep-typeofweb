import useCookie from 'react-use-cookie';
import { invariant } from '@apollo/client/utilities/globals';
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
} from 'react';
import { GetServerAllPagesCtx } from '../lib/getServerAllPagesCtx';

interface AllPagesContextValue {
	allPagesCtx: GetServerAllPagesCtx;
	userCurrency: {
		currencies: ReadonlyArray<{
			readonly slug: string;
			readonly currencyCode: string;
			readonly isActive: boolean;
			readonly id: string;
		}>;
		defaultCurrency: string | undefined;
		selectedCurrency: string;
		setSelectedCurrency: (value: string) => void;
	};
}
const AllPagesContext = createContext<AllPagesContextValue | null>(null);
AllPagesContext.displayName = 'AllPagesContext';

export const useAllPagesContext = () => {
	const ctx = useContext(AllPagesContext);

	invariant(ctx, `Missing AllPagesContextProvider`);

	return ctx;
};

interface AllPagesContextProviderProps {
	children: ReactNode;
	allPagesCtx: GetServerAllPagesCtx;
}
export const AllPagesContextProvider = ({
	children,
	allPagesCtx,
}: AllPagesContextProviderProps) => {
	const currencies = useMemo(
		() => allPagesCtx.channels.channels || [],
		[allPagesCtx.channels.channels],
	);
	const defaultCurrency = currencies[0]?.slug;

	const [selectedCurrency, setCookieCurrency] = useCookie(
		`CURRENCY`,
		defaultCurrency,
	);

	const setSelectedCurrency = useCallback(
		(value: string) => {
			setCookieCurrency(value, { days: 365 });
		},
		[setCookieCurrency],
	);

	useEffect(() => {
		// trigger save of the default value
		setSelectedCurrency(selectedCurrency);
		// eslint-disable-next-line react-hooks/exhaustive-deps -- trigger only once
	}, []);

	const value = useMemo(
		() => ({
			allPagesCtx,
			userCurrency: {
				currencies,
				defaultCurrency,
				selectedCurrency,
				setSelectedCurrency,
			},
		}),
		[
			allPagesCtx,
			currencies,
			defaultCurrency,
			selectedCurrency,
			setSelectedCurrency,
		],
	);

	return (
		<AllPagesContext.Provider value={value}>
			{children}
		</AllPagesContext.Provider>
	);
};
