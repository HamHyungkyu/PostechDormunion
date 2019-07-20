const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

var shops = require('./routes/shops')

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  //session 로그인 사용
  // app.use(express.cookieParser())
  // app.use(express.session({
  //   key: ‘sid’, // 세션키
  //   secret: ‘secret’, // 비밀키
  //   cookie: {
  //     maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
  //   }
  // }));

  //shops(배달업체) route middleware 연결
  app.use('/api/delivery', shops)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
