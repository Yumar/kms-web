(function () {
    'use strict';

    angular.module('kms')
            .factory('locationUtils', locationUtils);

    function locationUtils() {
        var serv = {};

        serv.translateGoogleLocation = translateGoogleLocation;
        serv.getCurrentLocation = getCurrentLocation;

        function translateGoogleLocation(location, googlePlace) {
            var googleLocation = googlePlace.address_components,
                    geometry = googlePlace.geometry;

            console.log("google Location", googleLocation);
            if (!location.address) {
                location.address = googlePlace.formatted_address;
            }

            for (var i = 0; i < googleLocation.length; i++) {
                var value = googleLocation[i];

                if (value.types[0] == 'route') {
                    location.street = value.long_name;
                    continue;
                }
                
                if (value.types[0] == 'neighborhood') {
                    location.neighborhood = value.long_name;
                    continue;
                }
                
                if (value.types[0] == 'locality') {
                    location.city = value.long_name;
                    continue;
                }
                
                if (value.types[0] == 'administrative_area_level_1') {
                    location.state = value.long_name;
                    continue;
                }
                
                if (value.types[0] == 'country') {
                    location.street = value.long_name;
                    continue;
                }

            }
        }

        function getCurrentLocation(callback) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var geolocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    geocoder = new google.maps.Geocoder;
                    geocoder.geocode({'location': geolocation},
                            function (results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {
                                    console.log(results);
                                    callback(results[0]);
                                }
                            });
                });
            }
        }

        return serv;
    }
})();