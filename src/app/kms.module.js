(function () {
    'use strict';
    angular.module('kms', [
        'ui.router',
        'mdPickers',
        'kms.map',
        'kms.warning',
        'kms.auth',
        'app.core'
    ])
            .constant("server", {
                "api": "http://localhost/api/",
                "url": "http://localhost/",
                "pngIcons": "/assets/icons/png/",
                "imagesMap": "/assets/images/map/",
                "DotNet": {
                    "api": "http://servicekms.azurewebsites.net/api/",
                    "url": "http://servicekms.azurewebsites.net/",
                    "socket": "http://servicekms.azurewebsites.net/signalr"
                }
            });
})();

