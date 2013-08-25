var express = require('express')
    , fs = require('fs')
var env = process.env.NODE_ENV || 'development'
    , config = require('./config/config')[env]

var app = express()
var port = process.env.PORT || 5001
require('./config/express')(app, config)
require('./config/routes')(app)
require('./config/socketio')(app.listen(port),config)
console.log('Express app started on port ' + port)