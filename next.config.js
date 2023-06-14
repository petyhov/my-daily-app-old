/** @type {import('next').NextConfig} */

const prodMode = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !prodMode,
});

const nextConfig = withPWA({
  env: {
    DB_NAME: prodMode ? 'my-daily-app' : 'my-daily-app-test',
    BUILD_TYPE: process.env.DEV_BUILD,
  },
});

module.exports = nextConfig;
