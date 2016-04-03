(function () {
    'use strict';

    angular.module('kms.auth')
            .factory('UserFactory', userFact);

    function userFact(server, $http) {
        var serv = {
            currentUser: null,
            currentUserCallbacks: []
        };

        serv.getCurrentUser = function () {
            return this.currentUser;
        }

        serv.setCurrentUser = function (user) {
            this.currentUser = user;
            currentUserChanged();
        }

        serv.login = function (user, pass, callback) {
            /*
             * sends a login request and saves the result 
             * on the service so could be used as session
             */
            $http.post(
                    server.api + 'login',
                    {
                        username: user,
                        password: pass
                    }
            ).then(function (result, event) {
                serv.setCurrentUser(result.data);
                callback(event);
            }, function (event) {
                serv.setCurrentUser(null);
                callback(event);
            })
        };

        serv.logout = function () {
            $http.delete(server.api + 'login')
                    .then(function () {
                        serv.currentUser = null;
                        currentUserChanged();
                    });
        };

        serv.register = function (user) {
            return $http.post(server.api + 'user', user);
        }

        serv.changeStatus = function (userid, active) {
            /*
             * Activate or deactivate users depending on the boolean value
             */
            return $http.patch(server.api + 'user/' + userid, {
                active: active
            });
        }

        serv.registerCurrentUserCallback = function (callback) {
            serv.currentUserCallbacks.push(callback)
        }

        function currentUserChanged() {
            angular.forEach(serv.currentUserCallbacks, function (callback) {
                callback(serv.getCurrentUser());
            })
        }

        return serv;
    }
})();