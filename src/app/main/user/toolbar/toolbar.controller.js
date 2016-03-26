(function ()
{
    'use strict';

    angular
        .module('kms.auth.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $mdSidenav, UserFactory, $scope)
    {
        var vm = this;
        $scope.user = UserFactory.getCurrentUser();
        // Data
        $rootScope.global = {
            search: ''
        };

        vm.bodyEl = angular.element('body');

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;

        //////////

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }
        
        //Login
        UserFactory.login("user", "pass");

        /**
         * Logout Function
         */
        function logout()
        {
            // Do logout here..
        }
    }

})();