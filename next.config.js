/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	rewrites: async () => [
		{
			source: '/',
			destination: '/1',
		},
	],
};

module.exports = nextConfig;
