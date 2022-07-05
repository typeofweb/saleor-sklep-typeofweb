import { JSONValue } from '../types';

export const getItem = (name: string) => {
	try {
		const item = localStorage.getItem(name);
		return item ? JSON.parse(item) : null;
	} catch (err) {
		console.error(err);
		localStorage.removeItem(name);
		return null;
	}
};

// @todo replace any
export const setItem = (name: string, value: JSONValue) => {
	try {
		localStorage.setItem(name, JSON.stringify(value));
	} catch (err) {
		console.error(err);
		localStorage.removeItem(name);
	}
};
