(function () {
    'use strict';

    angular.module('kms')
            .factory('WarningDotNetFactory', WarningDotNet);

    function WarningDotNet($http, server, notificationFactory, EntitiesConverterFactory) {
        var serv = {
            warnings: [],
            warningsCallBacks: [],
            selectedCallBacks: [],
            selected: null
        };

        serv.createWarning = function (warning, callback) {
            $http.post(server.DotNet.api + "warnings", warning).then(callback);
        };

        serv.getAll = function (callback) {
            $http.get(server.DotNet.api + "warnings")
                    .then(function (response) {
                        var list = [];

                        response.data.forEach(function (val, i) {
                            list.push(EntitiesConverterFactory.warningsToClient(val));
                        });
                        callback(list);
                    });
        };

        serv.getTypes = function (callback) {

            $http.get(server.DotNet.api + 'typeofWarnings')
                    .then(function (result) {
                        var typesList = EntitiesConverterFactory.warningTypeToClient(result.data);
                        callback(typesList);
                    });
        }

        return serv;
    }
})();