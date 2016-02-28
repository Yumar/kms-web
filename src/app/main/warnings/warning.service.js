/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('WarningFactory', ['$http', 'server', '$rootScope', 'Hub', '$timeout', WarningFactory]);

    function WarningFactory($http, server, $rootScope, Hub, $timeout) {
        var serv = {}, 
                hub = new Hub('warningHub', {}); 

        serv.getAll = function () {
//            $http.get(server.url+"/Warnings")
//                    .then(function(data){
//                        return data;
//                    }, onError);
            var arr = [];
            for (var i = 0; i < 5; i++) {
                arr.push({
                    id:i,
                    Message:"Mensaje de alerta"+i,
                    TypeOfWarning:{WarningDesc:"Robo"},
                    Localitys:{
                        latitude:18.485264+   (i*0.001), 
                        longitude:-69.825685+ (i*0.001),
                        Address:"direccion "+i,
                        City:"Ciudad "+i,
                        Country:"Pais "+i,
                        Sector:"Sector "+i
                    }
                });
            }
            return arr;
        };

        serv.get = function (id) {

        };

        function onError(err) {
            return [];
        }

        return serv;
    }
})();