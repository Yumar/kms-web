(function (){
    'use strict';

    angular
            .module('kms')
            .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $state, $mdSidenav) {
        $scope.toggleRight = buildToggler('right');
        $scope.newAlert = function (){
            $state.go('app.login');
        };

        function buildToggler(navID) {
            return function () {
                $mdSidenav(navID)
                        .toggle();
            }
        }
        
        
    }
})();