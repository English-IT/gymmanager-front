const nextConfig = {
  reactStrictMode: false,
  ignoreDuringBuilds: false,
  ignoreBuildErrors: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
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
    ignoreDuringBuilds: false,
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
