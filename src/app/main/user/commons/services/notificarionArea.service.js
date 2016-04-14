(function () {
    'use strict';

    angular.module('kms')
            .factory('NotificarionAreaFactory', notificarionArea);

    function notificarionArea($http, server) {
        var serv = {
        };

        serv.add = function (userid, notificarionArea) {
            return $http.post(server.api+'notificationarea/'+userid, notificarionArea);
        };
        
        serv.remove = function(id){
            
        };

        return serv;
    }
})();