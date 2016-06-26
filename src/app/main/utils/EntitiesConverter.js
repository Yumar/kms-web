/* 
 * Copyright (c) 2016, Jumar
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

(function () {
    'use strict';
    angular.module('kms')
            .factory('EntitiesConverterFactory', EntitiesConverter);
    function EntitiesConverter() {
        var serv = {};
        serv.warningsToServer = function (nodeWarning) {
            var serverWarning = {
                userId: nodeWarning.user,
                message: nodeWarning.description,
                typeOfWarningId: nodeWarning.type._id,
                localitys: {
                    latitud: nodeWarning.location.latitude,
                    longitud: nodeWarning.location.longitude,
                    address: nodeWarning.location.address,
                    country: nodeWarning.location.country,
                    city: nodeWarning.location.city,
                    sector: nodeWarning.location.neighborhood
                },
                anonumous: false,
                typeOfWarningDesc: nodeWarning.type.label,
                typeOfWarningLogo: nodeWarning.type.name,
                typeOfWarningLocalUrl: nodeWarning.type.name,
                typeOfWarningRemoteUrl: nodeWarning.type.name,
                id: nodeWarning._id
            };
            return serverWarning;
        };
        serv.warningsToClient = function (serverWarning) {
            var clientWarning = {
                description: serverWarning.message,
                location: {
                    city: serverWarning.localitys.city,
                    country: serverWarning.localitys.country,
                    neighborhood: serverWarning.localitys.sector,
                    state: serverWarning.localitys.city,
                    street: serverWarning.localitys.address,
                    latitude: serverWarning.localitys.latitude,
                    longitude: serverWarning.localitys.longitude,
                    address: serverWarning.localitys.address
                },
                _id: serverWarning.id,
                type: {
                    _id: serverWarning.typeOfWarningId,
                    label: serverWarning.typeOfWarningDesc,
                    name: serverWarning.typeOfWarningLogo
                },
                user: serverWarning.userId,
                reportDate: serverWarning.dateCreated,
                downVotes: [],
                upVotes: []
            };
            if (serverWarning.warningVows && serverWarning.warningVows.length > 0) {
                serverWarning.warningVows.forEach(function (value, index) {
                    if (value.selection) {
                        clientWarning.upVotes.push({
                            _id: value.userId
                        });
                    } else {
                        clientWarning.downVotes.push({
                            _id: value.userId
                        });
                    }
                });
            }


            return clientWarning;
        };
        
        serv.warningTypeToClient = function (serverWarningType) {

            var warningTypeClient = {
                _id: serverWarningType.id,
                name: serverWarningType.warningLogo,
                label: serverWarningType.warningDesc
            };
            return warningTypeClient;
        }
        serv.warningTypeToServer = function (clientWarningType) {

            var warningTypeServer = {
                id: clientWarningType._id
            };
            return warningTypeServer;
        }
    }
})();