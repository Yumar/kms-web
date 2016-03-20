(function () {
    'use strict';
angular.module('kms.auth.profile', [])
.config(config);

    function config($stateProvider) {
    	$stateProvider
                .state('kms.profile', {
                    url: '/profile',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/main.layout.html',
                            controller: 'MainController as mc'
                        },
                        'warning-area-list@profile': {
                            templateUrl: 'app/main/warnings/templates/warning.list.html',
                            controller: 'WarningController as wc'
                        },
                        'user-info@profile': {
                            templateUrl: 'app/main/map/map.tpl.html',
                            controller: 'MapController as mp'
                        },
                        'user-contacts@profile': {
                            templateUrl: 'app/main/settings/settings.list.html',
                            controller: 'SettingsController as sc'
                        },
                        'toolbar@profile': {
                            templateUrl: 'app/toolbar/layouts/vertical-navigation/toolbar.html',
                            controller: 'ToolbarController as vm'
                        }
                    }
                });
    }

    })();
