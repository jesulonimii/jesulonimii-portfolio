/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        config.module.rules.push({
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
        },);

        return config;
    },
    reactStrictMode: true,
}

module.exports = nextConfig
