(function ()
{
    'use strict';

    angular
        .module('kms.auth.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $mdSidenav, UserFactory, $scope, $state)
    {
        var vm = this;

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
            UserFactory.logout();
            $state.go('kms.login');
        }
        
        //get current user from factory
        userChangedCallback();
        
        //logout
        $scope.logout = logout;
        
        //watch for current user changes from factory
        UserFactory.registerCurrentUserCallback(userChangedCallback);
        function userChangedCallback (){
            $scope.user = UserFactory.getCurrentUser();
        }
    }

})();