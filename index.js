const express = require('express')
const app = express()

const router = require('./src/router')
const routes = require('./src/routes')

app.use(express.static('./src/public'))

router.BindRoutes(app, routes.routes)

app.listen(3000, '0.0.0.0', () => console.log('Server is listening on port 3000'))