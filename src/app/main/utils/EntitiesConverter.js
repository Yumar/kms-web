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
        };

        serv.warningTypeToServer = function (clientWarningType) {

            var warningTypeServer = {
                id: clientWarningType._id
            };
            return warningTypeServer;
        };

        serv.warningAreaToServer(area){
          var userAddress = {
            UserId: '',
            Localitys: {
                latitud: area.location.latitude,
                longitud: area.location.longitude,
                address: area.location.address,
                country: area.location.country,
                city: area.location.city,
                sector: area.location.neighborhood
            },
            Notification:true
          };

          return userAddress;

        }

        return serv;
    }
})();
