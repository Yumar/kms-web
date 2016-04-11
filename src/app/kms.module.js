(function () {
    'use strict';
    angular.module('kms', [
        'kms.map',
        'kms.warning',
        'kms.auth',
        'app.core',
        'ui.router'
    ])
            .constant("server", {
                "api": "http://localhost/api/",
                "url": "http://localhost/",
                "pngIcons": "/assets/icons/png/",
                "imagesMap": "/assets/images/map/"
            });
})();

