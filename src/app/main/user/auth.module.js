/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.auth', ['kms.auth.register', 'kms.auth.login', 'kms.auth.profile', 'kms.auth.toolbar'])
            .config(config);

    function config() {
    }

})();


