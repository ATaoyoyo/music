const path = require('path')
const cracoLess = require('craco-less')

const resolve = (dirname) => path.join(__dirname, dirname)

module.exports = {
  style: {
    postcss: {
      mode: 'file',
      plugins: [
        require('postcss-pxtorem')({
          rootValue: 37.5,
          propList: ['*'],
          selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
        }),
      ],
      env: {
        autoprefixer: {
          /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
        },
        stage: 3 /* Any valid stages: https://cssdb.org/#staging-process. */,
        features: {
          /* Any CSS features: https://preset-env.cssdb.org/features. */
        },
      },
    },
  },
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
