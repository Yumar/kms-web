(function () {
    'use strict';

    angular.module('kms.warning')
            .controller('WarningModalController', WarningModal);

    function WarningModal($scope, $mdDialog, types, locationUtils) {
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

        $scope.updateWarningLocation = function (placesLocation) {
            if (!$scope.warning.location)
            $scope.warning.location = {};
            
            locationUtils.translateGoogleLocation($scope.warning.location, placesLocation || $scope.gPlace.getPlace());
        }

        $scope.useCurrentLocationChanged = function () {
            if ($scope.useCurrentLocation) {
                console.info("using current location");
                locationUtils.getCurrentLocation(useCurrentLocationCallback);
            }
        }
        
        function useCurrentLocationCallback(result){
            $scope.updateWarningLocation(result);
            $scope.$apply();
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
})();


