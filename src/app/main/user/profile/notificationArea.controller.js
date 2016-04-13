(function () {
    'use strict';

    angular.module('kms.auth.profile')
            .controller('NotificationAreaController', notificationArea);

    function notificationArea($scope, $mdDialog, locationUtils, NotificarionAreaFactory, notificationArea, userId) {
        $scope.area = notificationArea;
        $scope.gPlace;
        $scope.gPlaceEvents = [];

        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.save = function () {
            NotificarionAreaFactory
                    .add(userId, notificationArea)
                    .then(function (result) {
                        $mdDialog.hide(result);
                    })
                    .catch(function () {
                        errorAlert();
                    })

        };

        $scope.updateLocation = function (placesLocation) {
            if (!$scope.area.location)
                $scope.area.location = {};

            locationUtils.translateGoogleLocation($scope.area.location, placesLocation || $scope.gPlace.getPlace());
        }

        $scope.useCurrentLocationChanged = function () {
            if ($scope.useCurrentLocation) {
                console.info("using current location");
                locationUtils.getCurrentLocation(useCurrentLocationCallback);
            }
        }

        function useCurrentLocationCallback(result) {
            $scope.updateLocation(result);
            $scope.$apply();
        }

        function errorAlert() {
            $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('body')))
                    .clickOutsideToClose(true)
                    .title('Ha ocurrido un error')
                    .textContent('La operacion realizada no a sido ejecutada completamente, por favor verifique e intente de nuevo.')
                    .ariaLabel('Error')
                    .ok('Aceptar')
                    );
        }

        function registerPlacesChangesListener() {
            var listener = function () {
                $scope.updateLocation();
                $scope.$apply();
            }

            $scope.gPlaceEvents.push(listener);
        }

        registerPlacesChangesListener();
    }
})();