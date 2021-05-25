const { configure } = require('quasar/wrappers')
module.exports = configure(function (ctx) {
  return {
    boot: [
      'composition-api',
      'i18n',
      'axios',
      'vuelidate',
    ],
    css: [
      'app.sass'
    ],
    extras: ['ionicons-v4', 'mdi-v5', 'fontawesome-v5', 'eva-icons', 'themify', 'line-awesome', 'roboto-font', 'material-icons'],
    framework: {
      iconSet: 'material-icons',
      lang: 'en-us',
      all: 'auto',
      components: ['QForm','QBtn'],
      directives: [],
      plugins: ['Notify','Meta'],
      config: {
        notify: { /* look at QUASARCONFOPTIONS from the API card (bottom of page) */ }
      }
    },
    supportIE: true,
    supportTS: {
      tsCheckerConfig: { eslint: true }
    },
    build: {
      vueRouterMode: 'history',
      extendWebpack (cfg) {
        if (ctx.prod) {
          cfg.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            options: {
              formatter: require('eslint').CLIEngine.getFormatter('stylish')
            }
          })
        }
      }
    },
    devServer: {
      https: true,
      port: 8080,
      open: true
    },
    animations: [],
    ssr: {
      pwa: true,
      manualHydration: false,
    },
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
      manifest: {
        name: 'Web',
        short_name: 'Web',
        description: 'Laravel Boilerplate',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {
      id: 'org.cordova.quasar.app'
    },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      bundler: 'packager',

      packager: {
       //
      },

      builder: {
        appId: 'web'
      },
      nodeIntegration: true,

      extendWebpack (/* cfg */) {
        //
      }
    }
  }
})
