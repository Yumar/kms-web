/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.auth.register')
            .controller('RegisterController', register);

    function register($scope, $rootScope, UserFactory, $mdDialog, locationUtils) {
        var regControl = this;
        $scope.form = {};
        $scope.gPlace;
        $scope.gPlaceEvents = [];
        $scope.updateLocation = function (placesLocation){
            if (!$scope.form.location)
            $scope.form.location = {};
            
            locationUtils.translateGoogleLocation($scope.form.location, placesLocation || $scope.gPlace.getPlace());
        }
        
        $scope.useCurrentLocationChanged = function () {
            if ($scope.useCurrentLocation) {
                console.info("using current location");
                locationUtils.getCurrentLocation(useCurrentLocationCallback);
            }
        }
        
        function useCurrentLocationCallback(result){
            $scope.updateLocation(result);
            $scope.$apply();
        }

        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if (event.targetScope.$id === $scope.$id)
            {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });

        regControl.registerFormPost = function () {
            sendRegistrationRequest($scope.form);
        }

        regControl.validateRegisterFrom = function () {

        }
        
        
        
        //init
        registerPlacesChangesListener();
        
        function registerPlacesChangesListener() {
            var listener = function () {
                $scope.updateLocation();
                $scope.$apply();
            }

            $scope.gPlaceEvents.push(listener);
        }

        function sendRegistrationRequest(userFrom) {
            var body = angular.element(document.querySelector('body')),
                    resultDialog = {};
            UserFactory.register(userFrom)
                    .then(function (result, event) {
                        var user = result.data;
                        resultDialog = $mdDialog.alert()
                                .parent(body)
                                .clickOutsideToClose(true)
                                .title('Registro de usuario completado')
                                .textContent('Su usuario ha sido creado exitosamente, favor verifique su correo para confirmar su cuenta.')
                                .ariaLabel('Registro completado')
                                .ok('Aceptar');
                    })
                    .catch(function (event) {
                        resultDialog = $mdDialog.alert()
                                .parent(body)
                                .clickOutsideToClose(true)
                                .title('Registro de usuario fallido')
                                .textContent('Ha ocurrido un error al crear su cuenta, por favor intente nuevemente.')
                                .ariaLabel('Registro fallido')
                                .ok('Aceptar');
                    })
                    .finally(function (dialog) {
                        $mdDialog.show(resultDialog);
                    })
        }
    }
})();


