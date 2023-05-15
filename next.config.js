/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
		domains: [
			'images.unsplash.com',
			'wembleypark.com',
			'source.unsplash.com',
		],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
};

module.exports = nextConfig;
