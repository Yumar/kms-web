/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .controller('WarningController', WarningController);

    function WarningController(WarningFactory, $mdDialog) {
        var wc = this;
        wc.list = [];
        wc.selectedId = null;
        wc.warningTypes = [];

        function selectedCallback(warning) {
            wc.selectedId = warning.id;
        }

        function saveWarning(w) {
            console.info(w);
//            var savePromise = WarningFactory.save(w);
//            savePromise.then(function(data){
//                w = data;
//                WarningFactory.setSelected(w);
//            });
        }
        
        function getWarningTypes(){
            WarningFactory
                    .getTypes()
                    .then(function(data){
                        wc.warningTypes = data;
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
                saveWarning(warning);
            }, function () {

            });
        }

        wc.list = WarningFactory.getAll();
        getWarningTypes();
        WarningFactory.registerSelectedCallback(selectedCallback);
    }
})();
