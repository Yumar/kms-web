/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.auth.register', [])
            .config(config);

    function config($stateProvider) {        
        // State
        $stateProvider.state('kms.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: 'app/main/user/register/register.html',
                    controller: 'RegisterController as regC'
                }
            },
            bodyClass: 'register'
        });
    }

})();


