/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .controller('WarningController', WarningController);

    function WarningController(WarningFactory, UserFactory, $mdDialog) {
        var wc = this;
        wc.list = [];
        wc.selectedId = null;
        wc.warningTypes = [];

        function saveWarning(w) {
            w.user = UserFactory.getCurrentUser();
            console.info("a warning created  ", w);
            WarningFactory.createWarning(w);
        }

//        function getWarningTypes() {
//            WarningFactory
//                    .getTypes()
//                    .then(function (result) {
//                        wc.warningTypes = result.data;
//                    })
//        }

        function getWarningTypes() {
            WarningFactory.getTypes(warningTypesCallback);
        }

        wc.selectWarning = function (w) {
            WarningFactory.setSelected(w);
        };

        wc.isSelected = function (id) {
            return wc.selectedId === id;
        }

        wc.showDetailModal = function () {
            $mdDialog.show({
                controller: 'WarningModalController',
                templateUrl: 'app/main/warnings/templates/warning.edit.html',
                parent: angular.element(document.body),
                locals: {types: wc.warningTypes},
                clickOutsideToClose: true
            }).then(function (warning) {
                if (warning && !warning._id)
                    saveWarning(warning);
            }, function () {

            });
        }

        wc.downvote = function(id){
          WarningFactory.vote(id, wc.user.id, false,
            function(){
              alert("downvoted successfully")
          })
        }

        wc.upvote = function(id){
          WarningFactory.vote(id, wc.user.id, true,
            function(){
              alert("upvoted successfully")
          })
        }

        // callbacks
        function selectedCallback(warning) {
            wc.selectedId = warning._id;
        }

        function warningTypesCallback(warningTypes){
            if(warningTypes && warningTypes.length > 0)
                wc.warningTypes = warningTypes;
        }

        function warningsCallback() {
            wc.list = WarningFactory.warnings;
        }

        function userChangedCallback() {
            //customize user specific areas
            console.log('userChangedCallback called');

            wc.user = UserFactory.getCurrentUser();

            var notificationAreas = wc.user ? wc.user.notificationAreas : [];
            WarningFactory.customizeWarningAreas(notificationAreas);
        }

//        //init
//        userChangedCallback();
//        warningsCallback();
//        getWarningTypes();
//
//        //watch for current user changes from factory
//        UserFactory.registerCurrentUserCallback(userChangedCallback);
       WarningFactory.registerSelectedCallback(selectedCallback);
       WarningFactory.registerWarningsCallBacks(warningsCallback);

// new server
        // function loadWarnings() {
        //     WarningFactory.getAll(function (list) {
        //         wc.list = list;
        //     });
        // }
        //
        //
        // loadWarnings();
        getWarningTypes();

    }
})();
