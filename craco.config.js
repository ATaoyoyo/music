const path = require('path')

const resolve = (dirname) => path.join(__dirname, dirname)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('.'),
      src: resolve('src'),
      components: resolve('src/components'),
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig
    },
  },
}
