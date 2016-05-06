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
                "imagesMap": "/assets/images/map/"
            });
})();

