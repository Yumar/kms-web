(function () {
    'use strict';
    angular.module('kms', ['kms.map', 'kms.warning', 'kms.settings', 'kms.auth'])
            .constant("server", {
                "api": "http://localhost/api/",
                "url": "http://localhost/",
                "png-icons":"/assets/icons/png/",
                "images-map":"/assets/images/map/"
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

