(function () {
    'use strict';
angular.module('kms.auth.profile', [])
.config(config);

    function config($stateProvider) {
    	$stateProvider
                .state('kms.profile', {
                    url: '/profile',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/user/profile/templates/profile.html',
                            controller: 'MainController as mc'
                        },
                        'warning-area-list@kms.profile': {
                            templateUrl: 'app/main/user/profile/templates/warning-area-list.html'
                        },
                        'user-info@kms.profile': {
                            templateUrl: 'app/main/user/profile/templates/user-info.html'
                        },
                        'user-contacts@kms.profile': {
                            templateUrl: 'app/main/user/profile/templates/user-contact.html'
                        },
                        'toolbar@kms.profile': {
                            templateUrl: 'app/main/user/toolbar/toolbar.html',
                            controller: 'ToolbarController as vm'
                        }
                    }
                });
    }

    })();
