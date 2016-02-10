/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
    'use strict';
    
    angular.module('kms.settings', ['kms.settings.warining-area'])
            .config(config);
    
    function config($stateProvider) {
        $stateProvider.state('app.settings',{
            views:{
                'sidebar@app':{
                    templateUrl:'app/main/settings/settings.list.html'
                }
            }
        })
    }
    
})();