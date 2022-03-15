/** @type {import('next').NextConfig} */

const path = require('path');
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const pluginAntdLess = withAntdLess({
  modifyVars: {
    hack: `true; @import "/styles/var.less"`,
  },
  lessVarsFilePath: '/styles/antd.less',
  javascriptEnabled: true,
  webpack(config) {
    return config;
  },
});

module.exports = withPlugins([[pluginAntdLess]], {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // lessLoaderOptions: {
  //   // antd 按需引入需开启
  //   javascriptEnabled: true,
  // },
});
