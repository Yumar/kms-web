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
        
        

        /**
         * Logout Function
         */
        function logout()
        {
            // Do logout here..
        }
        
        //get current user from factory
        $scope.user = UserFactory.getCurrentUser();
        
        //watch for current user changes from factory
        UserFactory.registerCurrentUserCallback(userChangedCallback);
        function userChangedCallback (user){
            $scope.user = user;
        }
    }

})();