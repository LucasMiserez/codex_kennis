import { NextConfig } from "next";

// @ts-check
const withPWA = require("@ducanh2912/next-pwa").default({
  // You will get hints as you type here. You can also hover over these options
  // to get a detailed description about them!
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig: NextConfig = {};
// Your Next config is automatically typed with NextConfig!
module.exports = withPWA({ nextConfig });
