/** @type {import('next').NextConfig} */

const prodMode = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !prodMode,
});

const nextConfig = withPWA({
  env: {},
});

module.exports = nextConfig;
