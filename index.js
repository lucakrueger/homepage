const express = require('express')
var request = require('request')
const path = require('path')
const bp = require('body-parser')
const app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

const router = require('./src/router')
const routes = require('./src/routes')

const config = require('./src/config')

app.use(express.static('./src/public'))

router.BindRoutes(app, routes.routes)

app.post('/legalcaptcha', (req, res) => {
  request.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${config.config.reCaptcha}&response=${req.body.captcha}`,
    {},
    function (error, response, bodyString) {
      if (!error && response.statusCode == 200) {
        let body = JSON.parse(bodyString)
        if(body.success == true) {
          res.send({
            success: true,
            address: 'Agnes-Gierck-Weg',
            postal: '22419 Hamburg'
          })
        } else {
          res.send({
            success: false
          })
        }
      }
    }
  )
})

app.post('/contactreq', (req, res) => {
  request.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${config.config.reCaptcha}&response=${req.body.captcha}`,
    {},
    function (error, response, bodyString) {
      if (!error && response.statusCode == 200) {
        let body = JSON.parse(bodyString)
        if(body.success == true) {
          res.redirect('https://luca-krueger.com/success')
        } else {
          res.redirect('https://luca-krueger.com/failed')
        }
      }
    }
  )
  //res.redirect('https://luca-krueger.com')
})

app.listen(3000, '0.0.0.0', () => console.log('Server is listening on port 3000'))