(function () {
    'use strict';

    angular.module('kms')
            .directive('googleplace', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, element, attrs, model) {
                        var options = {
                            types: ['geocode'],
                            componentRestrictions: {}
                        };
                        scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

                        for (var i = 0; i < scope.gPlaceEvents.length; i++) {
                            google.maps.event.addListener(scope.gPlace, 'place_changed', scope.gPlaceEvents[i]);
                        }

                    }
                };
            });
})();