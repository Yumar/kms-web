(function ()
{
    'use strict';

    angular
            .module('kms.auth.login', [])
            .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('kms.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: 'app/main/user/login/login.html',
                    controller: 'LoginController as lc'
                }
            },
            bodyClass: 'login'
        });
    }

})();