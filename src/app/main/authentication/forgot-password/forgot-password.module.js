(function ()
{
    'use strict';

    angular
        .module('kms.auth.forgot-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.forgot-password', {
            url      : '/forgot-password',
            views    : {
                'main@'                                 : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_auth_forgot-password': {
                    templateUrl: 'app/main/authentication/forgot-password/forgot-password.html',
                    controller : 'ForgotPasswordController as vm'
                }
            },
            bodyClass: 'forgot-password'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/authentication/forgot-password');

        // Navigation
        msNavigationServiceProvider.saveItem('auth.forgot-password', {
            title : 'Forgot Password',
            state : 'app.forgot-password',
            weight: 5
        });
    }

})();