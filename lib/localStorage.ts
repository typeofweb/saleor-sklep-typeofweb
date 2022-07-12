import { JSONValue } from '../types';

export const getItem = (name: string): JSONValue | null => {
	try {
		const item = localStorage.getItem(name);
		return item ? JSON.parse(item) : null;
	} catch (err) {
		console.error(err);
		localStorage.removeItem(name);
		return null;
	}
};

export const setItem = (name: string, value: JSONValue | null) => {
	try {
		localStorage.setItem(name, JSON.stringify(value));
	} catch (err) {
		console.error(err);
		localStorage.removeItem(name);
	}
};
