(function ()
{
    'use strict';

    angular
        .module('kms.auth.reset-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.reset-password', {
            url      : '/reset-password',
            views    : {
                'main@'                                : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.reset-password': {
                    templateUrl: 'app/main/authentication/reset-password/reset-password.html',
                    controller : 'ResetPasswordController as vm'
                }
            },
            bodyClass: 'reset-password'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/authentication/reset-password');

        // Navigation
        msNavigationServiceProvider.saveItem('auth.reset-password', {
            title : 'Reset Password',
            state : 'app.reset-password',
            weight: 6
        });
    }

})();