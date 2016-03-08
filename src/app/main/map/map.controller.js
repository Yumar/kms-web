(function () {
    'use strict';

    angular.module('kms.map')
            .controller('MapController', MapController);

    function MapController(uiGmapGoogleMapApi, WarningFactory, $scope) {
        var mp = this;
        mp.warnings = [];
        mp.mapControl = {};

        uiGmapGoogleMapApi.then(function (maps)
        {
            mp.simpleMap = {
                center: {
                    latitude: 18.494907,
                    longitude: -69.834096
                },
                zoom: 15
            };

        });

        mp.focusWarning = function(warning){ //set warning as selected in the service an then focus
            WarningFactory.setSelected(warning);
            focusWarning(warning.Localitys);
        };
        
        function focusWarning(location) {
            var newCenter = {latitude: location.latitude, longitude: location.longitude};
            mp.mapControl.refresh(newCenter);
        }
        
        function selectedFocusCallback(warning){
            focusWarning(warning.Localitys);            
        }

        mp.warnings = WarningFactory.getAll();
        WarningFactory.registerSelectedCallback(selectedFocusCallback);
        
    }
})();


