(function ()
{
    'use strict';

    angular
            .module('kms.auth.login')
            .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(UserFactory, $state, WarningFactory)
    {
        var lc = this;
        lc.error;
        lc.login = login;

        function loginCallback(event) {
            if(event){
                lc.error = event.data;
                console.log(lc.error);
            }else{
                $state.go('kms');
                WarningFactory.customizeWarningAreas(UserFactory.getCurrentUser().notificationAreas);
            }
        }

        function login() {
            if (lc.form.email && lc.form.password) {
                UserFactory.login(lc.form.email, lc.form.password, loginCallback);
            }

        }


    }
})();