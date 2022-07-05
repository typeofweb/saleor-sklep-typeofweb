const path = require('path');

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

const buildTscCommand = () => `tsc --noEmit -p tsconfig.json`;

module.exports = {
	'*.{ts,tsx}': [buildTscCommand],
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'*.{js,jsx,ts,tsx,md,mdx,graphql,yml,yaml,css,scss,json}': [
		'yarn prettier --write',
	],
};
