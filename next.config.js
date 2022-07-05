/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	excludeDefaultMomentLocales: true,
	images: {
		domains: ['typeofweb.eu.saleor.cloud'],
		formats: ['image/avif', 'image/webp'],
	},
	rewrites: async () => [
		{
			source: '/',
			destination: '/1',
		},
	],
	experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
