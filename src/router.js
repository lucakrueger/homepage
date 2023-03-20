const path = require('path')

exports.BindRoutes = (app, routes) => {
    for(let route of Object.keys(routes)) {
        app.get(route, (req, res) => {
            res.sendFile(path.join(__dirname, `/pages/${routes[route]}`))
        })
    }
} 