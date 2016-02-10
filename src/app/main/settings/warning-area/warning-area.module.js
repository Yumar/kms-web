/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular.module('kms.settings.warining-area', [])
            .config(config);
    
    function config($stateProvider) {
        $stateProvider.state('app.warningArea',{
            views:{
                'sidebar@app':{
                    templateUrl:'app/main/settings/warning-area/warning-area.list.html',
                    controller:'WarningAreaController as wac'
                }
            }
        })
    }

})();