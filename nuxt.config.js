module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bondo Booth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bondo Booth Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // css:[
  //   'vue-slick'
  // ],
  //plugins:['~/plugins/slick'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

 modules: [
  '@nuxtjs/axios',
],

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer}) {
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
              whitelist: [/^vue-slick/]
            })
        ]
      }
  }
     /* if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/


  }
}
