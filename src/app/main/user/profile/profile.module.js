(function () {
    'use strict';
    angular.module('kms.auth.profile', [])
            .config(config);

    function config($stateProvider) {
        $stateProvider
                .state('kms.profile', {
                    url: '/profile/:id',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/user/profile/templates/profile.html',
                            controller: 'ProfileController as pc'

                        },
                        'user-contacts@kms.profile': {
                            templateUrl: 'app/main/user/profile/templates/user-contact.html'
                        }
                    },
                    resolve: {
                        user: function ($stateParams, UserFactory) {
                            console.log("$stateParams", $stateParams);
                            return UserFactory.get($stateParams.id)
                                    .then(function (result) {
                                        return result.data;
                                    });
                        }
                    }
                });
    }

})();
