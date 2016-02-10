/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular.module('kms.settings.warining-area')
            .controller('WarningAreaController', WarningAreaController);

    function WarningAreaController() {
        var wac = this;
        wac.zones = [
            {
                TypeOfPlaceDesc: {
                    NameEs: "Casa"
                },
                Localitys: {
                    Sectors: {
                        Google_Sector: "BellaVista"
                    }
                }
            },
            {
                TypeOfPlaceDesc: {
                    NameEs: "Work"
                },
                Localitys: {
                    Sectors: {
                        Google_Sector: "Evaristo Morales"
                    }
                }
            }
        ];


    }

})();