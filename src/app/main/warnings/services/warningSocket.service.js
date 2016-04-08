(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('warningSocket', warningSocket);

    function warningSocket($rootScope, server) {
        var socket = io.connect(server.url + 'warning');

        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }
        };
    }
})();