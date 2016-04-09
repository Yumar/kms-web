(function () {
    'use strict';

    angular.module('kms.map')
            .controller('MapController', MapController);

    function MapController(NgMap, WarningFactory, $timeout) {
        var mp = this;
        mp.map;

        mp.center = {
            latitude: 18.494907,
            longitude: -69.834096
        };

        mp.warnings = [];

        NgMap.getMap().then(function (map) {
            mp.map = map;
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

        //reload map
//        $scope.$on('$routeChangeSuccess', function () {
//            console.log("resizing map", mp.map);
//            google.maps.event.trigger(mp.map, 'resize');
//        });

//      map rerender fix 
        mp.renderMap = false;
        $timeout(function () {
            mp.renderMap = true;
        }, 1000);

        WarningFactory.registerSelectedCallback(selectedFocusCallback);
        WarningFactory.registerWarningsCallBacks(warningsCallback);
        warningsCallback();
    }
})();


