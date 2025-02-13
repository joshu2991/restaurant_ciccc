import { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["images.ctfassets.net"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.ctfassets.net",
            },
        ],
    },
};

export default nextConfig;
