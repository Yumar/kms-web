(function ()
{
    'use strict';

    angular
        .module('kms.auth', [
            'kms.auth.login',
            'kms.auth.register',
            'kms.auth.forgot-password',
            'kms.auth.reset-password'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('auth', {
            title : 'AUTH',
            group : true,
            weight: 2
        });
    }
})();