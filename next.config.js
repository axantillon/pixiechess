/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'ipfs.io'],
    },
    webpack: (config) => {
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    },
}

module.exports = nextConfig
