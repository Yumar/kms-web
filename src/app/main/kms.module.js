/* 
 * Copyright (c) 2016, Jumar
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
(function () {
    'use strict';
    angular.module('kms', ['kms.map', 'kms.warning', 'kms.settings', 'kms.auth'])
            .constant("server", {
                "api": "http://localhost/api/",
                "url": "http://localhost/"
            })
            .config(config);
    function config($stateProvider) {
        $stateProvider
                .state('kms', {
                    url: '/kms',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/main.layout.html',
                            controller: 'MainController as mc'
                        },
                        'warning-list@kms': {
                            templateUrl: 'app/main/warnings/templates/warning.list.html',
                            controller: 'WarningController as wc'
                        },
                        'map@kms': {
                            templateUrl: 'app/main/map/map.tpl.html',
                            controller: 'MapController as mp'
                        },
                        'sidebar@kms': {
                            templateUrl: 'app/main/settings/settings.list.html',
                            controller: 'SettingsController as sc'
                        },
                        'toolbar@kms': {
                            templateUrl: 'app/main/user/toolbar/toolbar.html',
                            controller: 'ToolbarController as vm'
                        }
                    }
                });
    }
})();

