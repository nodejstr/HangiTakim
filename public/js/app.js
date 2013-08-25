$(function () {
    var map = new GMaps({
        div: '#maps',
        lat: 39,
        lng: 35,
        zoom: 7
    });
    map.addControl({
        position: 'top_right',
        content: 'Lokasyonum',
        style: {
            margin: '5px',
            padding: '1px 6px',
            border: 'solid 1px #717B87',
            background: '#fff'
        },
        events: {
            click: function(){
                GMaps.geolocate({
                    success: function(position){
                        map.setCenter(position.coords.latitude, position.coords.longitude);
                        map.setZoom(11);
                    },
                    error: function(error){
                        alert('Geolocation failed: ' + error.message);
                    },
                    not_supported: function(){
                        alert("Your browser does not support geolocation");
                    }
                });
            }
        }
    });

    var socket = io.connect();
    socket.on('heartbeat', function (tweet) {
        console.log('heartbeat')
    })
    socket.on('data', function (tweet) {
        if(tweet.coordinates){
            map.addMarker({
                lat: tweet.coordinates.coordinates[1],
                lng: tweet.coordinates.coordinates[0],
                title: tweet.text,
                infoWindow: {
                    content: '<p>' + tweet.text + '</p>'
                }
            })
        }
        if(tweet.text.toLowerCase().indexOf('galatasaray') != -1)
        {
            $('#galatasaray').prepend(tweet.text);
            $('#gscount').text(parseInt($('#gscount').text())+1);
        }

        if(tweet.text.toLowerCase().indexOf('fenerbahçe') != -1)
        {
            $('#fenerbahce').prepend(tweet.text);
            $('#fbcount').text(parseInt($('#fbcount').text())+1);
        }

        if(tweet.text.toLowerCase().indexOf('beşiktaş') != -1)
        {
            $('#besiktas').prepend(tweet.text);
            $('#bjkcount').text(parseInt($('#bjkcount').text())+1);
        }

        if(tweet.text.toLowerCase().indexOf('nodejstr') != -1)
        {
            $('#nodejstr').prepend(tweet.text);
            $('#nodecount').text(parseInt($('#nodecount').text())+1);
        }




    });
});