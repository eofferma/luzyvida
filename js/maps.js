/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

//// GOOGLE MAPS

function initialize() {
    "use strict";
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(-33.485902, -70.605219),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        overviewMapControl: true
    },
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions),
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(-33.485902, -70.605219),
            map: map,
            title: 'Luz y Vida'
        });
    
    //MANTENER CENTRO
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

