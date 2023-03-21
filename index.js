const express = require('express')
var request = require('request')
const path = require('path')
const app = express()

const router = require('./src/router')
const routes = require('./src/routes')

const config = require('./src/config')

app.use(express.static('./src/public'))

router.BindRoutes(app, routes.routes)

app.get('/contactreq', (req, res) => {
  request.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${config.config.reCaptcha}&response=${req.query['g-recaptcha-response']}`,
    {},
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
          if(body.success == true) {
            
          }
      }
    }
  )
  res.redirect('https://luca-krueger.com')
})

app.listen(3000, '0.0.0.0', () => console.log('Server is listening on port 3000'))