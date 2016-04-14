(function() {
  'use strict';

  angular.module('kms.auth.profile')
    .controller('ProfileController', function(UserFactory, $state, $scope, $rootScope, $mdDialog, user) {
      var pc = this;
      pc.user = user.data;
      pc.openAreaModal = openAreaModal;

      function openAreaModal(area) {
        $mdDialog.show({
          controller: 'NotificationAreaController',
          templateUrl: 'app/main/user/profile/templates/warning-area-modal.html',
          parent: angular.element(document.body),
          locals: {
            notificationArea: area || {},
            userId: pc.user._id
          },
          clickOutsideToClose: true
        }).then(function() {
          UserFactory.get(pc.user._id)
            .then(function(result) {
              pc.user = result.data;
            })
        });
      }

      // Remove the splash screen
      $scope.$on('$viewContentAnimationEnded', function(event) {
        if (event.targetScope.$id === $scope.$id) {
          $rootScope.$broadcast('msSplashScreen::remove');
        }
      });
    });
})();