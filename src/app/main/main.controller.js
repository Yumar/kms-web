(function ()
{
    'use strict';

    angular
        .module('kms')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope, UserFactory){
        //Login
        UserFactory.login("user", "pass");
        
        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if ( event.targetScope.$id === $scope.$id )
            {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
  
    }
})();