var Stream = require('twitter-public-stream');

module.exports = function (server, config) {
    var io = require("socket.io").listen(server);
    io.sockets.on('connection', function (socket) {

        stream = new Stream(config.twitterConfig);
        stream.stream();

        socket.on('start', function () {
            stream.stream()
        });
        socket.on('stop', function () {
            stream.destroy();
        });

        stream.on('data', function (json) {
            socket.emit('data', json);
        });

        stream.on('heartbeat', function () {
            socket.emit('heartbeat', 'heartbeat');
        });

        stream.on('error', function (json) {
            socket.emit('error', json);
        });

        stream.on('connected', function (json) {
            socket.emit('connected', json);
        });

        stream.on('close', function (json) {
            socket.emit('close', json)
            stream.stream()
        });

    });
}