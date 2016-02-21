/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.warning')
            .controller('WarningController', WarningController);

    function WarningController(WarningFactory) {
        var wc = this;
        wc.selected = {};
        wc.list = [];

        wc.selectWarning = function (w) {
            wc.selected = w;
        };
        
        wc.list = WarningFactory.getAll();
    }
})();
