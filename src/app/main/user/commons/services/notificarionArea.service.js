(function () {
    'use strict';

    angular.module('kms')
            .factory('NotificarionAreaFactory', notificarionArea);

    function notificarionArea($http, server, EntitiesConverterFactory) {
        var serv = {
        };

        serv.add = function (userid, notificarionArea) {
            var userArea = EntitiesConverterFactory.warningAreaToServer(notificarionArea);
            userArea.UserId = userid;

            return $http.post(server.DotNet.api+'usersaddress/', userArea);
        };

        serv.remove = function(id){
          return $http.delete(server.DotNet.api+'usersaddress/', id);
        };

        return serv;
    }
})();
