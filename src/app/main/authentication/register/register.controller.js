(function ()
{
    'use strict';

    angular
        .module('kms.auth.register')
        .controller('RegisterController', ['UserFactory', RegisterController]);

    /** @ngInject 
     * @param {Factory} UserFactory Service for consuming Users comunication methods in the server */
    function RegisterController(UserFactory)
    {
        var self = this;
        
        self.sendForm = function(){
            //transform view user in model user
            var User = {};
            User.Name = self.form.Name;
            User.LastName = self.form.LastName;
            User.Identification = self.form.id;
            User.UserName = self.form.username;
            User.DateOfBirth = self.form.DateOfBirth;
            User.UsersNumbers = [];
            User.UsersNumbers.push({PhoneNo:self.form.phone});
            User.UserEmail = [];
            User.UserEmail.push({Email:self.form.email, Is_Main_Email: true});
            
            
            //send user registration request
            UserFactory.register(User, onRegistrationError, onRegistrationSuccess);
        };
        
        function onRegistrationError(err){// onError callback
            
        }
        
        function onRegistrationSuccess(val){// onSuccess callback
            
        }
    }
})();