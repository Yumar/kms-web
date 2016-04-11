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
                            controller: 'ProfileController as pc'
                        },
                        'user-contacts@kms.profile': {
                            templateUrl: 'app/main/user/profile/templates/user-contact.html'
                        }
                    }
                });
    }

    })();
