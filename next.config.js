/** @type {import('next').NextConfig} */

const path = require('path');
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const pluginAntdLess = withAntdLess({
  modifyVars: {
    hack: `true; @import "/styles/var.less"`,
  },
  webpack(config) {
    return config;
  },
});

module.exports = withPlugins([[pluginAntdLess]], {
  // reactStrictMode: true,
  env: {
    BASE_URL: process.env.REACT_APP_BASE_URL,
    ENV: process.env.REACT_APP_ENV,
  },
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  lessLoaderOptions: {
    // antd 按需引入需开启
    javascriptEnabled: true,
  },
});
