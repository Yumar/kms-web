(function () {
    'use strict';

    angular.module('kms.map')
            .controller('MapController', MapController);

    function MapController(uiGmapGoogleMapApi) {
        var mp = this;
        
        uiGmapGoogleMapApi.then(function (maps)
        {
            mp.simpleMap = {
                center: {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom  : 8
            };
        });
    }
})();


