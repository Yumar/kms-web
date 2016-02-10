/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular.module('kms.auth', ['ui.router', 'ngMaterial'])
            .config(function ($stateProvider) {
                $stateProvider
                        .state('app.login', {
                            url: '/login',
                            views: {'modal@app': {}},
                            onEnter: ['$mdDialog', function ($mdDialog) {
                                    $mdDialog.show({
                                        controller: 'LoginController',
                                        templateUrl: 'app/main/auth/login/login.modal.html',
                                        parent: angular.element(document.body),
                                        clickOutsideToClose: true
                                    });
                                }]
                        })
                        .state('app.register', {
                            url: '/register',
                            views: {'modal@app': {}},
                            onEnter: ['$mdDialog', function ($mdDialog) {
                                    $mdDialog.show({
                                        controller: 'RegisterController',
                                        templateUrl: 'app/main/auth/register/register.modal.html',
                                        parent: angular.element(document.body),
                                        clickOutsideToClose: true
                                    });
                                }]
                        });
            });

})();