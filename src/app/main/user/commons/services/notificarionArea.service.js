(function () {
    'use strict';

    angular.module('kms')
            .factory('NotificarionAreaFactory', notificarionArea);

    function notificarionArea($http, UserFactory) {
        var serv = {
            user: UserFactory.getCurrentUser()
        };

        serv.add = function (notificarionArea) {
            
        };
        
        serv.remove = function(id){
            
        };

        return serv;
    }
})();