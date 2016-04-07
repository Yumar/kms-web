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
            
            if(!location.address){
                location.address = googlePlace.formatted_address;
            }
            
            location.street = googleLocation[0] ? angular.copy(googleLocation[0].long_name) : '';
            location.neighborhood = googleLocation[1] ? angular.copy(googleLocation[1].long_name) : '';
            location.city = googleLocation[2] ? angular.copy(googleLocation[2].long_name) : '';
            location.state = googleLocation[3] ? angular.copy(googleLocation[3].long_name) : '';
            location.country = googleLocation[4] ? angular.copy(googleLocation[4].long_name) : '';
            location.latitude = geometry.location.lat();
            location.longitude = geometry.location.lng();
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