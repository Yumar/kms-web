(function () {
    'use strict';
    angular.module('kms', [
        'kms.map',
        'kms.warning',
        'kms.settings',
        'kms.auth',
        'app.core',
        'ui.router'
    ])
            .constant("server", {
                "api": "http://localhost/api/",
                "url": "http://localhost/",
                "png-icons": "/assets/icons/png/",
                "images-map": "/assets/images/map/"
            });
})();

