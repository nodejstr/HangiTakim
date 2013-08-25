 var util = require('./util')

module.exports = function (config) {
    return function (req, res, next) {
        res.locals.appName = config.app.name
        res.locals.title = 'TwitCompare'
        res.locals.req = req
        res.locals.isActive = function (link) {
            return req.url === link ? 'active' : ''
        }
        res.locals.formatDateFromObject = util.formatDateFromObject
        res.locals.stripScript = util.stripScript
        next()
    }
}