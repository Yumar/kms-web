(function ()
{
    'use strict';

    angular
            .module('kms')
            .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/kms');

        /**
         * Layout Style Switcher
         *
         * This code is here for demonstration purposes.
         * If you don't need to switch between the layout
         * styles like in the demo, you can set one manually by
         * typing the template urls into the `State definitions`
         * area and remove this code
         */
        // Inject $cookies
        var $cookies;

        angular.injector(['ngCookies']).invoke([
            '$cookies', function (_$cookies)
            {
                $cookies = _$cookies;
            }
        ]);

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
                        'toolbar@kms': {
                            templateUrl: 'app/main/user/toolbar/toolbar.html',
                            controller: 'ToolbarController as vm'
                        }
                    }
                });
    }

})();
