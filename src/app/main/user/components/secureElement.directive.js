(function () {
    'use strict';

    angular.module('kms.auth')
            .directive('secureElement', function (UserFactory, $mdDialog, $state) {
                return {
                    restrict: 'AEC',
                    link: link
                }
                /*
                 * TODO: make it capture click from all the button, not just the icon.
                 */

                function link(scope, element, attrs) {
                    console.log(element);
                    element[0].addEventListener("click", function (event) {
                        console.log('secure item clicked');
                        if (!UserFactory.getCurrentUser()) {
                            event.preventDefault();
                            event.stopPropagation();
                            showUnAuthorizedAction(element);
                        }

                    }, true);
                }

                function showUnAuthorizedAction(element) {
                    var unauthorizedDialog = $mdDialog.confirm()
                            .parent(document.querySelector('body'))
                            .clickOutsideToClose(true)
                            .title('Autenticacón Requerida')
                            .textContent('Necesitas iniciar sesión para poder llevar a cabo esta acción')
                            .ariaLabel('Authentication Required Dialog')
                            .ok('Iniciar Sesion')
                            .cancel('Cancelar');

                    $mdDialog.show(unauthorizedDialog)
                            .then(function () {
                                $state.go('kms.login');
                            });
                }
            });
})();


