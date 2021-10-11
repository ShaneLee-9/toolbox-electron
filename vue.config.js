const path = require('path')

module.exports = {
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        additionalData: `
          @import "${path.resolve(__dirname, 'src/styles/vars.styl')}"
          @import "${path.resolve(__dirname, 'src/styles/mixins.styl')}"
        `
      }
    }
  }
}
