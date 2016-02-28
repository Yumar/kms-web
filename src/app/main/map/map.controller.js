(function () {
    'use strict';

    angular.module('kms.map')
            .controller('MapController', MapController);

    function MapController(uiGmapGoogleMapApi, WarningFactory) {
        var mp = this;
        mp.warnings = [];        
        
        uiGmapGoogleMapApi.then(function (maps)
        {
            mp.simpleMap = {
                center: {
                    latitude : 18.494907,
                    longitude: -69.834096
                },
                zoom  : 14
            };
            
        });
        
        mp.warnings = WarningFactory.getAll();
    }
})();


