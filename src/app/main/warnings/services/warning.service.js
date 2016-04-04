/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('WarningFactory', ['$http', 'server', 'warningSocket', WarningFactory]);

    function WarningFactory($http, server, warningSocket) {
        var serv = {
            warnings: [],
            warningsCallBacks: [],
            selectedCallBacks: [],
            selected: null
        };

        serv.registerSelectedCallback = function (callback) {
            serv.selectedCallBacks.push(callback);
        }

        serv.setSelected = function (warning) {
            serv.selected = warning;
            notifySelected(warning);
        }

        serv.createWarning = function (warning, callback) {
            warning.type = JSON.parse(warning.type);
            warningSocket.emit('warning:create', warning, callback);
        }    
        
        serv.registerWarningsCallBacks = function (callback) {
            serv.warningsCallBacks.push(callback);
        }

        serv.getAll = function () {
            return serv.warnings;
        };

        serv.get = function (id) {
            return serv.warnings[id];
        };

        serv.getTypes = function () {
            return $http.get(server.api + 'warningtype');
        }
        
        function listenAllWarnings() {
            warningSocket.on('warning:list', function (data) {
                console.info('warning:list recieved', data);
                serv.warnings = data;
                notifyWaningsChanged();
            });
        }

        function listenNewWarning() {
            warningSocket.on('warning:new', function (data) {
                console.info('warning:new recieved', data);
                serv.warnings.push(data);
                notifyWaningsChanged();
                serv.setSelected(data)
            });
        }

        function notifySelected(warning) {
            angular.forEach(serv.selectedCallBacks, function (callback) {
                callback(warning);
            })
        }
        
        function notifyWaningsChanged() {
            angular.forEach(serv.warningsCallBacks, function (callback) {
                callback();
            })
        }
        
        listenAllWarnings();
        listenNewWarning();

        return serv;

    }
})();