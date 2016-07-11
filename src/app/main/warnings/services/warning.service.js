/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('WarningFactory', WarningFactory);

    function WarningFactory($http, server, notificationFactory, EntitiesConverterFactory, SignalR) {
        var serv = {
            warnings: [],
            warningsCallBacks: [],
            selectedCallBacks: [],
            selected: null
        };

//        serv.customizeWarningAreas = function (areas, callback){
//            warningSocket.emit('warning:customizeAreas', areas, callback);
//        }

        serv.registerSelectedCallback = function (callback) {
            serv.selectedCallBacks.push(callback);
        };

        serv.setSelected = function (warning) {
            serv.selected = warning;
            notifySelected(warning);
        };

//        serv.createWarning = function (warning, callback) {
//            warning.type = JSON.parse(warning.type);
//            warningSocket.emit('warning:create', warning, callback);
//        }

        serv.registerWarningsCallBacks = function (callback) {
            serv.warningsCallBacks.push(callback);
        };

//        serv.getAll = function () {
//            return serv.warnings;
//        };

//        serv.get = function (id) {
//            return serv.warnings[id];
//        };

//        serv.getTypes = function () {
//            return $http.get(server.api + 'warningtype');
//        }
//
//        function listenAllWarnings() {
//            warningSocket.on('warning:list', function (data) {
//                console.info('warning:list recieved', data);
//                serv.warnings = data;
//                notifyWaningsChanged();
//            });
//        }

        function listenNewWarning() {
            SignalR.addListener(function (warning) {
                var data = EntitiesConverterFactory.warningsToClient(warning);
                console.info('warning:new recieved', data);
                serv.warnings.push(data);
                notifyNewWarningToBrowser(data);
                notifyWaningsChanged();
                serv.setSelected(data);
            });
        }

        function notifyNewWarningToBrowser(warning) {
            var notification = {};
            notification.title = warning.type.label;
            notification.body = warning.location.neighborhood;
            notification.icon = server.pngIcons + warning.type.name + '.png';
            notificationFactory.newNotification(notification.title, notification.body, notification.icon);
        }

        function notifySelected(warning) {
            angular.forEach(serv.selectedCallBacks, function (callback) {
                callback(warning);
            });
        }

        function notifyWaningsChanged() {
            angular.forEach(serv.warningsCallBacks, function (callback) {
                callback();
            });
        }


        /*
         * new methods for .net backend
         */

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

        serv.vote = function(warningId, userId, value, callback){
          var vow = {
            UserId: userId,
            Selection: value,
            WarningId: warningId
          }

          $http.post(server.DotNet.api + "warningvows", vow).then(callback);
        }

        serv.getTypes = function (callback) {

            $http.get(server.DotNet.api + 'typeofWarnings')
                    .then(function (result) {
                        var typesList = EntitiesConverterFactory.warningTypeToClient(result.data);
                        callback(typesList);
                    });
        };

        listenNewWarning();

        return serv;
    }
})();
