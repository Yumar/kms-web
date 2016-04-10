(function () {
    'use strict';

    angular.module('kms.auth.profile')
            .controller('ProfileController', function (UserFactory, $state, $scope, $rootScope) {
                var pc = this;
                pc.user;

                function init() {
                    pc.user = UserFactory.getCurrentUser();
                }

                // Remove the splash screen
                $scope.$on('$viewContentAnimationEnded', function (event)
                {
                    if (event.targetScope.$id === $scope.$id)
                    {
                        $rootScope.$broadcast('msSplashScreen::remove');
                    }
                });


                //init
                init();
            });
})();


