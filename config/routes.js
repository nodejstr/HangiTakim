var controller = require('../app/controllers/controller')
module.exports = function (app) {
    app.get('*', controller.index)
}