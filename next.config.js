/** @type {import('next').NextConfig} */

const pluginOptions = {
  instrumentLog: {
    // Currently there aren't logs other than spans.
    // Enabling >= info can display span traces.
    level: "trace",
    // Emits spans along with any logs
    // Only effective if level sets higher than info.
    enableTrace: false,
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [["swc-plugin-coverage-instrument", pluginOptions]],
  },
};

module.exports = nextConfig;
