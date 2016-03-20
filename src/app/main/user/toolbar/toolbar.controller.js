(function ()
{
    'use strict';

    angular
        .module('kms.auth.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $mdSidenav, $translate, $mdToast)
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
        vm.changeLanguage = changeLanguage;
        vm.setUserStatus = setUserStatus;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Select the first status as a default
            vm.userStatus = vm.userStatusOptions[0];

            // Get the selected language directly from angular-translate module setting
            vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
        }


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

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }
    }

})();