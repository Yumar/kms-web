(function () {
    'use strict';

    angular.module('kms.map')
            .controller('MapController', MapController);

    function MapController(NgMap, WarningFactory, $scope) {
        var mp = this;

        mp.center = {
            latitude: 18.494907,
            longitude: -69.834096
        };

        mp.warnings = [];

        NgMap.getMap().then(function (map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        mp.focusWarning = function (warning) { //set warning as selected in the service an then focus
            WarningFactory.setSelected(warning);
            focusWarning(warning.Localitys);
        };

        function focusWarning(location) {
            var newCenter = {latitude: location.latitude, longitude: location.longitude};
            mp.center = newCenter;
        }

        function selectedFocusCallback(warning) {
            focusWarning(warning.location);
        }

        function warningsCallback() {
            mp.warnings = WarningFactory.warnings;
            console.info("warnings in map", mp.warnings);
        }

        WarningFactory.registerSelectedCallback(selectedFocusCallback);
        WarningFactory.registerWarningsCallBacks(warningsCallback);
        warningsCallback();
    }
})();


