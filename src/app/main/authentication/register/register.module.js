(function ()
{
    'use strict';

    angular
        .module('kms.auth.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.register', {
            url      : '/register',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.register': {
                    templateUrl: 'app/main/authentication/register/register.html',
                    controller : 'RegisterController as vm'
                }
            },
            bodyClass: 'register-v2'
        });

        // Translate
        $translatePartialLoaderProvider.addPart('app/main/authentication/register');

        // Navigation
        msNavigationServiceProvider.saveItem('auth.register', {
            title : 'Register',
            state : 'app.register',
            weight: 4
        });
    }

})();