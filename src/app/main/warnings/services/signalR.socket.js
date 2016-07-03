/* 
 * Copyright (c) 2016, yumarx
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

(function ($) {
    'use strict';

    angular.module('kms.warning')
            .service('SignalR', signalR);

    function signalR() {
        var self = this;
        self.observers = [];

        $.connection.hub.url = "http://servicekms.azurewebsites.net/signalr";
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
})($);

