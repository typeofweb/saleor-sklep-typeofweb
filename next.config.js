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
	i18n: {
		defaultLocale: 'pl',
		locales: ['pl', 'en'],
	},
	experimental: { images: { allowFutureImage: true } },
};

module.exports = withBundleAnalyzer(nextConfig);
