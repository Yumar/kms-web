/* 
 * Copyright (c) 2016, Jumar
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .controller('WarningModalController', WarningModal)
            .directive('googleplace', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, element, attrs, model) {
                        var options = {
                            types: ['geocode'],
                            componentRestrictions: {}
                        };
                        scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

                        google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
                            scope.updateWarningLocation();
                            scope.$apply(function () {
                                model.$setViewValue(element.val());
                            });
                        });
                    }
                };
            });

    function WarningModal($scope, $mdDialog, types) {
        $scope.warningTypes = types;
        $scope.gPlace;
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
        
        $scope.useCurrentLocationChanged = function(){
            if($scope.useCurrentLocation){
                console.info("using current location")
                $scope.gPlace.setBounds(getCurrentLocation());
                $scope.updateWarningLocation();
            }
        }
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


