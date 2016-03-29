(function () {
    'use strict';

    angular.module('kms.auth')
            .factory('UserFactory', userFact);

    function userFact(server, $http) {
        var serv = {
            currentUser: null,
            currentUserCallbacks: []
        };
        
        serv.getCurrentUser = function(){
            console.info(this.currentUser);
            return this.currentUser;
        }
        
        serv.setCurrentUser = function (user){
            this.currentUser = user;
            currentUserChanged(user);
        }

        serv.login = function(user, pass) {
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
                console.log(result);
                serv.setCurrentUser(result.data);
                return event;
            }, function () {
                serv.setCurrentUser(null);
                return event;
            })
        };

        serv.logout = function () {
            $http.delete(server.api + 'login')
                    .then(function () {
                        serv.currentUser = null;
                    });
        };

        serv.register = function () {
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
        
        serv.registerCurrentUserCallback = function(callback){
            serv.currentUserCallbacks.push(callback)
        }
        
        function currentUserChanged(user) {
            angular.forEach(serv.currentUserCallbacks, function (callback) {
                callback(user);
            })
        }

        return serv;
    }
})();