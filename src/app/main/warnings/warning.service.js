/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('WarningFactory', WarningFactory);

    function WarningFactory($http, server) {
        var serv = {};

        serv.getAll = function () {
//            $http.get(server.url+"/Warnings")
//                    .then(function(data){
//                        return data;
//                    }, onError);
            return [];
        };

        serv.get = function (id) {

        };

        function onError(err) {
            return [];
        }

        return serv;
    }
})();