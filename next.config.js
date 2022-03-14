const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
		styledComponents: true,
	},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
