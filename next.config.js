const withTM = require('next-transpile-modules')(['rc-util', 'antd', '@ant-design/icons', 'rc-pagination', 'rc-picker']);

const nextConfig = {
    reactStrictMode: false,
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    generateEtags: false,
    headers: [
        {
            source: "/:all*(js|svg|svg+xml|jpg|png|webp)",
            locale: false,
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=9999999999, must-revalidate",
                },
            ],
        },
    ],
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
};

module.exports = withTM(nextConfig);
