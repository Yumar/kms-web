/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('kms.settings', ['kms.settings.warning-area'])
            .config(config);

    function config($stateProvider) {
        $stateProvider.state('settings', {
            url: '/settings',
            views: {
                '':{
                    templateUrl: 'app/main/settings/settings.html'
                },
                'toolbar@app': {
                    templateUrl: 'app/main/toolbar/top-toolbar.html'
                },
                'main@settings': {
                    templateUrl: 'app/main/settings/warning-area/warning-area.list.html',
                    controller: 'WarningAreaController as wac'
                }
            }

        });
    }

})();


