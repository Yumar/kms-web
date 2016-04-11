(function () {
    'use strict';

    angular.module('kms.auth.profile')
            .controller('ProfileController', function (UserFactory, $state, $scope, $rootScope, $mdDialog) {
                var pc = this;
                pc.user;
                pc.openAreaModal = openAreaModal; 

                function init() {
                    pc.user = UserFactory.getCurrentUser();
                }

                function openAreaModal(area) {
                    $mdDialog.show({
                        controller: 'NotificationAreaController',
                        templateUrl: 'app/main/user/profile/templates/warning-area-modal.html',
                        parent: angular.element(document.body),
                        locals: {notificationArea: area}, 
                        clickOutsideToClose: true
                    }).then(function () {
                        init();
                    });
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


