(function ()
{
    'use strict';

    angular
        .module('kms.auth.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.login', {
            url      : '/login',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_auth_login': {
                    templateUrl: 'app/main/authentication/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            bodyClass: 'login-v2'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/authentication/login');

        // Navigation
        msNavigationServiceProvider.saveItem('auth.login', {
            title : 'Login',
            state : 'app.login',
            weight: 2
        });
    }

})();