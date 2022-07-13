const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

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
	i18n: {
		defaultLocale: 'pl',
		locales: ['pl', 'en'],
	},
	experimental: {
		runtime: 'experimental-edge',
		images: { allowFutureImage: true },
	},
};

module.exports = withBundleAnalyzer(nextConfig);
