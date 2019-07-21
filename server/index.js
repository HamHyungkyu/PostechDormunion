const express = require('express')
const sessionParser = require('express-session');
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

  // express-session 미들웨어를 사용하기위해 app에 등록
  app.use(sessionParser({
    secret: 'hhk971@postech.ac.kr',
    resave: false,
    cookie: {secure: false, maxAge: 1000*60},
    saveUninitialized: true
  }));

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
