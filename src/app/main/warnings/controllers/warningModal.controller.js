(function () {
    'use strict';

    angular.module('kms.warning')
            .controller('WarningModalController', WarningModal);

    function WarningModal($scope, $mdDialog, types) {
        $scope.warningTypes = types;
        $scope.gPlace;
        $scope.gPlaceEvents = [];
        $scope.warning = {};

        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function () {
            $mdDialog.hide($scope.warning);
        };

        $scope.updateWarningLocation = function () {
            updateWarningLocation($scope.warning.location, $scope.gPlace.getPlace().address_components);
        }

        $scope.useCurrentLocationChanged = function () {
            if ($scope.useCurrentLocation) {
                console.info("using current location")
                $scope.gPlace.setBounds(getCurrentLocation());
                $scope.updateWarningLocation();
            }
        }

        function registerPlacesChangesListener() {
            var listener = function () {
                $scope.updateWarningLocation();
                $scope.$apply();
            }

            $scope.gPlaceEvents.push(listener);
        }

        registerPlacesChangesListener();
    }

    function updateWarningLocation(warningLocation, googleLocation) {
        console.log('location changed');
        warningLocation.street = googleLocation[0] ? angular.copy(googleLocation[0].long_name) : '';
        warningLocation.neighborhood = googleLocation[1] ? angular.copy(googleLocation[1].long_name) : '';
        warningLocation.city = googleLocation[2] ? angular.copy(googleLocation[2].long_name) : '';
        warningLocation.state = googleLocation[3] ? angular.copy(googleLocation[3].long_name) : '';
        warningLocation.country = googleLocation[4] ? angular.copy(googleLocation[4].long_name) : '';
    }

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                return circle.getBounds();
            });
        }
    }
})();


