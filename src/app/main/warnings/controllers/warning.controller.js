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

        function selectedCallback(warning) {
            wc.selectedId = warning._id;
        }
        
        function warningsCallback(){
            wc.list = WarningFactory.warnings;
        }

        function saveWarning(w) {
            w.user = UserFactory.getCurrentUser();
            console.info("a warning created  ", w);
            WarningFactory.createWarning(w);
        }
        
        function getWarningTypes(){
            WarningFactory
                    .getTypes()
                    .then(function(result){
                        wc.warningTypes = result.data;
                    })
        }

        wc.selectWarning = function (w) {
            WarningFactory.setSelected(w);
        };
        
        wc.isSelected = function(id){
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
                if(warning && !warning._id)
                saveWarning(warning);
            }, function () {

            });
        }
        
        getWarningTypes();
        WarningFactory.registerSelectedCallback(selectedCallback);
        WarningFactory.registerWarningsCallBacks(warningsCallback);
    }
})();