(function ($) {
    'use strict';

    angular.module('kms.warning')
            .service('SignalR', signalR);

    function signalR(server) {
        var self = this;
        self.observers = [];

        $.connection.hub.url = server.DotNet.socket;
        $.connection.hub.logging = true;
        $.connection.hub.error(function (error) {
            console.log('SignalR error: ' + error)
        });
        var warningshatHub = $.connection.warningHub;

        warningshatHub.client.newPost = function (warning) {
            notifyObservers(warning);
        };

        // Start the SignalR Hub.
        $.connection.hub.start()
                .done(function () {
                    console.log('Now connected, connection ID=' + $.connection.hub.id);
                })
                .fail(function () {
                    console.log('Could not Connect!');
                });

        self.addListener = function (callback) {
            self.observers.push(callback);
        }
        
        function notifyObservers(warning){
            self.observers.forEach(function (val){
                val(warning);
            })
        }
    }
})(window.jQuery);

