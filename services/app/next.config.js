/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["../../shared/component"]);
const withPlugins = require("next-compose-plugins");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withTM], nextConfig);

