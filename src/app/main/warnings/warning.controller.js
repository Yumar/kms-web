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
        wc.selected = {};
        wc.list = [];

        wc.selectWarning = function (w) {
            wc.selected = w;
        };

        wc.showDetailModal = function () {
            $mdDialog.show({
                controller: 'WarningModalController',
                templateUrl: 'app/main/warnings/templates/warning.edit.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
                    .then(function (warning) {
                        console.info(warning);
                    }, function () {
                        wc.selected = {};
                    });
        }

        wc.list = WarningFactory.getAll();
    }
})();
