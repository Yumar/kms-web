(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('kms', [
            'kms.auth',
            'kms.map',
            'kms.warning',
            'kms.settings',
            'app.core'
        ]);
})();