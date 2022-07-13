import type { JSONValue } from '../types';

export const getItem = (name: string): JSONValue | null => {
	try {
		const item = localStorage.getItem(name);
		return item ? JSON.parse(item) : null;
	} catch (err) {
		console.error(err);
		try {
			localStorage.removeItem(name);
		} catch {}
		return null;
	}
};

export const setItem = (name: string, value: JSONValue | null) => {
	try {
		localStorage.setItem(name, JSON.stringify(value));
	} catch (err) {
		console.error(err);
		try {
			localStorage.removeItem(name);
		} catch {}
	}
};
