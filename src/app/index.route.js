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

        $urlRouterProvider.otherwise('/');

        // State definitions
        $stateProvider
                .state('app', {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainController'
                        },
                        'toolbar@app':{
                            templateUrl:'app/main/toolbar/top-toolbar.html'
                        },
                        'maps@app': {
                            templateUrl: 'app/main/map/map.tpl.html',
                            controller: 'MapController as mp'
                        },
                        'warnings@app': {
                            templateUrl: 'app/main/warnings/warnings.list.html',
                            controller: 'WarningController as wc'
                        },
                        'sidebar@app':{
                            templateUrl:'app/main/settings/settings.html'
                        }
                    }
                });
    }

})();
