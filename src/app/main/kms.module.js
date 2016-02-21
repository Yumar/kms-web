/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular.module('kms', ['kms.map', 'kms.warning'])
            .constant("server", {
                "url": "http://kms-test.eastus.cloudapp.azure.com/kmsapi/api"
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
                            templateUrl: 'app/main/warnings/warning.list.html',
                            controller: 'WarningController as wc'
                        },
                        'map@kms': {
                            templateUrl: 'app/main/map/map.tpl.html',
                            controller: 'MapController as mp'
                        },
                        'sidebar@kms': {
                            templateUrl: 'app/quick-panel/quick-panel.html',
                            controller: 'QuickPanelController as vm'
                        },
                        'toolbar@kms': {
                            templateUrl: 'app/toolbar/layouts/vertical-navigation/toolbar.html',
                            controller: 'ToolbarController as vm'
                        }
                    }
                });
    }
})();

