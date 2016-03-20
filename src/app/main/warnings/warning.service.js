/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('WarningFactory', ['$http', 'server', '$rootScope', '$timeout', WarningFactory]);

    function WarningFactory($http, server, $rootScope, $timeout) {
        var serv = {
            warnings:[],
            selectedCallBacks:[],
            selected:null
        };
        
        serv.registerSelectedCallback = function(callback){
            serv.selectedCallBacks.push(callback);
        }
        
        serv.setSelected = function(warning){
            serv.selected = warning;
            notifySelected(warning);
        }

        serv.getAll = function () {
            if(!serv.warnings || serv.warnings.length < 1){
                serv.warnings = generateAll();
            }
            
            return serv.warnings;    
        };

        serv.get = function (id) {
            return serv.warnings[id];
        };
        
        serv.getTypes = function(){
            return $http.get(server.url+'warningtype');
        }
        
        function generateAll(){
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
        }
        
        function notifySelected(warning){
            angular.forEach(serv.selectedCallBacks, function(callback){
                callback(warning);
            })
        }
        
        return serv;
        
    }
})();